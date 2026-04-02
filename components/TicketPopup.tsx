'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

interface TicketPopupProps {
  isOpen: boolean;
  onClose: () => void;
  dateUrl: string;
}

const TicketPopup: React.FC<TicketPopupProps> = ({ isOpen, onClose, dateUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className="relative bg-background border border-border rounded-lg shadow-2xl w-[90vw] h-[90vh] max-w-4xl max-h-[800px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">Замовити квиток</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>
        
        {/* Iframe Container */}
        <div className="flex-1 p-4">
          <iframe
            src={dateUrl}
            className="w-full h-full border-0 rounded"
            title="Ticket Ordering"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  );
};

export default TicketPopup;
