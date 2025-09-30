import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { first_name, last_name, dob, user_email, phone, address, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: "Application Review Submitted - UlkaTV Customer",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #1e3a8a;">New Application Submitted - UlkaTV Customer</h2>

        <p><strong>First Name:</strong> ${first_name}</p>
        <p><strong>Last Name:</strong> ${last_name}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Email ID:</strong> ${user_email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong> ${message}</p>

        <hr style="margin: 30px 0;" />

        <div style="text-align: center;">
          <img 
            src="https://i.postimg.cc/BvvCQCw8/ew.png" 
            alt="Ulka Logo" 
            style="width: 350px; max-width: 100%; margin-bottom: 16px;"
          />
          <p style="margin: 0; font-size: 18px; font-weight: bold;">Manager: Surekha</p>
          <p style="margin: 0; font-size: 16px;">Company: CityOnline Media Private Limited</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Application submitted successfully!" });
  } catch (error: unknown) {
    console.error("Email send error:", error);
    // Optionally extract message if error is an Error object
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ message: `Failed to send email: ${errorMessage}` }, { status: 500 });
  }
}

