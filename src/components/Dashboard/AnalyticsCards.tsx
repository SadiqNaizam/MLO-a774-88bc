import React from 'react';
import { cn } from '@/lib/utils';
import AnalyticsCard from './AnalyticsCard';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ReasonLost {
  id: string;
  percentage: number;
  description: string;
}

const reasonsLostData: ReasonLost[] = [
  { id: 'rl1', percentage: 40, description: 'The proposal is unclear' },
  { id: 'rl2', percentage: 20, description: 'However venture pursuit' },
  { id: 'rl3', percentage: 10, description: 'Other' },
  { id: 'rl4', percentage: 30, description: 'The proposal is unclear' }, // Duplicate description from image, kept for accuracy
];

interface OtherDataPoint {
  id: string;
  value: string;
  label: string;
  subtext?: string;
  hasInfoIcon?: boolean;
}

const otherData: OtherDataPoint[] = [
  { id: 'od1', value: '900', label: 'total leads count' },
  { id: 'od2', value: '12', label: 'days in average', subtext: 'to convert lead' },
  { id: 'od3', value: '30', label: 'inactive leads', hasInfoIcon: true },
];

const AnalyticsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <AnalyticsCard title="Reasons of leads lost">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
          {reasonsLostData.map((reason) => (
            <div key={reason.id}>
              <p className="text-3xl font-bold text-foreground">{reason.percentage}%</p>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </AnalyticsCard>

      <AnalyticsCard title="Other data">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-8">
          {otherData.map((dataPoint) => (
            <div key={dataPoint.id}>
              <p className="text-3xl font-bold text-foreground flex items-center">
                {dataPoint.value}
                {dataPoint.hasInfoIcon && (
                  <TooltipProvider>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger asChild>
                        <Info size={16} className="ml-1.5 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Additional information about inactive leads.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </p>
              <p className="text-sm text-muted-foreground">{dataPoint.label}</p>
              {dataPoint.subtext && (
                <p className="text-xs text-muted-foreground">{dataPoint.subtext}</p>
              )}
            </div>
          ))}
        </div>
      </AnalyticsCard>
    </div>
  );
};

export default AnalyticsCards;
