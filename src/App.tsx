import { useState } from "react";
import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import type { LoaderFunctionArgs } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/contexts/AuthContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { supabaseSSR } from "@/lib/supabase-ssr";
import Index from "./pages/Index";
import Servicos from "./pages/Servicos";
import PaineisLed from "./pages/PaineisLed";
import Campanha from "./pages/Campanha";
import Letreiros from "./pages/Letreiros";
import Totens from "./pages/Totens";
import Estruturas from "./pages/Estruturas";
import Manutencao from "./pages/Manutencao";
import Pecas from "./pages/Pecas";
import SobreNos from "./pages/SobreNos";
import Contato from "./pages/Contato";
import Blog from "./pages/Blog";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminBlog from "./pages/admin/BlogAdmin";
import AdminSeo from "./pages/admin/SeoAdmin";
import BlogPost from "./pages/BlogPost";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosDeUso from "./pages/TermosDeUso";
import NotFound from "./pages/NotFound";

/**
 * Root layout that provides all context providers.
 * Replaces the old App component wrapper.
 * BrowserRouter is now handled internally by vite-react-ssg.
 */
function RootLayout() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            refetchOnMount: false,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <Outlet />
          <CookieConsent />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

// --- SSG Loaders ---

async function blogListLoader() {
  try {
    const { data } = await supabaseSSR
      .from("blog_posts")
      .select("id, title, slug, excerpt, featured_image, created_at")
      .eq("is_published", true)
      .order("created_at", { ascending: false });
    return { posts: data || [] };
  } catch {
    return { posts: [] };
  }
}

async function blogPostLoader({ params }: LoaderFunctionArgs) {
  try {
    const slug = params.slug;
    if (!slug) return { post: null };
    const { data } = await supabaseSSR
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .maybeSingle();
    return { post: data };
  } catch {
    return { post: null };
  }
}

// --- Route definitions ---

export const routes: RouteRecord[] = [
  {
    element: <RootLayout />,
    children: [
      // Public pages (pre-rendered during SSG)
      { path: "/", element: <Index /> },
      { path: "/servicos", element: <Servicos /> },
      { path: "/paineis-de-led", element: <PaineisLed /> },
      { path: "/campanha", element: <Campanha /> },
      { path: "/letreiros", element: <Letreiros /> },
      { path: "/totens", element: <Totens /> },
      { path: "/estruturas", element: <Estruturas /> },
      { path: "/manutencao", element: <Manutencao /> },
      { path: "/pecas", element: <Pecas /> },
      { path: "/sobre", element: <SobreNos /> },
      { path: "/contato", element: <Contato /> },

      // Blog (SSG with loaders)
      {
        path: "/blog",
        element: <Blog />,
        entry: "src/pages/Blog.tsx",
        loader: blogListLoader,
      },
      {
        path: "/blog/:slug",
        element: <BlogPost />,
        entry: "src/pages/BlogPost.tsx",
        loader: blogPostLoader,
        getStaticPaths: async () => {
          try {
            const { data } = await supabaseSSR
              .from("blog_posts")
              .select("slug")
              .eq("is_published", true);
            return data?.map((p) => `/blog/${p.slug}`) || [];
          } catch {
            return [];
          }
        },
      },

      // Legal pages
      { path: "/politica-de-privacidade", element: <PoliticaPrivacidade /> },
      { path: "/termos-de-uso", element: <TermosDeUso /> },

      // Auth & Admin (SPA only, not pre-rendered with useful content)
      { path: "/auth", element: <Auth /> },
      { path: "/user", element: <AdminDashboard /> },
      { path: "/user/blog", element: <AdminBlog /> },
      { path: "/user/seo", element: <AdminSeo /> },

      // Catch-all (SPA only)
      { path: "*", element: <NotFound /> },
    ],
  },
];
