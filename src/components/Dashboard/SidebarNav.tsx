import React from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutGrid, 
  Users, 
  FileText, 
  Receipt, 
  Archive, 
  Mail,
  CalendarDays, 
  HelpCircle, 
  Settings,
  Box, // Placeholder for logo
  MenuIcon // Hamburger for collapse, if needed later
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
}

const mainNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, href: '#', isActive: true },
  { id: 'leads', label: 'Leads', icon: Users, href: '#' },
  { id: 'customers', label: 'Customers', icon: Users, href: '#' },
  { id: 'proposals', label: 'Proposals', icon: FileText, href: '#' },
  { id: 'invoices', label: 'Invoices', icon: Receipt, href: '#' },
  { id: 'items', label: 'Items', icon: Archive, href: '#' },
  { id: 'mail', label: 'Mail', icon: Mail, href: '#' },
  { id: 'shoebox', label: 'Shoebox', icon: Archive, href: '#' }, // Using Archive for Shoebox
  { id: 'calendar', label: 'Calendar', icon: CalendarDays, href: '#' },
];

const footerNavItems: NavItem[] = [
  { id: 'help', label: 'Help', icon: HelpCircle, href: '#' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '#' },
];

const SidebarNav: React.FC = () => {
  return (
    <aside className={cn(
      'fixed top-0 left-0 z-20 h-screen w-60 bg-sidebar text-sidebar-foreground',
      'flex flex-col justify-between p-4 border-r border-sidebar-border'
    )}>
      <div>
        <div className="mb-8 flex items-center space-x-3 px-2 py-2">
          <Box size={32} className="text-sidebar-primary" /> 
          <span className="font-semibold text-xl text-sidebar-foreground">LeadsApp</span>
        </div>
        <nav className="space-y-1">
          {mainNavItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 rounded-md px-3 py-2.5 text-sm font-medium',
                item.isActive
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                  : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus:bg-sidebar-accent focus:text-sidebar-accent-foreground focus:outline-none focus:ring-2 focus:ring-sidebar-ring',
                'transition-colors duration-150'
              )}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
      <nav className="space-y-1">
        {footerNavItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={cn(
              'flex items-center space-x-3 rounded-md px-3 py-2.5 text-sm font-medium',
              'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus:bg-sidebar-accent focus:text-sidebar-accent-foreground focus:outline-none focus:ring-2 focus:ring-sidebar-ring',
              'transition-colors duration-150'
            )}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default SidebarNav;
