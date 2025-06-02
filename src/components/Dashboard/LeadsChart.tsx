import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, AreaChart } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarDays } from 'lucide-react';

interface LeadsChartDataPoint {
  month: string;
  closedWon: number;
  closedLost: number;
}

const initialChartData: LeadsChartDataPoint[] = [
  { month: 'March', closedWon: 68, closedLost: 42 },
  { month: 'April', closedWon: 55, closedLost: 30 },
  { month: 'May', closedWon: 80, closedLost: 22 },
  { month: 'June', closedWon: 62, closedLost: 58 },
  { month: 'July', closedWon: 75, closedLost: 35 },
  { month: 'August', closedWon: 95, closedLost: 25 },
];

const generateRandomizedData = (baseData: LeadsChartDataPoint[]): LeadsChartDataPoint[] => {
  return baseData.map(item => ({
    ...item,
    closedWon: Math.max(10, item.closedWon + Math.floor(Math.random() * 30) - 15),
    closedLost: Math.max(5, item.closedLost + Math.floor(Math.random() * 20) - 10),
  }));
};

const LeadsChart: React.FC = () => {
  const [timeRange, setTimeRange] = useState<string>('last_6_months');
  const [chartData, setChartData] = useState<LeadsChartDataPoint[]>(initialChartData);

  React.useEffect(() => {
    // Simulate fetching new data based on timeRange
    // For demo, just re-randomize current data structure
    setChartData(generateRandomizedData(initialChartData)); 
  }, [timeRange]);

  const totalClosed = chartData.reduce((sum, item) => sum + item.closedWon, 0);
  const totalLost = chartData.reduce((sum, item) => sum + item.closedLost, 0);

  return (
    <Card className="w-full col-span-1 md:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold text-foreground">Leads tracking</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            <span className="text-2xl font-bold text-foreground">{totalClosed}</span> total closed
            <span className="mx-2 text-muted-foreground">|</span>
            <span className="text-2xl font-bold text-foreground">{totalLost}</span> total lost
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last_30_days">Last 30 days</SelectItem>
            <SelectItem value="last_3_months">Last 3 months</SelectItem>
            <SelectItem value="last_6_months">Last 6 months</SelectItem>
            <SelectItem value="last_12_months">Last 12 months</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="h-[350px] pr-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 20, left: -25, bottom: 5 }}>
            <defs>
              <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F06548" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#F06548" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis 
              dataKey="month" 
              tickLine={false} 
              axisLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              dy={10}
            />
            <YAxis 
              tickLine={false} 
              axisLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              dx={-5}
              allowDecimals={false}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))', 
                borderRadius: 'var(--radius)',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)'
              }}
              labelStyle={{ fontWeight: 'bold', color: 'hsl(var(--foreground))' }}
              itemStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={40}
              iconType="square"
              iconSize={10}
              formatter={(value, entry) => (
                <span className="text-sm text-muted-foreground ml-1">{value}</span>
              )}
            />
            <Area type="monotone" dataKey="closedWon" name="Closed won" stroke="#10B981" fillOpacity={1} fill="url(#colorClosedWon)" strokeWidth={2} activeDot={{ r: 6, strokeWidth: 2, fill: '#10B981' }} />
            <Area type="monotone" dataKey="closedLost" name="Closed lost" stroke="#F06548" fillOpacity={1} fill="url(#colorClosedLost)" strokeWidth={2} activeDot={{ r: 6, strokeWidth: 2, fill: '#F06548' }} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LeadsChart;
