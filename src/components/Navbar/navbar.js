import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LeftSideNav from './leftsidenav';
import LeftSidePanel from './leftsidepanel';
import MobileMenu from './mobilemenu';
import RightSideNav from './rightsidenav';
import ChatboxSidePanel from './chatboxsidepanel';
import TopNavHeader from './topnavheader';
import MobileBottomBar from './mobilebottomfloatybar';

const NavBar = (props) => {
  const { data, ui } = props;
  return (
    <>
      {/* NAVBAR */}
      <LeftSideNav />
      <LeftSidePanel />
      {/* Mobile Menu Nav */}
      <MobileMenu />
      {/* Mobile Menu Nav */}
      {/* Chat Widget Nav */}
      <RightSideNav />
      {/* CHAT WIDGET Nav*/}
      {/* CHAT BOX SIDE PANEL */}
      <ChatboxSidePanel />
      {/* CHAT BOX SIDE PANEL */}
      {/* TOP NAV HEADER */}
      <TopNavHeader />
      {/* TOP NAV HEADER */}
      {/* FLOATY BAR */}
      <MobileBottomBar />
      {/* /FLOATY BAR */}
    </>
  );
};
const mapStateToProps = (state) => ({
  data: state.data,
  ui: state.ui,
});
NavBar.propTypes = {
  data: PropTypes.object,
  ui: PropTypes.object,
};
export default connect(mapStateToProps)(NavBar);
