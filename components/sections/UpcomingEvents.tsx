'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { upcomingConcerts } from '@/utils/consts';

interface UpcomingEventsProps {
  openTicketPopup: (dateId: string) => void;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ openTicketPopup }) => {
  return (
    <section id="concerts" aria-labelledby="concerts-heading" className="py-16">
      <div className="mx-auto px-6 max-w-page-full">
        <div className="overflow-x-auto rounded-xl border-2 border-table-border backdrop-blur-md overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-table-header border-b-2 border-table-border">
              <tr>
                <th colSpan={4} className="p-4">
                  <h2 id="concerts-heading" className="text-xl md:text-2xl font-bold text-foreground">
                    Найближчі концерти
                  </h2>
                </th>
              </tr>
              <tr className="border-t-2 border-table-border md:table-row hidden">
                {['Місто / Заклад', 'К-сть місць', 'Дата і час', ''].map((header) => (
                  <th key={header} className="px-4 py-4 font-semibold text-muted-foreground tracking-wider">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-table-row divide-y-2 divide-table-border">
              {upcomingConcerts.map((concert, idx) => (
                <React.Fragment key={idx}>
                  <tr className="hover:bg-white/5 transition-colors md:table-row hidden">
                    <td className="px-4 py-3 text-sm font-bold text-white">{concert.city}</td>
                    <td className="px-4 py-3 text-sm text-white">{concert.capacity}</td>
                    <td className="px-4 py-3 text-sm text-white">{concert.date}</td>
                    <td className="px-4 py-3 text-center">
                      <Button 
                        variant="secondary" 
                        className="rounded-lg px-5 py-2 font-bold hover:bg-secondary/90"
                        onClick={() => openTicketPopup(concert.dateId)}
                      >
                        Замовити квиток
                      </Button>
                    </td>
                  </tr>
                  <tr className="md:hidden hover:bg-white/5 transition-colors">
                    <td colSpan={4} className="p-4">
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 gap-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-semibold text-muted-foreground">Місто / Заклад:</span>
                            <span className="text-sm font-bold text-white">{concert.city}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-semibold text-muted-foreground">К-сть місць:</span>
                            <span className="text-sm text-white">{concert.capacity}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-semibold text-muted-foreground">Дата і час:</span>
                            <span className="text-sm text-white">{concert.date}</span>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-table-border">
                          <Button 
                            variant="secondary" 
                            className="w-full rounded-lg px-5 py-2 font-bold hover:bg-secondary/90"
                            onClick={() => openTicketPopup(concert.dateId)}
                          >
                            Замовити квиток
                          </Button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
