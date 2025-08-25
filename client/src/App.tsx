import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import DemoModal from "@/components/DemoModal";
import { DemoModalProvider, useDemoModalContext } from "@/contexts/DemoModalContext";
import Consultation from "./pages/Consultation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/consultation" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  const { isModalOpen, closeModal, modalTrigger } = useDemoModalContext();

  return (
    <>
      <Navigation />
      <Toaster />
      <Router />
      <DemoModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        trigger={modalTrigger}
      />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <DemoModalProvider>
          <AppContent />
        </DemoModalProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
