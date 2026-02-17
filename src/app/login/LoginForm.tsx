"use client";

import { useState } from "react";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-700 ml-1"
        >
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="ejemplo@correo.com"
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all text-gray-900 placeholder:text-gray-400"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between items-center px-1">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Contraseña
          </label>
          <a
            href="#"
            className="text-xs text-gray-500 hover:text-black transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <input
          id="password"
          type="password"
          required
          placeholder="••••••••"
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all text-gray-900 placeholder:text-gray-400"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
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
  );
}
