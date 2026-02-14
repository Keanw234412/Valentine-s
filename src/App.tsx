import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedBackground from "./components/AnimatedBackground";
import LandingPage from "./pages/LandingPage";
import CelebrationPage from "./pages/CelebrationPage";
import MemoriesPage from "./pages/MemoriesPage";
import DiaryPage from "./pages/DiaryPage";
import FinalPage from "./pages/FinalPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedBackground>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/celebration" element={<CelebrationPage />} />
            <Route path="/memories" element={<MemoriesPage />} />
            <Route path="/diary" element={<DiaryPage />} />
            <Route path="/finale" element={<FinalPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatedBackground>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;