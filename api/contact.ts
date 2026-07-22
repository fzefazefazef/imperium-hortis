import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = 'contact@imperiumhortis.com';
const FROM = 'Imperium Hortis <contact@imperiumhortis.com>';
const ALLOWED_ORIGIN = 'https://imperiumhortis.com';

export default async function handler(req: any, res: any) {
  // CORS : autoriser uniquement le domaine du site
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const body = req.body || {};
    console.log(
      '[contact] payload received — keys filled?',
      Object.fromEntries(Object.entries(body).map(([key, value]) => [key, Boolean(String(value ?? '').trim())]))
    );

    const { firstname, lastname, email, phone, project, budget, description, honeypot } = body;

    // Honeypot anti-spam : si rempli, on renvoie succès factice sans envoyer
    if (honeypot) return res.status(200).json({ ok: true });

    if (!firstname || !lastname || !email || !description) {
      return res.status(400).json({ error: 'Champs requis manquants' });
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
        <p><b>Téléphone :</b> ${phone || '—'}</p>
        <p><b>Projet :</b> ${project || '—'}</p>
        <p><b>Budget :</b> ${budget || '—'}</p>
        <hr>
        <p>${(description || '').replace(/\n/g, '<br>')}</p>
      `,
    });

    // 2) Confirmation au visiteur
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: 'Votre demande — Imperium Hortis',
      html: `
        <p>Bonjour ${firstname},</p>
        <p>Nous avons bien reçu votre demande et vous répondrons dans les plus brefs délais.</p>
        <p>À très bientôt,<br>L'équipe Imperium Hortis</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    console.error('[contact] send failed:', e);
    return res.status(500).json({ error: 'Envoi impossible' });
  }
}
