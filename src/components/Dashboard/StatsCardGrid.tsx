import React from 'react';
import { cn } from '@/lib/utils';
import StatCard from './StatCard';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

// Data for Funnel Count Card
interface FunnelStage {
  id: string;
  name: string;
  count: number;
  value: number;
  days: number;
  color: string;
}

const funnelData: FunnelStage[] = [
  { id: 'discovery', name: 'Discovery', count: 200, value: 200, days: 2, color: 'bg-red-500' },
  { id: 'qualified', name: 'Qualified', count: 100, value: 100, days: 2, color: 'bg-yellow-400' },
  { id: 'conversation', name: 'In conversation', count: 50, value: 100, days: 5, color: 'bg-indigo-500' }, // Image shows dark blue/purple
  { id: 'negotiations', name: 'Negotiations', count: 20, value: 50, days: 8, color: 'bg-green-500' },
  { id: 'closed_won', name: 'Closed won', count: 20, value: 50, days: 10, color: 'bg-purple-500' }, // Image shows purple
];
const totalFunnelLeads = funnelData.reduce((sum, stage) => sum + stage.count, 0);

// Data for Sources Card
interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}
const sourcesData: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#EF4444' }, // red-500
  { name: 'Behance', value: 1000, percentage: 40, color: '#F59E0B' }, // yellow-500
  { name: 'Instagram', value: 1000, percentage: 10, color: '#10B981' }, // green-500
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#06B6D4' }, // cyan-500 (approximation, image is teal/blue)
];
const totalSourceValue = sourcesData.reduce((sum, source) => sum + source.value, 0);

const StatsCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <StatCard title="Funnel count">
        <div className="mb-4">
          <span className="text-4xl font-bold text-foreground">600</span>
          <span className="ml-2 text-muted-foreground">active leads</span>
        </div>
        <div className="w-full h-3 rounded-full bg-muted flex overflow-hidden mb-4">
          {funnelData.map((stage) => (
            <div
              key={stage.id}
              className={cn('h-full', stage.color)}
              style={{ width: `${(stage.count / totalFunnelLeads) * 100}%` }}
              title={`${stage.name}: ${stage.count}`}
            ></div>
          ))}
        </div>
        <ul className="space-y-2 text-sm">
          {funnelData.map((stage) => (
            <li key={stage.id} className="flex justify-between items-center text-muted-foreground">
              <div className="flex items-center">
                <span className={cn('w-3 h-3 rounded-sm mr-2', stage.color)}></span>
                <span>{stage.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="w-10 text-right">{stage.count}</span>
                <span className="w-16 text-right text-foreground font-medium">$ {stage.value}</span>
                <span className="w-12 text-right">{stage.days} days</span>
              </div>
            </li>
          ))}
        </ul>
      </StatCard>

      <StatCard title="Sources">
        <div className="grid grid-cols-2 gap-4 items-center">
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sourcesData}
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="80%"
                  dataKey="value"
                  paddingAngle={1}
                >
                  {sourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number, name: string, props) => [`$${value}`, props.payload.name]}
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="space-y-2 text-sm">
            {sourcesData.map((source) => (
              <li key={source.name} className="flex justify-between items-center">
                <div className="flex items-center">
                  <span style={{ backgroundColor: source.color }} className="w-3 h-3 rounded-sm mr-2"></span>
                  <span className="text-muted-foreground">{source.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-foreground font-medium">$ {source.value.toLocaleString()}</span>
                  <span className="text-muted-foreground">{source.percentage}%</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 text-right">
           <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">from leads total</span>
        </div>
      </StatCard>
    </div>
  );
};

export default StatsCardGrid;
