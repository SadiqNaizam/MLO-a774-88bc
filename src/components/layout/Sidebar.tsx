import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav'; // Relative path to the specific SidebarNav component

/**
 * Sidebar component for the application layout.
 * It renders the main navigation sidebar, which is fixed and styled by SidebarNav.
 */
const Sidebar: React.FC = () => {
  return <SidebarNav />;
};

export default Sidebar;