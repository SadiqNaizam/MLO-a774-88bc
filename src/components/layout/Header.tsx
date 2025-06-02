import React from 'react';
import TopHeader from '../Dashboard/TopHeader'; // Relative path to the specific TopHeader component

interface HeaderProps {
  /**
   * The title to be displayed in the header.
   * This typically corresponds to the page currently being viewed.
   */
  pageTitle?: string;
}

/**
 * Header component for the application layout.
 * It renders the top header bar, which is fixed and displays the page title and actions.
 */
const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
  return <TopHeader pageTitle={pageTitle} />;
};

export default Header;