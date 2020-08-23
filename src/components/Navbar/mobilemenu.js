import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Avatar01 } from '../../api/data/images';

const MobileMenu = (props) => {
  return (
    <nav
      id="navigation-widget-mobile"
      className="navigation-widget navigation-widget-mobile sidebar left hidden"
      data-simplebar
    >
      {/* NAVIGATION WIDGET CLOSE BUTTON */}
      <div className="navigation-widget-close-button">
        {/* NAVIGATION WIDGET CLOSE BUTTON ICON */}
        <svg className="navigation-widget-close-button-icon icon-back-arrow">
          <use href="#svg-back-arrow"></use>
        </svg>
        {/* NAVIGATION WIDGET CLOSE BUTTON ICON */}
      </div>
      {/* /NAVIGATION WIDGET CLOSE BUTTON */}

      {/* NAVIGATION WIDGET INFO WRAP */}
      <div className="navigation-widget-info-wrap">
        {/* NAVIGATION WIDGET INFO */}
        <div className="navigation-widget-info">
          {/* USER AVATAR */}
          <a
            className="user-avatar small no-outline"
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

          {/* NAVIGATION WIDGET INFO TITLE */}
          <p className="navigation-widget-info-title">
            <a href="profile-timeline.html">Marina Valentine</a>
          </p>
          {/* /NAVIGATION WIDGET INFO TITLE */}

          {/* NAVIGATION WIDGET INFO TEXT */}
          <p className="navigation-widget-info-text">Welcome Back!</p>
          {/* /NAVIGATION WIDGET INFO TEXT */}
        </div>
        {/* /NAVIGATION WIDGET INFO */}

        {/* NAVIGATION WIDGET BUTTON */}
        <p className="navigation-widget-info-button button small secondary">
          Logout
        </p>
        {/* /NAVIGATION WIDGET BUTTON */}
      </div>
      {/* /NAVIGATION WIDGET INFO WRAP */}

      {/* NAVIGATION WIDGET SECTION TITLE */}
      <p className="navigation-widget-section-title">Sections</p>
      {/* /NAVIGATION WIDGET SECTION TITLE */}

      {/* MENU */}
      <ul className="menu">
        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a className="menu-item-link" href="newsfeed.html">
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-newsfeed">
              <use href="#svg-newsfeed"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
            Newsfeed
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}

        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a className="menu-item-link" href="overview.html">
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-overview">
              <use href="#svg-overview"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
            Overview
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}

        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a className="menu-item-link" href="groups.html">
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-group">
              <use href="#svg-group"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
            Groups
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}

        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a className="menu-item-link" href="members.html">
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-members">
              <use href="#svg-members"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
            Members
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}

        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a className="menu-item-link" href="badges.html">
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-badges">
              <use href="#svg-badges"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
            Badges
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}

        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a className="menu-item-link" href="quests.html">
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-quests">
              <use href="#svg-quests"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
            Quests
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}

        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a className="menu-item-link" href="streams.html">
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-streams">
              <use href="#svg-streams"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
            Streams
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}

        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a className="menu-item-link" href="events.html">
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-events">
              <use href="#svg-events"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
            Events
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}

        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a className="menu-item-link" href="forums.html">
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-forums">
              <use href="#svg-forums"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
            Forums
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}

        {/* MENU ITEM */}
        <li className="menu-item">
          {/* MENU ITEM LINK */}
          <a className="menu-item-link" href="marketplace.html">
            {/* MENU ITEM LINK ICON */}
            <svg className="menu-item-link-icon icon-marketplace">
              <use href="#svg-marketplace"></use>
            </svg>
            {/* /MENU ITEM LINK ICON */}
            Marketplace
          </a>
          {/* /MENU ITEM LINK */}
        </li>
        {/* /MENU ITEM */}
      </ul>
      {/* /MENU */}

      {/* NAVIGATION WIDGET SECTION TITLE */}
      <p className="navigation-widget-section-title">My Profile</p>
      {/* /NAVIGATION WIDGET SECTION TITLE */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a
        className="navigation-widget-section-link"
        href="hub-profile-info.html"
      >
        Profile Info
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a
        className="navigation-widget-section-link"
        href="hub-profile-social.html"
      >
        Social &amp; Stream
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a
        className="navigation-widget-section-link"
        href="hub-profile-notifications.html"
      >
        Notifications
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a
        className="navigation-widget-section-link"
        href="hub-profile-messages.html"
      >
        Messages
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a
        className="navigation-widget-section-link"
        href="hub-profile-requests.html"
      >
        Friend Requests
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION TITLE */}
      <p className="navigation-widget-section-title">Account</p>
      {/* /NAVIGATION WIDGET SECTION TITLE */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a
        className="navigation-widget-section-link"
        href="hub-account-info.html"
      >
        Account Info
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a
        className="navigation-widget-section-link"
        href="hub-account-password.html"
      >
        Change Password
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a
        className="navigation-widget-section-link"
        href="hub-account-settings.html"
      >
        General Settings
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION TITLE */}
      <p className="navigation-widget-section-title">Groups</p>
      {/* /NAVIGATION WIDGET SECTION TITLE */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a
        className="navigation-widget-section-link"
        href="hub-group-management.html"
      >
        Manage Groups
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a
        className="navigation-widget-section-link"
        href="hub-group-invitations.html"
      >
        Invitations
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION TITLE */}
      <p className="navigation-widget-section-title">My Store</p>
      {/* /NAVIGATION WIDGET SECTION TITLE */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a
        className="navigation-widget-section-link"
        href="hub-store-account.html"
      >
        My Account <span className="highlighted">$250,32</span>
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a
        className="navigation-widget-section-link"
        href="hub-store-statement.html"
      >
        Sales Statement
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a className="navigation-widget-section-link" href="hub-store-items.html">
        Manage Items
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a
        className="navigation-widget-section-link"
        href="hub-store-downloads.html"
      >
        Downloads
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION TITLE */}
      <p className="navigation-widget-section-title">Main Links</p>
      {/* /NAVIGATION WIDGET SECTION TITLE */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a className="navigation-widget-section-link" href="#">
        Home
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a className="navigation-widget-section-link" href="#">
        Careers
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a className="navigation-widget-section-link" href="#">
        Faqs
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a className="navigation-widget-section-link" href="#">
        About Us
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a className="navigation-widget-section-link" href="#">
        Our Blog
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a className="navigation-widget-section-link" href="#">
        Contact Us
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}

      {/* NAVIGATION WIDGET SECTION LINK */}
      <a className="navigation-widget-section-link" href="#">
        Privacy Policy
      </a>
      {/* /NAVIGATION WIDGET SECTION LINK */}
    </nav>
  );
};
const mapStateToProps = (state) => ({
  data: state.data,
  ui: state.ui,
});
MobileMenu.propTypes = {
  data: PropTypes.object,
  ui: PropTypes.object,
};
export default connect(mapStateToProps)(MobileMenu);
