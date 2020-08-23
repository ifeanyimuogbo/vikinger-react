import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from '../../components/Navbar/navbar';
import ContentGrid from './contentgrid';
import { connect } from 'react-redux';
//Image Imports
import { Avatar01, Cover01, FlagUsa } from '../../api/data/images';

const ProfileHeader = (props) => {
  const { data, ui } = props;
  return (
    <>
      {/* PROFILE HEADER */}
      <div className="profile-header">
        {/* PROFILE HEADER COVER */}
        <figure className="profile-header-cover liquid">
          <img src={Cover01} alt="cover-01" />
        </figure>
        {/* /PROFILE HEADER COVER */}

        {/* PROFILE HEADER INFO */}
        <div className="profile-header-info">
          {/* USER SHORT DESCRIPTION */}
          <div className="user-short-description big">
            {/* USER SHORT DESCRIPTION AVATAR */}
            <a
              className="user-short-description-avatar user-avatar big"
              href="profile-timeline.html"
            >
              {/* USER AVATAR BORDER */}
              <div className="user-avatar-border">
                {/* HEXAGON */}
                <div className="hexagon-148-164"></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR BORDER */}

              {/* USER AVATAR CONTENT */}
              <div className="user-avatar-content">
                {/* HEXAGON */}
                <div
                  className="hexagon-image-100-110"
                  data-src={Avatar01}
                ></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR CONTENT */}

              {/* USER AVATAR PROGRESS */}
              <div className="user-avatar-progress">
                {/* HEXAGON */}
                <div className="hexagon-progress-124-136"></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR PROGRESS */}

              {/* USER AVATAR PROGRESS BORDER */}
              <div className="user-avatar-progress-border">
                {/* HEXAGON */}
                <div className="hexagon-border-124-136"></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR PROGRESS BORDER */}

              {/* USER AVATAR BADGE */}
              <div className="user-avatar-badge">
                {/* USER AVATAR BADGE BORDER */}
                <div className="user-avatar-badge-border">
                  {/* HEXAGON */}
                  <div className="hexagon-40-44"></div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE BORDER */}

                {/* USER AVATAR BADGE CONTENT */}
                <div className="user-avatar-badge-content">
                  {/* HEXAGON */}
                  <div className="hexagon-dark-32-34"></div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE CONTENT */}

                {/* USER AVATAR BADGE TEXT */}
                <p className="user-avatar-badge-text">24</p>
                {/* /USER AVATAR BADGE TEXT */}
              </div>
              {/* /USER AVATAR BADGE */}
            </a>
            {/* /USER SHORT DESCRIPTION AVATAR */}

            {/* USER SHORT DESCRIPTION AVATAR */}
            <a
              className="user-short-description-avatar user-short-description-avatar-mobile user-avatar medium"
              href="profile-timeline.html"
            >
              {/* USER AVATAR BORDER */}
              <div className="user-avatar-border">
                {/* HEXAGON */}
                <div className="hexagon-120-132"></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR BORDER */}

              {/* USER AVATAR CONTENT */}
              <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-82-90" data-src={Avatar01}></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR CONTENT */}

              {/* USER AVATAR PROGRESS */}
              <div className="user-avatar-progress">
                {/* HEXAGON */}
                <div className="hexagon-progress-100-110"></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR PROGRESS */}

              {/* USER AVATAR PROGRESS BORDER */}
              <div className="user-avatar-progress-border">
                {/* HEXAGON */}
                <div className="hexagon-border-100-110"></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR PROGRESS BORDER */}

              {/* USER AVATAR BADGE */}
              <div className="user-avatar-badge">
                {/* USER AVATAR BADGE BORDER */}
                <div className="user-avatar-badge-border">
                  {/* HEXAGON */}
                  <div className="hexagon-32-36"></div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE BORDER */}

                {/* USER AVATAR BADGE CONTENT */}
                <div className="user-avatar-badge-content">
                  {/* HEXAGON */}
                  <div className="hexagon-dark-26-28"></div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE CONTENT */}

                {/* USER AVATAR BADGE TEXT */}
                <p className="user-avatar-badge-text">24</p>
                {/* /USER AVATAR BADGE TEXT */}
              </div>
              {/* /USER AVATAR BADGE */}
            </a>
            {/* /USER SHORT DESCRIPTION AVATAR */}

            {/* USER SHORT DESCRIPTION TITLE */}
            <p className="user-short-description-title">
              <a href="profile-timeline.html">Marina Valentine</a>
            </p>
            {/* /USER SHORT DESCRIPTION TITLE */}

            {/* USER SHORT DESCRIPTION TEXT */}
            <p className="user-short-description-text">
              <a href="#">www.gamehuntress.com</a>
            </p>
            {/* /USER SHORT DESCRIPTION TEXT */}
          </div>
          {/* /USER SHORT DESCRIPTION */}

          {/* PROFILE HEADER SOCIAL LINKS WRAP */}
          <div className="profile-header-social-links-wrap">
            {/* PROFILE HEADER SOCIAL LINKS */}
            <div
              id="profile-header-social-links-slider"
              className="profile-header-social-links"
            >
              <div className="profile-header-social-link">
                {/* SOCIAL LINK */}
                <a className="social-link facebook" href="#">
                  {/* ICON FACEBOOK */}
                  <svg className="icon-facebook">
                    <use href="#svg-facebook"></use>
                  </svg>
                  {/* /ICON FACEBOOK */}
                </a>
                {/* /SOCIAL LINK */}
              </div>

              <div className="profile-header-social-link">
                {/* SOCIAL LINK */}
                <a className="social-link twitter" href="#">
                  {/* ICON TWITTER */}
                  <svg className="icon-twitter">
                    <use href="#svg-twitter"></use>
                  </svg>
                  {/* /ICON TWITTER */}
                </a>
                {/* /SOCIAL LINK */}
              </div>

              <div className="profile-header-social-link">
                {/* SOCIAL LINK */}
                <a className="social-link instagram" href="#">
                  {/* ICON INSTAGRAM */}
                  <svg className="icon-instagram">
                    <use href="#svg-instagram"></use>
                  </svg>
                  {/* /ICON INSTAGRAM */}
                </a>
                {/* /SOCIAL LINK */}
              </div>

              <div className="profile-header-social-link">
                {/* SOCIAL LINK */}
                <a className="social-link twitch" href="#">
                  {/* ICON TWITCH */}
                  <svg className="icon-twitch">
                    <use href="#svg-twitch"></use>
                  </svg>
                  {/* /ICON TWITCH */}
                </a>
                {/* /SOCIAL LINK */}
              </div>

              <div className="profile-header-social-link">
                {/* SOCIAL LINK */}
                <a className="social-link youtube" href="#">
                  {/* ICON YOUTUBE */}
                  <svg className="icon-youtube">
                    <use href="#svg-youtube"></use>
                  </svg>
                  {/* /ICON YOUTUBE */}
                </a>
                {/* /SOCIAL LINK */}
              </div>

              <div className="profile-header-social-link">
                {/* SOCIAL LINK */}
                <a className="social-link patreon" href="#">
                  {/* ICON PATREON */}
                  <svg className="icon-patreon">
                    <use href="#svg-patreon"></use>
                  </svg>
                  {/* /ICON PATREON */}
                </a>
                {/* /SOCIAL LINK */}
              </div>

              <div className="profile-header-social-link">
                {/* SOCIAL LINK */}
                <a className="social-link discord" href="#">
                  {/* ICON DISCORD */}
                  <svg className="icon-discord">
                    <use href="#svg-discord"></use>
                  </svg>
                  {/* /ICON DISCORD */}
                </a>
                {/* /SOCIAL LINK */}
              </div>
            </div>
            {/* /PROFILE HEADER SOCIAL LINKS */}

            {/* SLIDER CONTROLS */}
            <div
              id="profile-header-social-links-slider-controls"
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
          </div>
          {/* /PROFILE HEADER SOCIAL LINKS WRAP */}

          {/* USER STATS */}
          <div className="user-stats">
            {/* USER STAT */}
            <div className="user-stat big">
              {/* USER STAT TITLE */}
              <p className="user-stat-title">930</p>
              {/* /USER STAT TITLE */}

              {/* USER STAT TEXT */}
              <p className="user-stat-text">posts</p>
              {/* /USER STAT TEXT */}
            </div>
            {/* /USER STAT */}

            {/* USER STAT */}
            <div className="user-stat big">
              {/* USER STAT TITLE */}
              <p className="user-stat-title">82</p>
              {/* /USER STAT TITLE */}

              {/* USER STAT TEXT */}
              <p className="user-stat-text">friends</p>
              {/* /USER STAT TEXT */}
            </div>
            {/* /USER STAT */}

            {/* USER STAT */}
            <div className="user-stat big">
              {/* USER STAT TITLE */}
              <p className="user-stat-title">5.7k</p>
              {/* /USER STAT TITLE */}

              {/* USER STAT TEXT */}
              <p className="user-stat-text">visits</p>
              {/* /USER STAT TEXT */}
            </div>
            {/* /USER STAT */}

            {/* USER STAT */}
            <div className="user-stat big">
              {/* USER STAT IMAGE */}
              <img className="user-stat-image" src={FlagUsa} alt="flag-usa" />
              {/* /USER STAT IMAGE */}

              {/* USER STAT TEXT */}
              <p className="user-stat-text">usa</p>
              {/* /USER STAT TEXT */}
            </div>
            {/* /USER STAT */}
          </div>
          {/* /USER STATS */}

          {/* PROFILE HEADER INFO ACTIONS */}
          <div className="profile-header-info-actions">
            {/* PROFILE HEADER INFO ACTION */}
            <p className="profile-header-info-action button secondary">
              <span className="hide-text-mobile">Add</span> Friend +
            </p>
            {/* /PROFILE HEADER INFO ACTION */}

            {/* PROFILE HEADER INFO ACTION */}
            <p className="profile-header-info-action button primary">
              <span className="hide-text-mobile">Send</span> Message
            </p>
            {/* /PROFILE HEADER INFO ACTION */}
          </div>
          {/* /PROFILE HEADER INFO ACTIONS */}
        </div>
        {/* /PROFILE HEADER INFO */}
      </div>
      {/* /PROFILE HEADER */}
    </>
  );
};
const mapStateToProps = (state) => ({
  data: state.data,
  ui: state.ui,
});
ProfileHeader.propTypes = {
  data: PropTypes.object,
  ui: PropTypes.object,
};
export default connect(mapStateToProps)(ProfileHeader);
