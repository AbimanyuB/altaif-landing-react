import { useState, useEffect, useCallback } from 'react';

interface UseDemoModalReturn {
  isModalOpen: boolean;
  openModal: (trigger?: 'pageLoad' | 'demoClick') => void;
  closeModal: () => void;
  modalTrigger: 'pageLoad' | 'demoClick';
}

const useDemoModal = (): UseDemoModalReturn => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTrigger, setModalTrigger] = useState<'pageLoad' | 'demoClick'>('demoClick');
  const [hasShownPageLoadModal, setHasShownPageLoadModal] = useState(false);

  // Page load trigger - show modal after 3 seconds (between 2-5 seconds as specified)
  useEffect(() => {
    if (hasShownPageLoadModal) return;

    const timer = setTimeout(() => {
      if (!isModalOpen && !hasShownPageLoadModal) {
        setModalTrigger('pageLoad');
        setIsModalOpen(true);
        setHasShownPageLoadModal(true);
      }
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [isModalOpen, hasShownPageLoadModal]);

  const openModal = useCallback((trigger: 'pageLoad' | 'demoClick' = 'demoClick') => {
    setModalTrigger(trigger);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return {
    isModalOpen,
    openModal,
    closeModal,
    modalTrigger,
  };
};

export default useDemoModal;