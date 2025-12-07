import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PaineisLed from "./pages/PaineisLed";
import Letreiros from "./pages/Letreiros";
import Totens from "./pages/Totens";
import Estruturas from "./pages/Estruturas";
import Manutencao from "./pages/Manutencao";
import Pecas from "./pages/Pecas";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/paineis-de-led" element={<PaineisLed />} />
          <Route path="/letreiros" element={<Letreiros />} />
          <Route path="/totens" element={<Totens />} />
          <Route path="/estruturas" element={<Estruturas />} />
          <Route path="/manutencao" element={<Manutencao />} />
          <Route path="/pecas" element={<Pecas />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
