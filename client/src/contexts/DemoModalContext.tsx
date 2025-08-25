import React, { createContext, useContext, ReactNode } from 'react';
import useDemoModal from '@/hooks/useDemoModal';

interface DemoModalContextType {
  isModalOpen: boolean;
  openModal: (trigger?: 'pageLoad' | 'demoClick') => void;
  closeModal: () => void;
  modalTrigger: 'pageLoad' | 'demoClick';
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export const DemoModalProvider = ({ children }: { children: ReactNode }) => {
  const demoModalState = useDemoModal();

  return (
    <DemoModalContext.Provider value={demoModalState}>
      {children}
    </DemoModalContext.Provider>
  );
};

export const useDemoModalContext = () => {
  const context = useContext(DemoModalContext);
  if (context === undefined) {
    throw new Error('useDemoModalContext must be used within a DemoModalProvider');
  }
  return context;
};

export default DemoModalContext;