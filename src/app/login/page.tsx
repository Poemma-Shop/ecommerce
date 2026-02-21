"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "@/lib/schemas/auth";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    console.log("Datos de login validados:", data);

    // Simulación de API
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
  };

  const inputStyle =
    "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all text-gray-900 placeholder:text-gray-400";
  const labelStyle = "text-sm font-medium text-gray-700 ml-1";
  const errorStyle = "text-xs text-red-500 ml-1 mt-1";

  return (
    <main className="min-h-dvh flex items-center justify-center px-4">
      <section className="w-full max-w-md bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
        <div className="text-center mb-8">
          <div className="relative mb-6">
            <Link
              href="/"
              className="absolute -left-2 -top-2 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all"
              title="Volver al inicio"
            >
              <ArrowUturnLeftIcon className="w-5 h-5" />
            </Link>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            Bienvenido de nuevo
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Ingresa tus credenciales para acceder a tu cuenta
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
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
            <div className="flex justify-between items-center px-1">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <Link
                href="#"
                className="text-xs text-gray-500 hover:text-black transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
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

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full bg-black text-white py-3 rounded-xl font-medium tracking-wide hover:bg-gray-800 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Cargando...
              </>
            ) : (
              "Iniciar Sesión"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            ¿No tienes cuenta?{" "}
            <Link
              href="/register"
              className="font-medium text-black hover:underline underline-offset-4"
            >
              Regístrate
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
