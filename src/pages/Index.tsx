import React from 'react';
import MainAppLayout from '../../components/layout/MainAppLayout';
import StatsCardGrid from '../../components/Dashboard/StatsCardGrid';
import LeadsChart from '../../components/Dashboard/LeadsChart';
import AnalyticsCards from '../../components/Dashboard/AnalyticsCards';

/**
 * IndexPage serves as the entry point for the Leads Overview section of the dashboard.
 * It utilizes the MainAppLayout to provide the standard sidebar and header.
 * The main content area is structured using a responsive grid, housing key analytical components:
 * - StatsCardGrid: Displays funnel statistics and lead sources.
 * - LeadsChart: Presents a visual tracking of leads over time.
 * - AnalyticsCards: Details reasons for leads lost and other relevant data points.
 *
 * This page adheres to the layout requirements by using a 2-column grid for its main content area,
 * with components spanning columns as needed to match the target design.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout title="Leads Overview">
      {/* 
        The main content container uses a 2-column grid as specified in Layout Requirements.
        Components like StatsCardGrid and AnalyticsCards are wrapped in divs that span 
        both columns to ensure they take full width. LeadsChart is designed to inherently 
        span both columns when placed in such a grid.
        The 'gap-6' provides spacing between grid items.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* StatsCardGrid section - spans both columns on medium screens and up */}
        <div className="md:col-span-2">
          <StatsCardGrid />
        </div>

        {/* LeadsChart section - intrinsically spans both columns due to its own styling (md:col-span-2) */}
        <LeadsChart />

        {/* AnalyticsCards section - spans both columns on medium screens and up */}
        <div className="md:col-span-2">
          <AnalyticsCards />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
