import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-6xl px-4 min-h-[calc(100vh-80px)] flex items-center justify-center">
        <section className="w-full max-w-md bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
              Bienvenido de nuevo
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Ingresa tus credenciales para acceder a tu cuenta
            </p>
          </div>

          <LoginForm />

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              ¿No tienes cuenta?{" "}
              <a
                href="/register"
                className="font-medium text-black hover:underline underline-offset-4"
              >
                Regístrate
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
