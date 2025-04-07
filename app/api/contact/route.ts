import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { success: false, error: 'La clé API Resend n\'est pas configurée' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['fabien.dijaud@posteo.net'],
      subject: `Nouveau message de contact de ${name}`,
      text: message,
    });

    console.log('Réponse de Resend:', data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi de l\'email'
      },
      { status: 500 }
    );
  }
} 