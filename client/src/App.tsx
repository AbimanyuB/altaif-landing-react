import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/home/Navigation";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Consultation from "./pages/Consultation";
import DemoModal from "@/components/home/DemoModal";
import { DemoModalProvider, useDemoModalContext } from "@/contexts/DemoModalContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Consultation} />
      <Route path="/consultation" component={Consultation} />
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
