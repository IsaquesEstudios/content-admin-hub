import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Servicos from "./pages/Servicos";
import PaineisLed from "./pages/PaineisLed";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/paineis-de-led" element={<PaineisLed />} />
            <Route path="/letreiros" element={<Letreiros />} />
            <Route path="/totens" element={<Totens />} />
            <Route path="/estruturas" element={<Estruturas />} />
            <Route path="/manutencao" element={<Manutencao />} />
            <Route path="/pecas" element={<Pecas />} />
            <Route path="/sobre" element={<SobreNos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/auth" element={<Auth />} />
            {/* Admin Routes */}
            <Route path="/user" element={<AdminDashboard />} />
            <Route path="/user/blog" element={<AdminBlog />} />
            <Route path="/user/seo" element={<AdminSeo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
