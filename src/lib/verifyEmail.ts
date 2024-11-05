export async function sendVerifyEmail(email: string, token: string) {
    await fetch('http://localhost:3000/api/emails', {
        method: 'POST',
        body: JSON.stringify({
            email, token
        })
    })
}