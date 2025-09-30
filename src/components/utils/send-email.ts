export async function sendEmail(data: { name: string; email: string; message: string }) {
    try {
        const response = await fetch('/api/sendMail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
            throw new Error(result.error || "Email sending failed");
        }

        console.log("✅ Email sent successfully to omesh.chintha30@gmail.com");
    } catch (error) {
        console.error("❌ Error sending email:", error);
    }
}
