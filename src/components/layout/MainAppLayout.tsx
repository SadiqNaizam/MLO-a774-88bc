import React from 'react';
import Sidebar from './Sidebar';   // Relative path to Sidebar component within the same layout module
import Header from './Header';     // Relative path to Header component within the same layout module
import { cn } from '@/lib/utils'; // Standard absolute path for shared utilities like cn

interface MainAppLayoutProps {
  /**
   * The content to be rendered within the main application area.
   * This is typically the page-specific content.
   */
  children: React.ReactNode;
  /**
   * The title for the current page, which will be passed to and displayed in the Header.
   */
  title?: string;
  /**
   * Optional additional CSS classes to apply to the root element of the layout container.
   */
  className?: string;
}

/**
 * MainAppLayout defines the primary visual structure for the application.
 * It orchestrates a fixed sidebar, a fixed header, and a main content area 
 * where page-specific content is rendered.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, title, className }) => {
  return (
    <div className={cn("min-h-screen bg-background", className)}>
      <Sidebar />
      <Header pageTitle={title} />
      <main
        className={cn(
          // Tailwind's w-60 is 15rem. This margin creates space for the fixed sidebar.
          "ml-60", 
          // Tailwind's h-16 is 4rem. This margin creates space for the fixed header.
          "mt-16",  
          // Padding for the content area itself, as specified in Layout Requirements (mainContent.layout: "p-6 mt-16").
          // The mt-16 is handled above, so only p-6 is needed here directly for content padding.
          "p-6",    
          // Ensures that the main content area can shrink correctly if its children use flexbox/grid,
          // and allows overflow to be handled properly. Specified in Layout Requirements (overall.sizing.mainContent).
          "min-w-0", 
          // Enables vertical scrolling for the main content area if its content exceeds the available height.
          // Specified in Layout Requirements (overall.sizing.mainContent).
          "overflow-y-auto", 
          // Sets the height of the main content area to fill the remaining viewport height below the fixed header (4rem = h-16).
          "h-[calc(100vh-4rem)]" 
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
