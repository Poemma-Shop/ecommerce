"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterFormData } from "@/lib/schemas/auth";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setLoading(true);
    // Aquí es donde conectarás con tu API de NestJS
    console.log("Datos validados para enviar:", data);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
  };

  const inputStyle =
    "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all text-gray-900 placeholder:text-gray-400";
  const labelStyle = "text-sm font-medium text-gray-700 ml-1";
  const errorStyle = "text-xs text-red-500 ml-1 mt-1";

  return (
    <>
      <main className="mx-auto w-full max-w-6xl px-4 py-12 flex items-center justify-center">
        <section className="w-full max-w-2xl bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
              Crea tu cuenta
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Ingresa tus datos personales para continuar
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="firstName" className={labelStyle}>
                Nombres
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Juan"
                className={inputStyle}
                {...register("firstName")}
              />
              {errors.firstName && (
                <span className={errorStyle}>{errors.firstName.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="lastName" className={labelStyle}>
                Apellido
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Lopez"
                className={inputStyle}
                {...register("lastName")}
              />
              {errors.lastName && (
                <span className={errorStyle}>{errors.lastName.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="documentId" className={labelStyle}>
                Cédula
              </label>
              <input
                id="documentId"
                type="text"
                placeholder="12345678"
                className={inputStyle}
                {...register("documentId")}
              />
              {errors.documentId && (
                <span className={errorStyle}>{errors.documentId.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="phoneNumber" className={labelStyle}>
                Número de teléfono
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="0412 3456789"
                className={inputStyle}
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <span className={errorStyle}>{errors.phoneNumber.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label htmlFor="email" className={labelStyle}>
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="ejemplo@correo.com"
                className={inputStyle}
                {...register("email")}
              />
              {errors.email && (
                <span className={errorStyle}>{errors.email.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className={labelStyle}>
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                className={inputStyle}
                {...register("password")}
              />
              {errors.password && (
                <span className={errorStyle}>{errors.password.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="confirmPassword" className={labelStyle}>
                Confirmar contraseña
              </label>
              <input
                id="confirmPassword"
                type="password"
                className={inputStyle}
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <span className={errorStyle}>
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-xl font-medium tracking-wide hover:bg-gray-800 transition-all disabled:bg-gray-400 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Registrando...
                  </>
                ) : (
                  "Registrar cuenta"
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              ¿Ya tienes cuenta?{" "}
              <a
                href="/login"
                className="font-medium text-black hover:underline underline-offset-4"
              >
                Inicia sesión
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
