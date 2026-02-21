import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Correo electrónico inválido"),
  password: z.string().min(8, "La clave debe tener al menos 8 caracteres"),
});

export const registerSchema = z.object({
  firstName: z.string().min(2, "El nombre es muy corto"),
  lastName: z.string().min(2, "El apellido es muy corto"),
  documentId: z.string().min(7, "Cédula inválida").regex(/^[0-9]+$/, "Solo números"),
  phoneNumber: z.string().min(10, "Mínimo 10 dígitos").regex(/^[0-9]+$/, "Solo números"),
  email: z.string().email("Correo electrónico inválido"),
  password: z.string().min(8, "La clave debe tener al menos 8 caracteres"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;