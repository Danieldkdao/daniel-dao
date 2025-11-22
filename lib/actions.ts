"use server"

import transporter from '@/lib/nodemailer';

export const sendMessageAction = async (name: string, email: string, subject: string, message: string) => {
  const emailHtml = `
    <div style="margin:0;padding:32px 20px;background:radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.08), transparent 35%),radial-gradient(circle at 80% 10%, rgba(14, 165, 233, 0.08), transparent 30%),#0f172a;font-family:'Outfit',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#e2e8f0;">
      <div style="max-width:640px;margin:0 auto;background:linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(236, 72, 153, 0.08), rgba(14, 165, 233, 0.08));border:1px solid rgba(255,255,255,0.08);border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.35);overflow:hidden;">
        <div style="padding:18px 24px;background:rgba(255,255,255,0.04);border-bottom:1px solid rgba(255,255,255,0.06);">
          <p style="margin:0;font-size:20px;font-weight:700;letter-spacing:0.3px;color:#f8fafc;">New message from your portfolio</p>
          <span style="display:inline-block;padding:8px 12px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);color:#fcd34d;font-weight:600;font-size:12px;letter-spacing:0.6px;text-transform:uppercase;margin-top:6px;">Contact form</span>
        </div>
        <div style="padding:22px 24px 28px;line-height:1.7;font-size:15px;">
          <p style="margin:0 0 10px 0;">Hi Daniel,</p>
          <p style="margin:0 0 12px 0;">You just received a new message via your site. Here are the details:</p>
          <div style="margin:18px 0 8px;padding:16px;border-radius:14px;background:rgba(15,23,42,0.7);border:1px solid rgba(255,255,255,0.06);color:#f8fafc;white-space:pre-line;">${message}</div>
          <p style="margin:10px 0 0 0;font-size:13px;color:#cbd5e1;">
            From: <strong style="color:#f8fafc;">${name || "Anonymous"}</strong><br />
            Email: <strong style="color:#f8fafc;">${email}</strong><br />
            Subject: <strong style="color:#f8fafc;">${subject || "No subject provided"}</strong>
          </p>
        </div>
      </div>
    </div>
  `;
  const mailOptions = {
    from: email,
    to: process.env.TO_EMAIL,
    subject,
    html: emailHtml,
    text: `Hi Daniel, you just received a new message on your personal website: ${message}`
  }
  await transporter.sendMail(mailOptions);
}
