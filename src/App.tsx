import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
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
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosDeUso from "./pages/TermosDeUso";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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
            <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/termos-de-uso" element={<TermosDeUso />} />
            <Route path="/auth" element={<Auth />} />
            {/* Admin Routes */}
            <Route path="/user" element={<AdminDashboard />} />
            <Route path="/user/blog" element={<AdminBlog />} />
            <Route path="/user/seo" element={<AdminSeo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
