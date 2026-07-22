import { Resend } from "npm:resend@6.18.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY") ?? "");
const TO = "contact@imperiumhortis.com";
const FROM = "Imperium Hortis <contact@imperiumhortis.com>";
const ALLOWED_ORIGIN = "https://imperiumhortis.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 200, headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const { firstname, lastname, email, phone, project, budget, description, honeypot } = await req.json();

    // Honeypot anti-spam : si rempli, on renvoie succès factice sans envoyer
    if (honeypot) return json({ ok: true });

    if (!firstname || !lastname || !email || !description) {
      return json({ error: "Champs requis manquants" }, 400);
    }

    // 1) Notification à l'admin
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Nouvelle demande — ${firstname} ${lastname}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><b>Nom :</b> ${firstname} ${lastname}</p>
        <p><b>Email :</b> ${email}</p>
        <p><b>Téléphone :</b> ${phone || "—"}</p>
        <p><b>Projet :</b> ${project || "—"}</p>
        <p><b>Budget :</b> ${budget || "—"}</p>
        <hr>
        <p>${(description || "").replace(/\n/g, "<br>")}</p>
      `,
    });

    // 2) Confirmation au visiteur
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: "Votre demande — Imperium Hortis",
      html: `
        <p>Bonjour ${firstname},</p>
        <p>Nous avons bien reçu votre demande et vous répondrons dans les plus brefs délais.</p>
        <p>À très bientôt,<br>L'équipe Imperium Hortis</p>
      `,
    });

    return json({ ok: true });
  } catch (e) {
    console.error("[contact] send failed:", e);
    return json({ error: "Envoi impossible" }, 500);
  }
});
