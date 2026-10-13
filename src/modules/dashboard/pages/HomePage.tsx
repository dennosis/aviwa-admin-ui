import { useAuthStore } from "@/modules/auth/store/useAuthStore";
import { LayoutDashboard, Users, ShieldCheck, LogOut, Zap } from "lucide-react";

export function HomePage() {
  const { user, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header / Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            AVIWA Admin
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right text-sm">
            <p className="font-medium">{user?.name || "Desenvolvedor"}</p>
            <p className="text-slate-400 text-xs">
              {user?.email || "dev@aviwa.com"}
            </p>
          </div>
          <button
            onClick={logout}
            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-rose-400 transition-colors"
            title="Sair"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-6 flex flex-col gap-8">
        {/* Banner de Boas-Vindas */}
        <section className="bg-gradient-to-r from-indigo-900/40 via-purple-900/20 to-slate-900 border border-indigo-500/20 rounded-2xl p-8 relative overflow-hidden">
          <div className="max-w-xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <ShieldCheck className="w-3.5 h-3.5" /> Arquitetura Modular Pronta
            </span>
            <h1 className="text-3xl font-bold tracking-tight">
              Bem-vindo ao Painel de Controle AVIWA
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              Sua aplicação React + Vite está estruturada com suporte a
              autenticação Google, Zustand, React Query e rotas otimizadas.
            </p>
          </div>
        </section>

        {/* Cards de Atalho / Métricas */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <h2 className="font-semibold text-lg">Módulos</h2>
            <p className="text-slate-400 text-sm">
              Gerencie os domínios de negócio isoladamente em{" "}
              <code className="text-indigo-400">src/modules/</code>.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="font-semibold text-lg">Infraestrutura</h2>
            <p className="text-slate-400 text-sm">
              Clientes de API, storage e chamadas HTTP centralizados em{" "}
              <code className="text-indigo-400">src/infra/</code>.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="font-semibold text-lg">Autenticação</h2>
            <p className="text-slate-400 text-sm">
              Google OAuth configurado com armazenamento de sessão no Zustand.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
