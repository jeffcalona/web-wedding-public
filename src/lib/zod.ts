import { object, string } from "zod";

export const loginSchema = object({
    email: string({ required_error: "El email es requerido" })
        .min(1, "El email es requerido")
        .email("Email inválido"),
    password: string({ required_error: "El password es requerido" })
        .min(6, "La contraseña debe contener al menos 6 carácteres")
        .max(32, "La contraseña supera los 32 carácteres"),
});

export const registerSchema = object({
    email: string({ required_error: "El email es requerido" })
        .min(1, "El email es requerido")
        .email("Email inválido"),
    password: string({ required_error: "El password es requerido" })
        .min(6, "La contraseña debe contener al menos 6 carácteres")
        .max(32, "La contraseña supera los 32 carácteres"),
});

export const guestSchema = object({
    guestName: string({ required_error: "Los datos del invitado son requeridos" })
        .min(2, "El nombre del invitado debe tener un mínimo de 2 caracteres")
})