import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBar from '../../components/Navbar/navbar';
import ProfileHeader from './profileheader';
import SectionNavigation from './sectionnavigation';
import Grid from './grid';

const ContentGrid = (props) => {
  const { data, ui } = props;
  return (
    <div className="content-grid">
      {/* PROFILE HEADER */}
      <ProfileHeader />
      {/* /PROFILE HEADER */}
      {/* SECTION NAVIGATION */}
      <SectionNavigation />
      {/* /SECTION NAVIGATION */}
      {/* GRID */}
      <Grid />
      {/* /GRID */}
    </div>
  );
};
export default ContentGrid;
