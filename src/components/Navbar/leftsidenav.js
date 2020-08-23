import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Avatar01 } from '../../api/data/images';

const LeftSideNav = (props) => {
  return (
    <nav
      id="navigation-widget-small"
      className="navigation-widget navigation-widget-desktop closed sidebar left delayed"
    >
      {/* USER AVATAR */}
      <a
        className="user-avatar small no-outline online"
        href="profile-timeline.html"
      >
        {/* USER AVATAR CONTENT */}
        <div className="user-avatar-content">
          {/* HEXAGON */}
          <div className="hexagon-image-30-32" data-src={Avatar01}></div>
          {/* /HEXAGON */}
        </div>
        {/* /USER AVATAR CONTENT */}

        {/* USER AVATAR PROGRESS */}
        <div className="user-avatar-progress">
          {/* HEXAGON */}
          <div className="hexagon-progress-40-44"></div>
          {/* /HEXAGON */}
        </div>
        {/* /USER AVATAR PROGRESS */}

        {/* USER AVATAR PROGRESS BORDER */}
        <div className="user-avatar-progress-border">
          {/* HEXAGON */}
          <div className="hexagon-border-40-44"></div>
          {/* /HEXAGON */}
        </div>
        {/* /USER AVATAR PROGRESS BORDER */}

        {/* USER AVATAR BADGE */}
        <div className="user-avatar-badge">
          {/* USER AVATAR BADGE BORDER */}
          <div className="user-avatar-badge-border">
            {/* HEXAGON */}
            <div className="hexagon-22-24"></div>
            {/* /HEXAGON */}
          </div>
          {/* /USER AVATAR BADGE BORDER */}

          {/* USER AVATAR BADGE CONTENT */}
          <div className="user-avatar-badge-content">
            {/* HEXAGON */}
            <div className="hexagon-dark-16-18"></div>
            {/* /HEXAGON */}
          </div>
          {/* /USER AVATAR BADGE CONTENT */}

          {/* USER AVATAR BADGE TEXT */}
          <p className="user-avatar-badge-text">24</p>
          {/* /USER AVATAR BADGE TEXT */}
        </div>
        {/* /USER AVATAR BADGE */}
      </a>
      {/* /USER AVATAR */}

      {/* MENU */}
      <ul className="menu small">
        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a
            className="menu-item-link text-tooltip-tfr"
            href="newsfeed.html"
            data-title="Newsfeed"
          >
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-newsfeed">
              <use href="#svg-newsfeed"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}

        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a
            className="menu-item-link text-tooltip-tfr"
            href="overview.html"
            data-title="Overview"
          >
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-overview">
              <use href="#svg-overview"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}

        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a
            className="menu-item-link text-tooltip-tfr"
            href="groups.html"
            data-title="Groups"
          >
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-group">
              <use href="#svg-group"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}

        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a
            className="menu-item-link text-tooltip-tfr"
            href="members.html"
            data-title="Members"
          >
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-members">
              <use href="#svg-members"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}

        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a
            className="menu-item-link text-tooltip-tfr"
            href="badges.html"
            data-title="Badges"
          >
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-badges">
              <use href="#svg-badges"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}

        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a
            className="menu-item-link text-tooltip-tfr"
            href="quests.html"
            data-title="Quests"
          >
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-quests">
              <use href="#svg-quests"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}

        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a
            className="menu-item-link text-tooltip-tfr"
            href="streams.html"
            data-title="Streams"
          >
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-streams">
              <use href="#svg-streams"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}

        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a
            className="menu-item-link text-tooltip-tfr"
            href="events.html"
            data-title="Events"
          >
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-events">
              <use href="#svg-events"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}

        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a
            className="menu-item-link text-tooltip-tfr"
            href="forums.html"
            data-title="Forums"
          >
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-forums">
              <use href="#svg-forums"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}

        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a
            className="menu-item-link text-tooltip-tfr"
            href="marketplace.html"
            data-title="Marketplace"
          >
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-marketplace">
              <use href="#svg-marketplace"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}
      </ul>
      {/* /MENU */}
    </nav>
  );
};
const mapStateToProps = (state) => ({
  data: state.data,
  ui: state.ui,
});
LeftSideNav.propTypes = {
  data: PropTypes.object,
  ui: PropTypes.object,
};
export default connect(mapStateToProps)(LeftSideNav);
