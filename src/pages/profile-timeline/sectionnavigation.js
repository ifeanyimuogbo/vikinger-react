import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBar from '../../components/Navbar/navbar';
import ContentGrid from './contentgrid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SectionNavigation = (props) => {
  const { data, ui } = props;
  return (
    <>
      {/* SECTION NAVIGATION */}
      <nav className="section-navigation">
        {/* SECTION MENU */}
        <div id="section-navigation-slider" className="section-menu">
          {/* SECTION MENU ITEM */}
          <a className="section-menu-item" href="profile-about.html">
            {/* SECTION MENU ITEM ICON */}
            <svg className="section-menu-item-icon icon-profile">
              <use href="#svg-profile"></use>
            </svg>
            {/* /SECTION MENU ITEM ICON */}

            {/* SECTION MENU ITEM TEXT */}
            <p className="section-menu-item-text">About</p>
            {/* /SECTION MENU ITEM TEXT */}
          </a>
          {/* /SECTION MENU ITEM */}

          {/* SECTION MENU ITEM */}
          <a className="section-menu-item active" href="profile-timeline.html">
            {/* SECTION MENU ITEM ICON */}
            <svg className="section-menu-item-icon icon-timeline">
              <use href="#svg-timeline"></use>
            </svg>
            {/* /SECTION MENU ITEM ICON */}

            {/* SECTION MENU ITEM TEXT */}
            <p className="section-menu-item-text">Timeline</p>
            {/* /SECTION MENU ITEM TEXT */}
          </a>
          {/* /SECTION MENU ITEM */}

          {/* SECTION MENU ITEM */}
          <a className="section-menu-item" href="profile-friends.html">
            {/* SECTION MENU ITEM ICON */}
            <svg className="section-menu-item-icon icon-friend">
              <use href="#svg-friend"></use>
            </svg>
            {/* /SECTION MENU ITEM ICON */}

            {/* SECTION MENU ITEM TEXT */}
            <p className="section-menu-item-text">Friends</p>
            {/* /SECTION MENU ITEM TEXT */}
          </a>
          {/* /SECTION MENU ITEM */}

          {/* SECTION MENU ITEM */}
          <a className="section-menu-item" href="profile-groups.html">
            {/* SECTION MENU ITEM ICON */}
            <svg className="section-menu-item-icon icon-group">
              <use href="#svg-group"></use>
            </svg>
            {/* /SECTION MENU ITEM ICON */}

            {/* SECTION MENU ITEM TEXT */}
            <p className="section-menu-item-text">Groups</p>
            {/* /SECTION MENU ITEM TEXT */}
          </a>
          {/* /SECTION MENU ITEM */}

          {/* SECTION MENU ITEM */}
          <a className="section-menu-item" href="profile-photos.html">
            {/* SECTION MENU ITEM ICON */}
            <svg className="section-menu-item-icon icon-photos">
              <use href="#svg-photos"></use>
            </svg>
            {/* /SECTION MENU ITEM ICON */}

            {/* SECTION MENU ITEM TEXT */}
            <p className="section-menu-item-text">Photos</p>
            {/* /SECTION MENU ITEM TEXT */}
          </a>
          {/* /SECTION MENU ITEM */}

          {/* SECTION MENU ITEM */}
          <a className="section-menu-item" href="profile-videos.html">
            {/* SECTION MENU ITEM ICON */}
            <svg className="section-menu-item-icon icon-videos">
              <use href="#svg-videos"></use>
            </svg>
            {/* /SECTION MENU ITEM ICON */}

            {/* SECTION MENU ITEM TEXT */}
            <p className="section-menu-item-text">Videos</p>
            {/* /SECTION MENU ITEM TEXT */}
          </a>
          {/* /SECTION MENU ITEM */}

          {/* SECTION MENU ITEM */}
          <a className="section-menu-item" href="profile-badges.html">
            {/* SECTION MENU ITEM ICON */}
            <svg className="section-menu-item-icon icon-badges">
              <use href="#svg-badges"></use>
            </svg>
            {/* /SECTION MENU ITEM ICON */}

            {/* SECTION MENU ITEM TEXT */}
            <p className="section-menu-item-text">Badges</p>
            {/* /SECTION MENU ITEM TEXT */}
          </a>
          {/* /SECTION MENU ITEM */}

          {/* SECTION MENU ITEM */}
          <a className="section-menu-item" href="profile-stream.html">
            {/* SECTION MENU ITEM ICON */}
            <svg className="section-menu-item-icon icon-streams">
              <use href="#svg-streams"></use>
            </svg>
            {/* /SECTION MENU ITEM ICON */}

            {/* SECTION MENU ITEM TEXT */}
            <p className="section-menu-item-text">Streams</p>
            {/* /SECTION MENU ITEM TEXT */}
          </a>
          {/* /SECTION MENU ITEM */}

          {/* SECTION MENU ITEM */}
          <a className="section-menu-item" href="profile-blog.html">
            {/* SECTION MENU ITEM ICON */}
            <svg className="section-menu-item-icon icon-blog-posts">
              <use href="#svg-blog-posts"></use>
            </svg>
            {/* /SECTION MENU ITEM ICON */}

            {/* SECTION MENU ITEM TEXT */}
            <p className="section-menu-item-text">Blog</p>
            {/* /SECTION MENU ITEM TEXT */}
          </a>
          {/* /SECTION MENU ITEM */}

          {/* SECTION MENU ITEM */}
          <a className="section-menu-item" href="profile-forum.html">
            {/* SECTION MENU ITEM ICON */}
            <svg className="section-menu-item-icon icon-forum">
              <use href="#svg-forum"></use>
            </svg>
            {/* /SECTION MENU ITEM ICON */}

            {/* SECTION MENU ITEM TEXT */}
            <p className="section-menu-item-text">Forum</p>
            {/* /SECTION MENU ITEM TEXT */}
          </a>
          {/* /SECTION MENU ITEM */}

          {/* SECTION MENU ITEM */}
          <a className="section-menu-item" href="profile-store.html">
            {/* SECTION MENU ITEM ICON */}
            <svg className="section-menu-item-icon icon-store">
              <use href="#svg-store"></use>
            </svg>
            {/* /SECTION MENU ITEM ICON */}

            {/* SECTION MENU ITEM TEXT */}
            <p className="section-menu-item-text">Store</p>
            {/* /SECTION MENU ITEM TEXT */}
          </a>
          {/* /SECTION MENU ITEM */}
        </div>
        {/* /SECTION MENU */}

        {/* SLIDER CONTROLS */}
        <div
          id="section-navigation-slider-controls"
          className="slider-controls"
        >
          {/* SLIDER CONTROL */}
          <div className="slider-control left">
            {/* SLIDER CONTROL ICON */}
            <svg className="slider-control-icon icon-small-arrow">
              <use href="#svg-small-arrow"></use>
            </svg>
            {/* /SLIDER CONTROL ICON */}
          </div>
          {/* /SLIDER CONTROL */}

          {/* SLIDER CONTROL */}
          <div className="slider-control right">
            {/* SLIDER CONTROL ICON */}
            <svg className="slider-control-icon icon-small-arrow">
              <use href="#svg-small-arrow"></use>
            </svg>
            {/* /SLIDER CONTROL ICON */}
          </div>
          {/* /SLIDER CONTROL */}
        </div>
        {/* /SLIDER CONTROLS */}
      </nav>
      {/* /SECTION NAVIGATION */}
    </>
  );
};
const mapStateToProps = (state) => ({
  data: state.data,
  ui: state.ui,
});
SectionNavigation.propTypes = {
  data: PropTypes.object,
  ui: PropTypes.object,
};
export default connect(mapStateToProps)(SectionNavigation);
