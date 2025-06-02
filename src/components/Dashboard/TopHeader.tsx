import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface TopHeaderProps {
  pageTitle?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ pageTitle = 'Dashboard' }) => {
  return (
    <header 
      className={cn(
        'fixed top-0 left-60 right-0 z-10 h-16 bg-card border-b border-border',
        'flex items-center justify-between px-6'
      )}
    >
      <h1 className="text-xl font-semibold text-foreground">{pageTitle}</h1>
      <div className="flex items-center space-x-4">
        {/* Add other header actions here if needed, e.g., notifications, user profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default">
              Create
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>New Lead</DropdownMenuItem>
            <DropdownMenuItem>New Proposal</DropdownMenuItem>
            <DropdownMenuItem>New Invoice</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
