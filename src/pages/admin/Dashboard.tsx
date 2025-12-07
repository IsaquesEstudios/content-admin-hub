import { AdminLayout } from "@/components/admin/AdminLayout";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { FileText, Search, TrendingUp, Eye } from "lucide-react";

const stats = [
  { name: "Posts Publicados", value: "0", icon: FileText, color: "text-primary" },
  { name: "Rascunhos", value: "0", icon: FileText, color: "text-muted-foreground" },
  { name: "Páginas SEO", value: "8", icon: Search, color: "text-primary" },
  { name: "Visualizações", value: "0", icon: Eye, color: "text-muted-foreground" },
];

export default function AdminDashboard() {
  return (
    <ProtectedRoute requireAdmin>
      <AdminLayout>
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-heading font-bold">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Bem-vindo ao painel de administração da Eclipse.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h2 className="text-xl font-heading font-bold mb-4">
                Gerenciar Blog
              </h2>
              <p className="text-muted-foreground mb-4">
                Crie, edite e publique posts no blog da Eclipse.
              </p>
              <a
                href="/user/blog"
                className="inline-flex items-center text-primary hover:underline"
              >
                Ir para Blog <TrendingUp className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h2 className="text-xl font-heading font-bold mb-4">
                Configurar SEO
              </h2>
              <p className="text-muted-foreground mb-4">
                Otimize o SEO das páginas do site.
              </p>
              <a
                href="/user/seo"
                className="inline-flex items-center text-primary hover:underline"
              >
                Ir para SEO <TrendingUp className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
