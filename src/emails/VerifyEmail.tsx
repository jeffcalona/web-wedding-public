import { Body, Button, Container, Head, Heading, Html, Preview, Section, Tailwind, Text } from "@react-email/components";
import * as React from "react";

interface verifyEmailProps {
    token: string
}

const VerifyEmail: React.FC<verifyEmailProps> = ({ token }) => {
    return (
        <Html>
            <Head />
            <Preview>Verifica tu email</Preview>
            <Tailwind>
                <Body>
                    <Container className="my-10 mx-auto w-80">
                        <Section className="text-center">
                            <Heading className="text-2xl">¡Estás a un paso de tu registro!</Heading>
                            <Text className="text-lg">Verifica tu correo</Text>
                            <Button href={`${process.env.BASE_URL}/api/auth/verify-email?token=${token}`} className="bg-black py-3 px-8 text-white">Verificar</Button>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default VerifyEmail