import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBar from '../../components/Navbar/navbar';
import ContentGrid from './contentgrid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoaderBars from '../../utils/reusable-components/LoaderBars';
import WidgetSettings from './reusables/widgetsettings';
//Image Imports
import {
  Avatar01,
  Avatar02,
  Avatar03,
  Avatar04,
  Avatar05,
  Avatar06,
  Avatar07,
  Avatar08,
  Avatar09,
  Avatar10,
  Avatar11,
  Avatar12,
  Avatar13,
  Avatar16,
  Avatar23,
  Avatar24,
  Avatar25,
  Avatar27,
  Avatar28,
  Avatar29,
  BadgeAgeS,
  BadgeBronzecS,
  BadgeCaffeinatedS,
  BadgeCollectorS,
  BadgeGoldcS,
  BadgeGoldS,
  BadgeNCreatureS,
  BadgeMightierS,
  BadgePhantomS,
  BadgeScientistS,
  BadgeTravellerS,
  BadgeWarriorS,
  BadgeSilvercS,
  Cover02,
  Cover04,
  Cover05,
  Cover06,
  Cover07,
  Cover08,
  Cover09,
  Cover10,
  Cover11,
  Cover12,
  Cover13,
  Cover15,
  Cover16,
  Cover17,
  Cover19,
  Cover20,
  Cover50,
  MarketplaceItems01,
  ReactionAngry,
  ReactionDislike,
  ReactionFunny,
  ReactionHappy,
  ReactionLike,
  ReactionLove,
  ReactionSad,
  ReactionWow,
  Social01,
} from '../../api/data/images';

const column1WidgetSettings = ['Widget Settings'];
const column2WidgetSettings = [
  'Edit Post',
  'Delete Post',
  'Make it Featured',
  'Report Post',
  'Report Author',
];
const column3widgetSettings = ['Widget Settings'];

const Grid = (props) => {
  const { data, ui } = props;
  return (
    <>
      {/* GRID */}
      <div className="grid grid-3-6-3 mobile-prefer-content">
        {/* GRID COLUMN 1*/}
        <div className="grid-column">
          {/* WIDGET BOX */}
          <div className="widget-box">
            {/* WIDGET BOX SETTINGS */}
            <WidgetSettings settings={column1WidgetSettings} />
            {/* /WIDGET BOX SETTINGS */}

            {/* WIDGET BOX TITLE */}
            <p className="widget-box-title">About Me</p>
            {/* /WIDGET BOX TITLE */}

            {/* WIDGET BOX CONTENT */}
            <div className="widget-box-content">
              {/* PARAGRAPH */}
              <p className="paragraph">
                Hi! My name is Marina but some people may know me as
                GameHuntress! I have a Twitch channel where I stream, play and
                review all the newest games.
              </p>
              {/* /PARAGRAPH */}

              {/* INFORMATION LINE LIST */}
              <div className="information-line-list">
                {/* INFORMATION LINE */}
                <div className="information-line">
                  {/* INFORMATION LINE TITLE */}
                  <p className="information-line-title">Joined</p>
                  {/* /INFORMATION LINE TITLE */}

                  {/* INFORMATION LINE TEXT */}
                  <p className="information-line-text">March 26th, 2017</p>
                  {/* /INFORMATION LINE TEXT */}
                </div>
                {/* /INFORMATION LINE */}

                {/* INFORMATION LINE */}
                <div className="information-line">
                  {/* INFORMATION LINE TITLE */}
                  <p className="information-line-title">City</p>
                  {/* /INFORMATION LINE TITLE */}

                  {/* INFORMATION LINE TEXT */}
                  <p className="information-line-text">
                    Los Angeles, California
                  </p>
                  {/* /INFORMATION LINE TEXT */}
                </div>
                {/* /INFORMATION LINE */}

                {/* INFORMATION LINE */}
                <div className="information-line">
                  {/* INFORMATION LINE TITLE */}
                  <p className="information-line-title">Country</p>
                  {/* /INFORMATION LINE TITLE */}

                  {/* INFORMATION LINE TEXT */}
                  <p className="information-line-text">United States</p>
                  {/* /INFORMATION LINE TEXT */}
                </div>
                {/* /INFORMATION LINE */}

                {/* INFORMATION LINE */}
                <div className="information-line">
                  {/* INFORMATION LINE TITLE */}
                  <p className="information-line-title">Age</p>
                  {/* /INFORMATION LINE TITLE */}

                  {/* INFORMATION LINE TEXT */}
                  <p className="information-line-text">32 Years</p>
                  {/* /INFORMATION LINE TEXT */}
                </div>
                {/* /INFORMATION LINE */}

                {/* INFORMATION LINE */}
                <div className="information-line">
                  {/* INFORMATION LINE TITLE */}
                  <p className="information-line-title">Web</p>
                  {/* /INFORMATION LINE TITLE */}

                  {/* INFORMATION LINE TEXT */}
                  <p className="information-line-text">
                    <a href="#">www.gamehuntress.com</a>
                  </p>
                  {/* /INFORMATION LINE TEXT */}
                </div>
                {/* /INFORMATION LINE */}
              </div>
              {/* /INFORMATION LINE LIST */}
            </div>
            {/* /WIDGET BOX CONTENT */}
          </div>
          {/* /WIDGET BOX */}

          {/* WIDGET BOX */}
          <div className="widget-box">
            {/* WIDGET BOX SETTINGS */}
            <WidgetSettings settings={column1WidgetSettings} />
            {/* /WIDGET BOX SETTINGS */}

            {/* WIDGET BOX TITLE */}
            <p className="widget-box-title">
              Badges <span className="highlighted">13</span>
            </p>
            {/* /WIDGET BOX TITLE */}

            {/* WIDGET BOX CONTENT */}
            <div className="widget-box-content">
              {/* BADGE LIST */}
              <div className="badge-list">
                {/* BADGE ITEM */}
                <div
                  className="badge-item text-tooltip-tft"
                  data-title="Gold User"
                >
                  <img src={BadgeGoldS} alt="badge-gold-s" />
                </div>
                {/* /BADGE ITEM */}

                {/* BADGE ITEM */}
                <div
                  className="badge-item text-tooltip-tft"
                  data-title="Profile Age"
                >
                  <img src={BadgeAgeS} alt="badge-age-s" />
                </div>
                {/* /BADGE ITEM */}

                {/* BADGE ITEM */}
                <div
                  className="badge-item text-tooltip-tft"
                  data-title="Caffeinatted"
                >
                  <img src={BadgeCaffeinatedS} alt="badge-caffeinated-s" />
                </div>
                {/* /BADGE ITEM */}

                {/* BADGE ITEM */}
                <div
                  className="badge-item text-tooltip-tft"
                  data-title="The Warrior"
                >
                  <img src={BadgeWarriorS} alt="badge-warrior-s" />
                </div>
                {/* /BADGE ITEM */}

                {/* BADGE ITEM */}
                <div
                  className="badge-item text-tooltip-tft"
                  data-title="Forum Traveller"
                >
                  <img src={BadgeTravellerS} alt="badge-traveller-s" />
                </div>
                {/* /BADGE ITEM */}

                {/* BADGE ITEM */}
                <div
                  className="badge-item text-tooltip-tft"
                  data-title="Crazy Scientist"
                >
                  <img src={BadgeScientistS} alt="badge-scientist-s" />
                </div>
                {/* /BADGE ITEM */}

                {/* BADGE ITEM */}
                <div
                  className="badge-item text-tooltip-tft"
                  data-title="Night Creature"
                >
                  <img src={BadgeNCreatureS} alt="badge-ncreature-s" />
                </div>
                {/* /BADGE ITEM */}

                {/* BADGE ITEM */}
                <div
                  className="badge-item text-tooltip-tft"
                  data-title="Mightier Than Sword"
                >
                  <img src={BadgeMightierS} alt="badge-mightiers-s" />
                </div>
                {/* /BADGE ITEM */}

                {/* BADGE ITEM */}
                <div
                  className="badge-item text-tooltip-tft"
                  data-title="The Phantom"
                >
                  <img src={BadgePhantomS} alt="badge-phantom-s" />
                </div>
                {/* /BADGE ITEM */}

                {/* BADGE ITEM */}
                <div
                  className="badge-item text-tooltip-tft"
                  data-title="The Collector"
                >
                  <img src={BadgeCollectorS} alt="badge-collector-s" />
                </div>
                {/* /BADGE ITEM */}

                {/* BADGE ITEM */}
                <div
                  className="badge-item text-tooltip-tft"
                  data-title="Bronze Cup"
                >
                  <img src={BadgeBronzecS} alt="badge-bronzec-s" />
                </div>
                {/* /BADGE ITEM */}

                {/* BADGE ITEM */}
                <div
                  className="badge-item text-tooltip-tft"
                  data-title="Silver Cup"
                >
                  <img src={BadgeSilvercS} alt="badge-silverc-s" />
                </div>
                {/* /BADGE ITEM */}

                {/* BADGE ITEM */}
                <div
                  className="badge-item text-tooltip-tft"
                  data-title="Gold Cup"
                >
                  <img src={BadgeGoldcS} alt="badge-goldc-s" />
                </div>
                {/* /BADGE ITEM */}
              </div>
              {/* /BADGE LIST */}
            </div>
            {/* /WIDGET BOX CONTENT */}
          </div>
          {/* /WIDGET BOX */}

          {/* WIDGET BOX */}
          <div className="widget-box">
            {/* WIDGET BOX SETTINGS */}
            <WidgetSettings settings={column1WidgetSettings} />
            {/* /WIDGET BOX SETTINGS */}

            {/* WIDGET BOX TITLE */}
            <p className="widget-box-title">
              Friends <span className="highlighted">82</span>
            </p>
            {/* /WIDGET BOX TITLE */}

            {/* WIDGET BOX CONTENT */}
            <div className="widget-box-content">
              {/* USER STATUS LIST */}
              <div className="user-status-list">
                {/* USER STATUS */}
                <div className="user-status request-small">
                  {/* USER STATUS AVATAR */}
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-outline">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-30-32"
                          data-src={Avatar07}
                        ></div>
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
                        <p className="user-avatar-badge-text">26</p>
                        {/* /USER AVATAR BADGE TEXT */}
                      </div>
                      {/* /USER AVATAR BADGE */}
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}

                  {/* USER STATUS TITLE */}
                  <p className="user-status-title">
                    <a className="bold" href="profile-timeline.html">
                      Sarah Diamond
                    </a>
                  </p>
                  {/* /USER STATUS TITLE */}

                  {/* USER STATUS TEXT */}
                  <p className="user-status-text small">2 friends in common</p>
                  {/* /USER STATUS TEXT */}

                  {/* ACTION REQUEST LIST */}
                  <div className="action-request-list">
                    {/* ACTION REQUEST */}
                    <div className="action-request accept">
                      {/* ACTION REQUEST ICON */}
                      <svg className="action-request-icon icon-add-friend">
                        <use href="#svg-add-friend"></use>
                      </svg>
                      {/* /ACTION REQUEST ICON */}
                    </div>
                    {/* /ACTION REQUEST */}
                  </div>
                  {/* ACTION REQUEST LIST */}
                </div>
                {/* /USER STATUS */}

                {/* USER STATUS */}
                <div className="user-status request-small">
                  {/* USER STATUS AVATAR */}
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-outline">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-30-32"
                          data-src={Avatar03}
                        ></div>
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
                        <p className="user-avatar-badge-text">16</p>
                        {/* /USER AVATAR BADGE TEXT */}
                      </div>
                      {/* /USER AVATAR BADGE */}
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}

                  {/* USER STATUS TITLE */}
                  <p className="user-status-title">
                    <a className="bold" href="profile-timeline.html">
                      Nick Grissom
                    </a>
                  </p>
                  {/* /USER STATUS TITLE */}

                  {/* USER STATUS TEXT */}
                  <p className="user-status-text small">5 friends in common</p>
                  {/* /USER STATUS TEXT */}

                  {/* ACTION REQUEST LIST */}
                  <div className="action-request-list">
                    {/* ACTION REQUEST */}
                    <div className="action-request accept">
                      {/* ACTION REQUEST ICON */}
                      <svg className="action-request-icon icon-add-friend">
                        <use href="#svg-add-friend"></use>
                      </svg>
                      {/* /ACTION REQUEST ICON */}
                    </div>
                    {/* /ACTION REQUEST */}
                  </div>
                  {/* ACTION REQUEST LIST */}
                </div>
                {/* /USER STATUS */}

                {/* USER STATUS */}
                <div className="user-status request-small">
                  {/* USER STATUS AVATAR */}
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-outline">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-30-32"
                          data-src={Avatar02}
                        ></div>
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
                        <p className="user-avatar-badge-text">13</p>
                        {/* /USER AVATAR BADGE TEXT */}
                      </div>
                      {/* /USER AVATAR BADGE */}
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}

                  {/* USER STATUS TITLE */}
                  <p className="user-status-title">
                    <a className="bold" href="profile-timeline.html">
                      Destroy Dex
                    </a>
                  </p>
                  {/* /USER STATUS TITLE */}

                  {/* USER STATUS TEXT */}
                  <p className="user-status-text small">0 friends in common</p>
                  {/* /USER STATUS TEXT */}

                  {/* ACTION REQUEST LIST */}
                  <div className="action-request-list">
                    {/* ACTION REQUEST */}
                    <div className="action-request accept">
                      {/* ACTION REQUEST ICON */}
                      <svg className="action-request-icon icon-add-friend">
                        <use href="#svg-add-friend"></use>
                      </svg>
                      {/* /ACTION REQUEST ICON */}
                    </div>
                    {/* /ACTION REQUEST */}
                  </div>
                  {/* ACTION REQUEST LIST */}
                </div>
                {/* /USER STATUS */}

                {/* USER STATUS */}
                <div className="user-status request-small">
                  {/* USER STATUS AVATAR */}
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-outline">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-30-32"
                          data-src={Avatar05}
                        ></div>
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
                        <p className="user-avatar-badge-text">12</p>
                        {/* /USER AVATAR BADGE TEXT */}
                      </div>
                      {/* /USER AVATAR BADGE */}
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}

                  {/* USER STATUS TITLE */}
                  <p className="user-status-title">
                    <a className="bold" href="profile-timeline.html">
                      Neko Bebop
                    </a>
                  </p>
                  {/* /USER STATUS TITLE */}

                  {/* USER STATUS TEXT */}
                  <p className="user-status-text small">1 friends in common</p>
                  {/* /USER STATUS TEXT */}

                  {/* ACTION REQUEST LIST */}
                  <div className="action-request-list">
                    {/* ACTION REQUEST */}
                    <div className="action-request decline">
                      {/* ACTION REQUEST ICON */}
                      <svg className="action-request-icon icon-remove-friend">
                        <use href="#svg-remove-friend"></use>
                      </svg>
                      {/* /ACTION REQUEST ICON */}
                    </div>
                    {/* /ACTION REQUEST */}
                  </div>
                  {/* ACTION REQUEST LIST */}
                </div>
                {/* /USER STATUS */}

                {/* USER STATUS */}
                <div className="user-status request-small">
                  {/* USER STATUS AVATAR */}
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-outline">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-30-32"
                          data-src={Avatar10}
                        ></div>
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
                        <p className="user-avatar-badge-text">5</p>
                        {/* /USER AVATAR BADGE TEXT */}
                      </div>
                      {/* /USER AVATAR BADGE */}
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}

                  {/* USER STATUS TITLE */}
                  <p className="user-status-title">
                    <a className="bold" href="profile-timeline.html">
                      The Green Goo
                    </a>
                  </p>
                  {/* /USER STATUS TITLE */}

                  {/* USER STATUS TEXT */}
                  <p className="user-status-text small">8 friends in common</p>
                  {/* /USER STATUS TEXT */}

                  {/* ACTION REQUEST LIST */}
                  <div className="action-request-list">
                    {/* ACTION REQUEST */}
                    <div className="action-request accept">
                      {/* ACTION REQUEST ICON */}
                      <svg className="action-request-icon icon-add-friend">
                        <use href="#svg-add-friend"></use>
                      </svg>
                      {/* /ACTION REQUEST ICON */}
                    </div>
                    {/* /ACTION REQUEST */}
                  </div>
                  {/* ACTION REQUEST LIST */}
                </div>
                {/* /USER STATUS */}
              </div>
              {/* /USER STATUS LIST */}
            </div>
            {/* WIDGET BOX CONTENT */}

            {/* WIDGET BOX BUTTON */}
            <a
              className="widget-box-button button small secondary"
              href="profile-friends.html"
            >
              See all Friends
            </a>
            {/* /WIDGET BOX BUTTON */}
          </div>
          {/* /WIDGET BOX */}

          {/* WIDGET BOX */}
          <div className="widget-box">
            {/* WIDGET BOX SETTINGS */}
            <WidgetSettings settings={column1WidgetSettings} />
            {/* /WIDGET BOX SETTINGS */}

            {/* WIDGET BOX TITLE */}
            <p className="widget-box-title">
              Videos <span className="highlighted">7</span>
            </p>
            {/* /WIDGET BOX TITLE */}

            {/* WIDGET BOX CONTENT */}
            <div className="widget-box-content">
              {/* VIDEO BOX LIST */}
              <div className="video-box-list">
                {/* VIDEO BOX */}
                <div className="video-box small">
                  {/* VIDEO BOX COVER */}
                  <div className="video-box-cover popup-video-trigger">
                    {/* VIDEO BOX COVER IMAGE */}
                    <figure className="video-box-cover-image liquid">
                      <img src={Cover08} alt="cover-08" />
                    </figure>
                    {/* /VIDEO BOX COVER IMAGE */}

                    {/* PLAY BUTTON */}
                    <div className="play-button">
                      {/* PLAY BUTTON ICON */}
                      <svg className="play-button-icon icon-play">
                        <use href="#svg-play"></use>
                      </svg>
                      {/* /PLAY BUTTON ICON */}
                    </div>
                    {/* /PLAY BUTTON */}

                    {/* VIDEO BOX INFO */}
                    <div className="video-box-info">
                      {/* VIDEO BOX TITLE */}
                      <p className="video-box-title">
                        Mochi's Island Story Mode
                      </p>
                      {/* /VIDEO BOX TITLE */}

                      {/* VIDEO BOX TEXT */}
                      <p className="video-box-text">1 hour ago</p>
                      {/* /VIDEO BOX TEXT */}
                    </div>
                    {/* /VIDEO BOX INFO */}
                  </div>
                  {/* /VIDEO BOX COVER */}
                </div>
                {/* /VIDEO BOX */}

                {/* VIDEO BOX */}
                <div className="video-box small">
                  {/* VIDEO BOX COVER */}
                  <div className="video-box-cover popup-video-trigger">
                    {/* VIDEO BOX COVER IMAGE */}
                    <figure className="video-box-cover-image liquid">
                      <img src={Cover09} alt="cover-09" />
                    </figure>
                    {/* /VIDEO BOX COVER IMAGE */}

                    {/* PLAY BUTTON */}
                    <div className="play-button">
                      {/* PLAY BUTTON ICON */}
                      <svg className="play-button-icon icon-play">
                        <use href="#svg-play"></use>
                      </svg>
                      {/* /PLAY BUTTON ICON */}
                    </div>
                    {/* /PLAY BUTTON */}

                    {/* VIDEO BOX INFO */}
                    <div className="video-box-info">
                      {/* VIDEO BOX TITLE */}
                      <p className="video-box-title">
                        Sunset Cowboys - Walkthrough
                      </p>
                      {/* /VIDEO BOX TITLE */}

                      {/* VIDEO BOX TEXT */}
                      <p className="video-box-text">3 days ago</p>
                      {/* /VIDEO BOX TEXT */}
                    </div>
                    {/* /VIDEO BOX INFO */}
                  </div>
                  {/* /VIDEO BOX COVER */}
                </div>
                {/* /VIDEO BOX */}

                {/* VIDEO BOX */}
                <div className="video-box small">
                  {/* VIDEO BOX COVER */}
                  <div className="video-box-cover popup-video-trigger">
                    {/* VIDEO BOX COVER IMAGE */}
                    <figure className="video-box-cover-image liquid">
                      <img src={Cover05} alt="cover-05" />
                    </figure>
                    {/* /VIDEO BOX COVER IMAGE */}

                    {/* PLAY BUTTON */}
                    <div className="play-button">
                      {/* PLAY BUTTON ICON */}
                      <svg className="play-button-icon icon-play">
                        <use href="#svg-play"></use>
                      </svg>
                      {/* /PLAY BUTTON ICON */}
                    </div>
                    {/* /PLAY BUTTON */}

                    {/* VIDEO BOX INFO */}
                    <div className="video-box-info">
                      {/* VIDEO BOX TITLE */}
                      <p className="video-box-title">
                        Quest of the Ogre II: The Revenge USA...
                      </p>
                      {/* /VIDEO BOX TITLE */}

                      {/* VIDEO BOX TEXT */}
                      <p className="video-box-text">5 days ago</p>
                      {/* /VIDEO BOX TEXT */}
                    </div>
                    {/* /VIDEO BOX INFO */}
                  </div>
                  {/* /VIDEO BOX COVER */}
                </div>
                {/* /VIDEO BOX */}
              </div>
              {/* /VIDEO BOX LIST */}
            </div>
            {/* WIDGET BOX CONTENT */}
          </div>
          {/* /WIDGET BOX */}

          {/* WIDGET BOX */}
          <div className="widget-box">
            {/* WIDGET BOX SETTINGS */}
            <WidgetSettings settings={column1WidgetSettings} />
            {/* /WIDGET BOX SETTINGS */}

            {/* WIDGET BOX TITLE */}
            <p className="widget-box-title">
              Blog Posts <span className="highlighted">5</span>
            </p>
            {/* /WIDGET BOX TITLE */}

            {/* WIDGET BOX CONTENT */}
            <div className="widget-box-content">
              {/* POST PEEK LIST */}
              <div className="post-peek-list">
                {/* POST PEEK */}
                <div className="post-peek">
                  {/* POST PEEK IMAGE */}
                  <a className="post-peek-image" href="profile-post.html">
                    <figure className="picture small round liquid">
                      <img src={Cover19} alt="cover-19" />
                    </figure>
                  </a>
                  {/* /POST PEEK IMAGE */}

                  {/* POST PEEK TITLE */}
                  <p className="post-peek-title">
                    <a href="profile-post.html">
                      Here's the how and why did I became a full time Gaming
                      Streamer
                    </a>
                  </p>
                  {/* /POST PEEK TITLE */}

                  {/* POST PEEK TEXT */}
                  <p className="post-peek-text">6 days ago</p>
                  {/* /POST PEEK TEXT */}
                </div>
                {/* /POST PEEK */}

                {/* POST PEEK */}
                <div className="post-peek">
                  {/* POST PEEK IMAGE */}
                  <a className="post-peek-image" href="profile-post.html">
                    <figure className="picture small round liquid">
                      <img src={Cover10} alt="cover-10" />
                    </figure>
                  </a>
                  {/* /POST PEEK IMAGE */}

                  {/* POST PEEK TITLE */}
                  <p className="post-peek-title">
                    <a href="profile-post.html">
                      I spoke with the developers of RoBot SaMurai II at the
                      2019 GamingCon
                    </a>
                  </p>
                  {/* /POST PEEK TITLE */}

                  {/* POST PEEK TEXT */}
                  <p className="post-peek-text">3 weeks ago</p>
                  {/* /POST PEEK TEXT */}
                </div>
                {/* /POST PEEK */}

                {/* POST PEEK */}
                <div className="post-peek">
                  {/* POST PEEK IMAGE */}
                  <a className="post-peek-image" href="profile-post.html">
                    <figure className="picture small round liquid">
                      <img src={Cover20} alt="cover-20" />
                    </figure>
                  </a>
                  {/* /POST PEEK IMAGE */}

                  {/* POST PEEK TITLE */}
                  <p className="post-peek-title">
                    <a href="profile-post.html">
                      I will be at this month's StreamCon with NekoBebop
                    </a>
                  </p>
                  {/* /POST PEEK TITLE */}

                  {/* POST PEEK TEXT */}
                  <p className="post-peek-text">4 weeks ago</p>
                  {/* /POST PEEK TEXT */}
                </div>
                {/* /POST PEEK */}

                {/* POST PEEK */}
                <div className="post-peek">
                  {/* POST PEEK IMAGE */}
                  <a className="post-peek-image" href="profile-post.html">
                    <figure className="picture small round liquid">
                      <img src={Cover06} alt="cover-06" />
                    </figure>
                  </a>
                  {/* /POST PEEK IMAGE */}

                  {/* POST PEEK TITLE */}
                  <p className="post-peek-title">
                    <a href="profile-post.html">
                      [Exclusive!] Check out all the new missions and story of
                      the Fire Witch DLC!
                    </a>
                  </p>
                  {/* /POST PEEK TITLE */}

                  {/* POST PEEK TEXT */}
                  <p className="post-peek-text">1 month ago</p>
                  {/* /POST PEEK TEXT */}
                </div>
                {/* /POST PEEK */}

                {/* POST PEEK */}
                <div className="post-peek">
                  {/* POST PEEK IMAGE */}
                  <a className="post-peek-image" href="profile-post.html">
                    <figure className="picture small round liquid">
                      <img src={Cover07} alt="cover-07" />
                    </figure>
                  </a>
                  {/* /POST PEEK IMAGE */}

                  {/* POST PEEK TITLE */}
                  <p className="post-peek-title">
                    <a href="profile-post.html">
                      Old Super Mochi's Island is getting a remake!
                    </a>
                  </p>
                  {/* /POST PEEK TITLE */}

                  {/* POST PEEK TEXT */}
                  <p className="post-peek-text">1 month ago</p>
                  {/* /POST PEEK TEXT */}
                </div>
                {/* /POST PEEK */}
              </div>
              {/* /POST PEEK LIST */}
            </div>
            {/* /WIDGET BOX CONTENT */}
          </div>
          {/* /WIDGET BOX */}
        </div>
        {/* /GRID COLUMN */}

        {/* GRID COLUMN 2*/}
        <div className="grid-column">
          {/* WIDGET BOX */}
          <div className="widget-box no-padding">
            {/* WIDGET BOX SETTINGS */}
            <WidgetSettings settings={column2WidgetSettings} />
            {/* /WIDGET BOX SETTINGS */}

            {/* WIDGET BOX STATUS */}
            <div className="widget-box-status">
              {/* TAG STICKER */}
              <div className="tag-sticker">
                {/* TAG STICKER ICON */}
                <svg className="tag-sticker-icon primary icon-pinned">
                  <use href="#svg-pinned"></use>
                </svg>
                {/* /TAG STICKER ICON */}
              </div>
              {/* /TAG STICKER */}

              {/* WIDGET BOX STATUS CONTENT */}
              <div className="widget-box-status-content">
                {/* USER STATUS */}
                <div className="user-status">
                  {/* USER STATUS AVATAR */}
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-outline">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-30-32"
                          data-src={Avatar01}
                        ></div>
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
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}

                  {/* USER STATUS TITLE */}
                  <p className="user-status-title medium">
                    <a className="bold" href="profile-timeline.html">
                      Marina Valentine
                    </a>
                  </p>
                  {/* /USER STATUS TITLE */}

                  {/* USER STATUS TEXT */}
                  <p className="user-status-text small">5 hours ago</p>
                  {/* /USER STATUS TEXT */}
                </div>
                {/* /USER STATUS */}

                {/* WIDGET BOX STATUS TEXT */}
                <p className="widget-box-status-text">
                  Hi to all! Remember that today I'll be livestreaming along
                  with <a href="profile-timeline.html">@NekoBebop</a> the new
                  character of the brand new Xenowatch patch "Anya Darkness".
                  See you there!
                </p>
                {/* /WIDGET BOX STATUS TEXT */}

                {/* VIDEO STATUS */}
                <a
                  className="video-status small"
                  href="https://www.twitch.tv/"
                  target="_blank"
                >
                  {/* VIDEO STATUS IMAGE */}
                  <img
                    className="video-status-image mobile"
                    src={Cover06}
                    alt="cover-06"
                  />
                  {/* /VIDEO STATUS IMAGE */}

                  {/* VIDEO STATUS IMAGE */}
                  <figure className="video-status-image liquid">
                    <img src={Cover06} alt="cover-06" />
                  </figure>
                  {/* /VIDEO STATUS IMAGE */}

                  {/* VIDEO STATUS INFO */}
                  <div className="video-status-info">
                    {/* VIDEO STATUS TITLE */}
                    <p className="video-status-title">
                      <span className="bold">GameHuntress</span> on
                      <span className="highlighted">Twitch</span>
                    </p>
                    {/* /VIDEO STATUS TITLE */}

                    {/* VIDEO STATUS TEXT */}
                    <p className="video-status-text">
                      Watch the GameHuntress play all the greatest games for
                      both new and old consoles!. Join her in this epic quest!
                    </p>
                    {/* /VIDEO STATUS TEXT */}

                    {/* VIDEO STATUS META */}
                    <p className="video-status-meta">twitch.tv</p>
                    {/* /VIDEO STATUS META */}
                  </div>
                  {/* /VIDEO STATUS INFO */}
                </a>
                {/* /VIDEO STATUS */}

                {/* TAG LIST */}
                <div className="tag-list">
                  {/* TAG ITEM */}
                  <a className="tag-item secondary" href="newsfeed.html">
                    Stream
                  </a>
                  {/* /TAG ITEM */}

                  {/* TAG ITEM */}
                  <a className="tag-item secondary" href="newsfeed.html">
                    Xenowatch
                  </a>
                  {/* /TAG ITEM */}

                  {/* TAG ITEM */}
                  <a className="tag-item secondary" href="newsfeed.html">
                    Gaming
                  </a>
                  {/* /TAG ITEM */}

                  {/* TAG ITEM */}
                  <a className="tag-item secondary" href="newsfeed.html">
                    Twitch
                  </a>
                  {/* /TAG ITEM */}
                </div>
                {/* /TAG LIST */}

                {/* CONTENT ACTIONS */}
                <div className="content-actions">
                  {/* CONTENT ACTION */}
                  <div className="content-action">
                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LIST */}
                      <div className="meta-line-list reaction-item-list">
                        {/* REACTION ITEM */}
                        <div className="reaction-item">
                          {/* REACTION IMAGE */}
                          <img
                            className="reaction-image reaction-item-dropdown-trigger"
                            src={ReactionHappy}
                            alt="reaction-happy"
                          />
                          {/* /REACTION IMAGE */}

                          {/* SIMPLE DROPDOWN */}
                          <div className="simple-dropdown padded reaction-item-dropdown">
                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src={ReactionHappy}
                                alt="reaction-happy"
                              />
                              <span className="bold">Happy</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Matt Parker</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Destroy Dex</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              The Green Goo
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}
                          </div>
                          {/* /SIMPLE DROPDOWN */}
                        </div>
                        {/* /REACTION ITEM */}

                        {/* REACTION ITEM */}
                        <div className="reaction-item">
                          {/* REACTION IMAGE */}
                          <img
                            className="reaction-image reaction-item-dropdown-trigger"
                            src={ReactionLove}
                            alt="reaction-love"
                          />
                          {/* /REACTION IMAGE */}

                          {/* SIMPLE DROPDOWN */}
                          <div className="simple-dropdown padded reaction-item-dropdown">
                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src="img/reaction/love.png"
                                alt="reaction-love"
                              />
                              <span className="bold">Love</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              Sandra Strange
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}
                          </div>
                          {/* /SIMPLE DROPDOWN */}
                        </div>
                        {/* /REACTION ITEM */}

                        {/* REACTION ITEM */}
                        <div className="reaction-item">
                          {/* REACTION IMAGE */}
                          <img
                            className="reaction-image reaction-item-dropdown-trigger"
                            src={ReactionLike}
                            alt="reaction-like"
                          />
                          {/* /REACTION IMAGE */}

                          {/* SIMPLE DROPDOWN */}
                          <div className="simple-dropdown padded reaction-item-dropdown">
                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src={ReactionLike}
                                alt="reaction-like"
                              />
                              <span className="bold">Like</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Neko Bebop</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Nick Grissom</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              Sarah Diamond
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Jett Spiegel</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              Marcus Jhonson
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Jane Rodgers</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <span className="bold">and 2 more...</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}
                          </div>
                          {/* /SIMPLE DROPDOWN */}
                        </div>
                        {/* /REACTION ITEM */}
                      </div>
                      {/* /META LINE LIST */}

                      {/* META LINE TEXT */}
                      <p className="meta-line-text">12</p>
                      {/* /META LINE TEXT */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LIST */}
                      <div className="meta-line-list user-avatar-list">
                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar09}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar08}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar12}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar16}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar06}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}
                      </div>
                      {/* /META LINE LIST */}

                      {/* META LINE TEXT */}
                      <p className="meta-line-text">14 Participants</p>
                      {/* /META LINE TEXT */}
                    </div>
                    {/* /META LINE */}
                  </div>
                  {/* /CONTENT ACTION */}

                  {/* CONTENT ACTION */}
                  <div className="content-action">
                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LINK */}
                      <p className="meta-line-link">3 Comments</p>
                      {/* /META LINE LINK */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE TEXT */}
                      <p className="meta-line-text">0 Shares</p>
                      {/* /META LINE TEXT */}
                    </div>
                    {/* /META LINE */}
                  </div>
                  {/* /CONTENT ACTION */}
                </div>
                {/* /CONTENT ACTIONS */}
              </div>
              {/* /WIDGET BOX STATUS CONTENT */}
            </div>
            {/* /WIDGET BOX STATUS */}

            {/* POST OPTIONS */}
            <div className="post-options">
              {/* POST OPTION WRAP */}
              <div className="post-option-wrap">
                {/* POST OPTION */}
                <div className="post-option reaction-options-dropdown-trigger">
                  {/* POST OPTION ICON */}
                  <svg className="post-option-icon icon-thumbs-up">
                    <use href="#svg-thumbs-up"></use>
                  </svg>
                  {/* /POST OPTION ICON */}

                  {/* POST OPTION TEXT */}
                  <p className="post-option-text">React!</p>
                  {/* /POST OPTION TEXT */}
                </div>
                {/* /POST OPTION */}

                {/* REACTION OPTIONS */}
                <div className="reaction-options reaction-options-dropdown">
                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Like"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionLike}
                      alt="reaction-like"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Love"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionLove}
                      alt="reaction-love"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Dislike"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionDislike}
                      alt="reaction-dislike"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Happy"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionHappy}
                      alt="reaction-happy"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Funny"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionFunny}
                      alt="reaction-funny"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Wow"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionWow}
                      alt="reaction-wow"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Angry"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionAngry}
                      alt="reaction-angry"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Sad"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionSad}
                      alt="reaction-sad"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}
                </div>
                {/* /REACTION OPTIONS */}
              </div>
              {/* /POST OPTION WRAP */}

              {/* POST OPTION */}
              <div className="post-option">
                {/* POST OPTION ICON */}
                <svg className="post-option-icon icon-comment">
                  <use href="#svg-comment"></use>
                </svg>
                {/* /POST OPTION ICON */}

                {/* POST OPTION TEXT */}
                <p className="post-option-text">Comment</p>
                {/* /POST OPTION TEXT */}
              </div>
              {/* /POST OPTION */}

              {/* POST OPTION */}
              <div className="post-option">
                {/* POST OPTION ICON */}
                <svg className="post-option-icon icon-share">
                  <use href="#svg-share"></use>
                </svg>
                {/* /POST OPTION ICON */}

                {/* POST OPTION TEXT */}
                <p className="post-option-text">Share</p>
                {/* /POST OPTION TEXT */}
              </div>
              {/* /POST OPTION */}
            </div>
            {/* /POST OPTIONS */}
          </div>
          {/* /WIDGET BOX */}

          {/* WIDGET BOX */}
          <div className="widget-box no-padding">
            {/* WIDGET BOX SETTINGS */}
            <WidgetSettings settings={column2WidgetSettings} />
            {/* /WIDGET BOX SETTINGS */}

            {/* WIDGET BOX STATUS */}
            <div className="widget-box-status">
              {/* WIDGET BOX STATUS CONTENT */}
              <div className="widget-box-status-content">
                {/* USER STATUS */}
                <div className="user-status">
                  {/* USER STATUS AVATAR */}
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-outline">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-30-32"
                          data-src={Avatar01}
                        ></div>
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
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}

                  {/* USER STATUS TITLE */}
                  <p className="user-status-title medium">
                    <a className="bold" href="profile-timeline.html">
                      Marina Valentine
                    </a>
                  </p>
                  {/* /USER STATUS TITLE */}

                  {/* USER STATUS TEXT */}
                  <p className="user-status-text small">29 minutes ago</p>
                  {/* /USER STATUS TEXT */}
                </div>
                {/* /USER STATUS */}

                {/* WIDGET BOX STATUS TEXT */}
                <p className="widget-box-status-text">
                  I have great news to share with you all! I've been officially
                  made a game streaming verified partner by Streamy
                  <a href="#">http://lyt.ly/snej25</a>. What does this mean?
                  I'll be uploading new content every day, improving the quality
                  and I'm gonna have access to games a month before the official
                  release.
                </p>
                {/* /WIDGET BOX STATUS TEXT */}

                {/* WIDGET BOX STATUS TEXT */}
                <p className="widget-box-status-text">
                  This is a dream come true, thanks to all for the support!!!
                </p>
                {/* /WIDGET BOX STATUS TEXT */}

                {/* CONTENT ACTIONS */}
                <div className="content-actions">
                  {/* CONTENT ACTION */}
                  <div className="content-action">
                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LIST */}
                      <div className="meta-line-list reaction-item-list">
                        {/* REACTION ITEM */}
                        <div className="reaction-item">
                          {/* REACTION IMAGE */}
                          <img
                            className="reaction-image reaction-item-dropdown-trigger"
                            src={ReactionLike}
                            alt="reaction-like"
                          />
                          {/* /REACTION IMAGE */}

                          {/* SIMPLE DROPDOWN */}
                          <div className="simple-dropdown padded reaction-item-dropdown">
                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src={ReactionLike}
                                alt="reaction-like"
                              />
                              <span className="bold">Like</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Neko Bebop</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Nick Grissom</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              Sarah Diamond
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}
                          </div>
                          {/* /SIMPLE DROPDOWN */}
                        </div>
                        {/* /REACTION ITEM */}

                        {/* REACTION ITEM */}
                        <div className="reaction-item">
                          {/* REACTION IMAGE */}
                          <img
                            className="reaction-image reaction-item-dropdown-trigger"
                            src={ReactionLove}
                            alt="reaction-love"
                          />
                          {/* /REACTION IMAGE */}

                          {/* SIMPLE DROPDOWN */}
                          <div className="simple-dropdown padded reaction-item-dropdown">
                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src={ReactionLove}
                                alt="reaction-love"
                              />
                              <span className="bold">Love</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Jett Spiegel</p>
                            {/* /SIMPLE DROPDOWN TEXT */}
                          </div>
                          {/* /SIMPLE DROPDOWN */}
                        </div>
                        {/* /REACTION ITEM */}
                      </div>
                      {/* /META LINE LIST */}

                      {/* META LINE TEXT */}
                      <p className="meta-line-text">4</p>
                      {/* /META LINE TEXT */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LIST */}
                      <div className="meta-line-list user-avatar-list">
                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar12}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar07}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar06}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar23}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar08}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}
                      </div>
                      {/* /META LINE LIST */}

                      {/* META LINE TEXT */}
                      <p className="meta-line-text">7 Participants</p>
                      {/* /META LINE TEXT */}
                    </div>
                    {/* /META LINE */}
                  </div>
                  {/* /CONTENT ACTION */}

                  {/* CONTENT ACTION */}
                  <div className="content-action">
                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LINK */}
                      <p className="meta-line-link">8 Comments</p>
                      {/* /META LINE LINK */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE TEXT */}
                      <p className="meta-line-text">0 Shares</p>
                      {/* /META LINE TEXT */}
                    </div>
                    {/* /META LINE */}
                  </div>
                  {/* /CONTENT ACTION */}
                </div>
                {/* /CONTENT ACTIONS */}
              </div>
              {/* /WIDGET BOX STATUS CONTENT */}
            </div>
            {/* /WIDGET BOX STATUS */}

            {/* POST OPTIONS */}
            <div className="post-options">
              {/* POST OPTION WRAP */}
              <div className="post-option-wrap">
                {/* POST OPTION */}
                <div className="post-option reaction-options-dropdown-trigger">
                  {/* POST OPTION ICON */}
                  <svg className="post-option-icon icon-thumbs-up">
                    <use href="#svg-thumbs-up"></use>
                  </svg>
                  {/* /POST OPTION ICON */}

                  {/* POST OPTION TEXT */}
                  <p className="post-option-text">React!</p>
                  {/* /POST OPTION TEXT */}
                </div>
                {/* /POST OPTION */}

                {/* REACTION OPTIONS */}
                <div className="reaction-options reaction-options-dropdown">
                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Like"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionLike}
                      alt="reaction-like"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Love"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionLove}
                      alt="reaction-love"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Dislike"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionDislike}
                      alt="reaction-dislike"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Happy"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionHappy}
                      alt="reaction-happy"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Funny"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionFunny}
                      alt="reaction-funny"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Wow"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionWow}
                      alt="reaction-wow"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Angry"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionAngry}
                      alt="reaction-angry"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Sad"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionSad}
                      alt="reaction-sad"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}
                </div>
                {/* /REACTION OPTIONS */}
              </div>
              {/* /POST OPTION WRAP */}

              {/* POST OPTION */}
              <div className="post-option">
                {/* POST OPTION ICON */}
                <svg className="post-option-icon icon-comment">
                  <use href="#svg-comment"></use>
                </svg>
                {/* /POST OPTION ICON */}

                {/* POST OPTION TEXT */}
                <p className="post-option-text">Comment</p>
                {/* /POST OPTION TEXT */}
              </div>
              {/* /POST OPTION */}

              {/* POST OPTION */}
              <div className="post-option">
                {/* POST OPTION ICON */}
                <svg className="post-option-icon icon-share">
                  <use href="#svg-share"></use>
                </svg>
                {/* /POST OPTION ICON */}

                {/* POST OPTION TEXT */}
                <p className="post-option-text">Share</p>
                {/* /POST OPTION TEXT */}
              </div>
              {/* /POST OPTION */}
            </div>
            {/* /POST OPTIONS */}
          </div>
          {/* /WIDGET BOX */}

          {/* WIDGET BOX */}
          <div className="widget-box no-padding">
            {/* WIDGET BOX SETTINGS */}
            <WidgetSettings settings={column2WidgetSettings} />
            {/* /WIDGET BOX SETTINGS */}

            {/* WIDGET BOX STATUS */}
            <div className="widget-box-status">
              {/* WIDGET BOX STATUS CONTENT */}
              <div className="widget-box-status-content">
                {/* USER STATUS */}
                <div className="user-status">
                  {/* USER STATUS AVATAR */}
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-outline">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-30-32"
                          data-src={Avatar01}
                        ></div>
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
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}

                  {/* USER STATUS TITLE */}
                  <p className="user-status-title medium">
                    <a className="bold" href="profile-timeline.html">
                      Marina Valentine
                    </a>
                  </p>
                  {/* /USER STATUS TITLE */}

                  {/* USER STATUS TEXT */}
                  <p className="user-status-text small">29 minutes ago</p>
                  {/* /USER STATUS TEXT */}
                </div>
                {/* /USER STATUS */}

                {/* WIDGET BOX STATUS TEXT */}
                <p className="widget-box-status-text">
                  Here's a sneak peek of the official box cover art for
                  <a href="#">Machine Wasteland II</a>! Remember that I'll be
                  having a stream showing a preview tommorrow at 9PM PCT!
                </p>
                {/* /WIDGET BOX STATUS TEXT */}
              </div>
              {/* /WIDGET BOX STATUS CONTENT */}

              {/* WIDGET BOX PICTURE */}
              <figure className="widget-box-picture popup-picture-trigger">
                <img src={Cover04} alt="cover-04" />
              </figure>
              {/* /WIDGET BOX PICTURE */}

              {/* WIDGET BOX STATUS CONTENT */}
              <div className="widget-box-status-content">
                {/* TAG LIST */}
                <div className="tag-list">
                  {/* TAG ITEM */}
                  <a className="tag-item secondary" href="newsfeed.html">
                    Cover
                  </a>
                  {/* /TAG ITEM */}

                  {/* TAG ITEM */}
                  <a className="tag-item secondary" href="newsfeed.html">
                    Preview
                  </a>
                  {/* /TAG ITEM */}

                  {/* TAG ITEM */}
                  <a className="tag-item secondary" href="newsfeed.html">
                    Art
                  </a>
                  {/* /TAG ITEM */}

                  {/* TAG ITEM */}
                  <a className="tag-item secondary" href="newsfeed.html">
                    Machine
                  </a>
                  {/* /TAG ITEM */}

                  {/* TAG ITEM */}
                  <a className="tag-item secondary" href="newsfeed.html">
                    Wasteland
                  </a>
                  {/* /TAG ITEM */}
                </div>
                {/* /TAG LIST */}

                {/* CONTENT ACTIONS */}
                <div className="content-actions">
                  {/* CONTENT ACTION */}
                  <div className="content-action">
                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LIST */}
                      <div className="meta-line-list reaction-item-list">
                        {/* REACTION ITEM */}
                        <div className="reaction-item">
                          {/* REACTION IMAGE */}
                          <img
                            className="reaction-image reaction-item-dropdown-trigger"
                            src={ReactionLove}
                            alt="reaction-love"
                          />
                          {/* /REACTION IMAGE */}

                          {/* SIMPLE DROPDOWN */}
                          <div className="simple-dropdown padded reaction-item-dropdown">
                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src={ReactionLove}
                                alt="reaction-love"
                              />
                              <span className="bold">Love</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Destroy Dex</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              The Green Goo
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              Bearded Wonder
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              Sandra Strange
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Matt Parker</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              James Murdock
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <span className="bold">and 14 more...</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}
                          </div>
                          {/* /SIMPLE DROPDOWN */}
                        </div>
                        {/* /REACTION ITEM */}

                        {/* REACTION ITEM */}
                        <div className="reaction-item">
                          {/* REACTION IMAGE */}
                          <img
                            className="reaction-image reaction-item-dropdown-trigger"
                            src={ReactionWow}
                            alt="reaction-wow"
                          />
                          {/* /REACTION IMAGE */}

                          {/* SIMPLE DROPDOWN */}
                          <div className="simple-dropdown padded reaction-item-dropdown">
                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src={ReactionWow}
                                alt="reaction-wow"
                              />
                              <span className="bold">Wow</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Jett Spiegel</p>
                            {/* /SIMPLE DROPDOWN TEXT */}
                          </div>
                          {/* /SIMPLE DROPDOWN */}
                        </div>
                        {/* /REACTION ITEM */}

                        {/* REACTION ITEM */}
                        <div className="reaction-item">
                          {/* REACTION IMAGE */}
                          <img
                            className="reaction-image reaction-item-dropdown-trigger"
                            src={ReactionLike}
                            alt="reaction-like"
                          />
                          {/* /REACTION IMAGE */}

                          {/* SIMPLE DROPDOWN */}
                          <div className="simple-dropdown padded reaction-item-dropdown">
                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src={ReactionLike}
                                alt="reaction-like"
                              />
                              <span className="bold">Like</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Neko Bebop</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Nick Grissom</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              Sarah Diamond
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}
                          </div>
                          {/* /SIMPLE DROPDOWN */}
                        </div>
                        {/* /REACTION ITEM */}
                      </div>
                      {/* /META LINE LIST */}

                      {/* META LINE TEXT */}
                      <p className="meta-line-text">24</p>
                      {/* /META LINE TEXT */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LIST */}
                      <div className="meta-line-list user-avatar-list">
                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar07}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar02}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar10}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar05}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar03}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}
                      </div>
                      {/* /META LINE LIST */}

                      {/* META LINE TEXT */}
                      <p className="meta-line-text">27 Participants</p>
                      {/* /META LINE TEXT */}
                    </div>
                    {/* /META LINE */}
                  </div>
                  {/* /CONTENT ACTION */}

                  {/* CONTENT ACTION */}
                  <div className="content-action">
                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LINK */}
                      <p className="meta-line-link">13 Comments</p>
                      {/* /META LINE LINK */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE TEXT */}
                      <p className="meta-line-text">0 Shares</p>
                      {/* /META LINE TEXT */}
                    </div>
                    {/* /META LINE */}
                  </div>
                  {/* /CONTENT ACTION */}
                </div>
                {/* /CONTENT ACTIONS */}
              </div>
              {/* /WIDGET BOX STATUS CONTENT */}
            </div>
            {/* /WIDGET BOX STATUS */}

            {/* POST OPTIONS */}
            <div className="post-options">
              {/* POST OPTION WRAP */}
              <div className="post-option-wrap">
                {/* POST OPTION */}
                <div className="post-option reaction-options-dropdown-trigger">
                  {/* POST OPTION ICON */}
                  <svg className="post-option-icon icon-thumbs-up">
                    <use href="#svg-thumbs-up"></use>
                  </svg>
                  {/* /POST OPTION ICON */}

                  {/* POST OPTION TEXT */}
                  <p className="post-option-text">React!</p>
                  {/* /POST OPTION TEXT */}
                </div>
                {/* /POST OPTION */}

                {/* REACTION OPTIONS */}
                <div className="reaction-options reaction-options-dropdown">
                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Like"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionLike}
                      alt="reaction-like"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Love"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionLove}
                      alt="reaction-love"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Dislike"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionDislike}
                      alt="reaction-dislike"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Happy"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionDislike}
                      alt="reaction-happy"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Funny"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionFunny}
                      alt="reaction-funny"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Wow"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionWow}
                      alt="reaction-wow"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Angry"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionAngry}
                      alt="reaction-angry"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Sad"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionSad}
                      alt="reaction-sad"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}
                </div>
                {/* /REACTION OPTIONS */}
              </div>
              {/* /POST OPTION WRAP */}

              {/* POST OPTION */}
              <div className="post-option active">
                {/* POST OPTION ICON */}
                <svg className="post-option-icon icon-comment">
                  <use href="#svg-comment"></use>
                </svg>
                {/* /POST OPTION ICON */}

                {/* POST OPTION TEXT */}
                <p className="post-option-text">Comment</p>
                {/* /POST OPTION TEXT */}
              </div>
              {/* /POST OPTION */}

              {/* POST OPTION */}
              <div className="post-option">
                {/* POST OPTION ICON */}
                <svg className="post-option-icon icon-share">
                  <use href="#svg-share"></use>
                </svg>
                {/* /POST OPTION ICON */}

                {/* POST OPTION TEXT */}
                <p className="post-option-text">Share</p>
                {/* /POST OPTION TEXT */}
              </div>
              {/* /POST OPTION */}
            </div>
            {/* /POST OPTIONS */}

            {/* POST COMMENT LIST */}
            <div className="post-comment-list">
              {/* POST COMMENT */}
              <div className="post-comment">
                {/* USER AVATAR */}
                <a
                  className="user-avatar small no-outline"
                  href="profile-timeline.html"
                >
                  {/* USER AVATAR CONTENT */}
                  <div className="user-avatar-content">
                    {/* HEXAGON */}
                    <div
                      className="hexagon-image-30-32"
                      data-src={Avatar05}
                    ></div>
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
                    <p className="user-avatar-badge-text">12</p>
                    {/* /USER AVATAR BADGE TEXT */}
                  </div>
                  {/* /USER AVATAR BADGE */}
                </a>
                {/* /USER AVATAR */}

                {/* POST COMMENT TEXT */}
                <p className="post-comment-text">
                  <a
                    className="post-comment-text-author"
                    href="profile-timeline.html"
                  >
                    Neko Bebop
                  </a>
                  It's always a pleasure to do this streams with you! If we have
                  at least half the fun than last time it will be an incredible
                  success!
                </p>
                {/* /POST COMMENT TEXT */}

                {/* CONTENT ACTIONS */}
                <div className="content-actions">
                  {/* CONTENT ACTION */}
                  <div className="content-action">
                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LIST */}
                      <div className="meta-line-list reaction-item-list small">
                        {/* REACTION ITEM */}
                        <div className="reaction-item">
                          {/* REACTION IMAGE */}
                          <img
                            className="reaction-image reaction-item-dropdown-trigger"
                            src={ReactionHappy}
                            alt="reaction-happy"
                          />
                          {/* /REACTION IMAGE */}

                          {/* SIMPLE DROPDOWN */}
                          <div className="simple-dropdown padded reaction-item-dropdown">
                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src={ReactionHappy}
                                alt="reaction-happy"
                              />
                              <span className="bold">Happy</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              Marcus Jhonson
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}
                          </div>
                          {/* /SIMPLE DROPDOWN */}
                        </div>
                        {/* /REACTION ITEM */}

                        {/* REACTION ITEM */}
                        <div className="reaction-item">
                          {/* REACTION IMAGE */}
                          <img
                            className="reaction-image reaction-item-dropdown-trigger"
                            src={ReactionLike}
                            alt="reaction-like"
                          />
                          {/* /REACTION IMAGE */}

                          {/* SIMPLE DROPDOWN */}
                          <div className="simple-dropdown padded reaction-item-dropdown">
                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src={ReactionLike}
                                alt="reaction-like"
                              />
                              <span className="bold">Like</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Neko Bebop</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Nick Grissom</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              Sarah Diamond
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}
                          </div>
                          {/* /SIMPLE DROPDOWN */}
                        </div>
                        {/* /REACTION ITEM */}
                      </div>
                      {/* /META LINE LIST */}

                      {/* META LINE TEXT */}
                      <p className="meta-line-text">4</p>
                      {/* /META LINE TEXT */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LINK */}
                      <p className="meta-line-link light reaction-options-small-dropdown-trigger">
                        React!
                      </p>
                      {/* /META LINE LINK */}

                      {/* REACTION OPTIONS */}
                      <div className="reaction-options small reaction-options-small-dropdown">
                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Like"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionLike}
                            alt="reaction-like"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Love"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionLove}
                            alt="reaction-love"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Dislike"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionDislike}
                            alt="reaction-dislike"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Happy"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionHappy}
                            alt="reaction-happy"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Funny"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionFunny}
                            alt="reaction-funny"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Wow"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionWow}
                            alt="reaction-wow"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Angry"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionAngry}
                            alt="reaction-angry"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Sad"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionSad}
                            alt="reaction-sad"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}
                      </div>
                      {/* /REACTION OPTIONS */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LINK */}
                      <p className="meta-line-link light">Reply</p>
                      {/* /META LINE LINK */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE TIMESTAMP */}
                      <p className="meta-line-timestamp">15 minutes ago</p>
                      {/* /META LINE TIMESTAMP */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line settings">
                      {/* POST SETTINGS WRAP */}
                      <div className="post-settings-wrap">
                        {/* POST SETTINGS */}
                        <div className="post-settings post-settings-dropdown-trigger">
                          {/* POST SETTINGS ICON */}
                          <svg className="post-settings-icon icon-more-dots">
                            <use href="#svg-more-dots"></use>
                          </svg>
                          {/* /POST SETTINGS ICON */}
                        </div>
                        {/* /POST SETTINGS */}

                        {/* SIMPLE DROPDOWN */}
                        <div className="simple-dropdown post-settings-dropdown">
                          {/* SIMPLE DROPDOWN LINK */}
                          <p className="simple-dropdown-link">Report Post</p>
                          {/* /SIMPLE DROPDOWN LINK */}
                        </div>
                        {/* /SIMPLE DROPDOWN */}
                      </div>
                      {/* /POST SETTINGS WRAP */}
                    </div>
                    {/* /META LINE */}
                  </div>
                  {/* /CONTENT ACTION */}
                </div>
                {/* /CONTENT ACTIONS */}
              </div>
              {/* /POST COMMENT */}

              {/* POST COMMENT */}
              <div className="post-comment unread reply-2">
                {/* USER AVATAR */}
                <a
                  className="user-avatar small no-outline"
                  href="profile-timeline.html"
                >
                  {/* USER AVATAR CONTENT */}
                  <div className="user-avatar-content">
                    {/* HEXAGON */}
                    <div
                      className="hexagon-image-30-32"
                      data-src={Avatar03}
                    ></div>
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
                    <p className="user-avatar-badge-text">16</p>
                    {/* /USER AVATAR BADGE TEXT */}
                  </div>
                  {/* /USER AVATAR BADGE */}
                </a>
                {/* /USER AVATAR */}

                {/* POST COMMENT TEXT */}
                <p className="post-comment-text">
                  <a
                    className="post-comment-text-author"
                    href="profile-timeline.html"
                  >
                    Nick Grissom
                  </a>
                  I wouldn't miss it for anything!! Love both streams!
                </p>
                {/* /POST COMMENT TEXT */}

                {/* CONTENT ACTIONS */}
                <div className="content-actions">
                  {/* CONTENT ACTION */}
                  <div className="content-action">
                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LIST */}
                      <div className="meta-line-list reaction-item-list small">
                        {/* REACTION ITEM */}
                        <div className="reaction-item">
                          {/* REACTION IMAGE */}
                          <img
                            className="reaction-image reaction-item-dropdown-trigger"
                            src={ReactionLike}
                            alt="reaction-like"
                          />
                          {/* /REACTION IMAGE */}

                          {/* SIMPLE DROPDOWN */}
                          <div className="simple-dropdown padded reaction-item-dropdown">
                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src={ReactionLike}
                                alt="reaction-like"
                              />
                              <span className="bold">Like</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Neko Bebop</p>
                            {/* /SIMPLE DROPDOWN TEXT */}
                          </div>
                          {/* /SIMPLE DROPDOWN */}
                        </div>
                        {/* /REACTION ITEM */}
                      </div>
                      {/* /META LINE LIST */}

                      {/* META LINE TEXT */}
                      <p className="meta-line-text">1</p>
                      {/* /META LINE TEXT */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LINK */}
                      <p className="meta-line-link light reaction-options-small-dropdown-trigger">
                        React!
                      </p>
                      {/* /META LINE LINK */}

                      {/* REACTION OPTIONS */}
                      <div className="reaction-options small reaction-options-small-dropdown">
                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Like"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionLike}
                            alt="reaction-like"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Love"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionLove}
                            alt="reaction-love"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Dislike"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionDislike}
                            alt="reaction-dislike"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Happy"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionHappy}
                            alt="reaction-happy"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Funny"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionFunny}
                            alt="reaction-funny"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Wow"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionWow}
                            alt="reaction-wow"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Angry"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionAngry}
                            alt="reaction-angry"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Sad"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionSad}
                            alt="reaction-sad"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}
                      </div>
                      {/* /REACTION OPTIONS */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LINK */}
                      <p className="meta-line-link light">Reply</p>
                      {/* /META LINE LINK */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE TIMESTAMP */}
                      <p className="meta-line-timestamp">2 minutes ago</p>
                      {/* /META LINE TIMESTAMP */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line settings">
                      {/* POST SETTINGS WRAP */}
                      <div className="post-settings-wrap">
                        {/* POST SETTINGS */}
                        <div className="post-settings post-settings-dropdown-trigger">
                          {/* POST SETTINGS ICON */}
                          <svg className="post-settings-icon icon-more-dots">
                            <use href="#svg-more-dots"></use>
                          </svg>
                          {/* /POST SETTINGS ICON */}
                        </div>
                        {/* /POST SETTINGS */}

                        {/* SIMPLE DROPDOWN */}
                        <div className="simple-dropdown post-settings-dropdown">
                          {/* SIMPLE DROPDOWN LINK */}
                          <p className="simple-dropdown-link">Report Post</p>
                          {/* /SIMPLE DROPDOWN LINK */}
                        </div>
                        {/* /SIMPLE DROPDOWN */}
                      </div>
                      {/* /POST SETTINGS WRAP */}
                    </div>
                    {/* /META LINE */}
                  </div>
                  {/* /CONTENT ACTION */}
                </div>
                {/* /CONTENT ACTIONS */}
              </div>
              {/* /POST COMMENT */}

              {/* POST COMMENT */}
              <div className="post-comment">
                {/* USER AVATAR */}
                <a
                  className="user-avatar small no-outline"
                  href="profile-timeline.html"
                >
                  {/* USER AVATAR CONTENT */}
                  <div className="user-avatar-content">
                    {/* HEXAGON */}
                    <div
                      className="hexagon-image-30-32"
                      data-src={Avatar02}
                    ></div>
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
                    <p className="user-avatar-badge-text">19</p>
                    {/* /USER AVATAR BADGE TEXT */}
                  </div>
                  {/* /USER AVATAR BADGE */}
                </a>
                {/* /USER AVATAR */}

                {/* POST COMMENT TEXT */}
                <p className="post-comment-text">
                  <a
                    className="post-comment-text-author"
                    href="profile-timeline.html"
                  >
                    Destroy Dex
                  </a>
                  YEAHHH!!
                  <a href="profile-timeline.html">@MarinaValentine</a> I really
                  enjoyed your last stream and it also was really funny! Can't
                  wait!
                </p>
                {/* /POST COMMENT TEXT */}

                {/* CONTENT ACTIONS */}
                <div className="content-actions">
                  {/* CONTENT ACTION */}
                  <div className="content-action">
                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LINK */}
                      <p className="meta-line-link light reaction-options-small-dropdown-trigger">
                        React!
                      </p>
                      {/* /META LINE LINK */}

                      {/* REACTION OPTIONS */}
                      <div className="reaction-options small reaction-options-small-dropdown">
                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Like"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionLike}
                            alt="reaction-like"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Love"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionLove}
                            alt="reaction-love"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Dislike"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionDislike}
                            alt="reaction-dislike"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Happy"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionHappy}
                            alt="reaction-happy"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Funny"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionFunny}
                            alt="reaction-funny"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Wow"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionWow}
                            alt="reaction-wow"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Angry"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionAngry}
                            alt="reaction-angry"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Sad"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionSad}
                            alt="reaction-sad"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}
                      </div>
                      {/* /REACTION OPTIONS */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LINK */}
                      <p className="meta-line-link light">Reply</p>
                      {/* /META LINE LINK */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE TIMESTAMP */}
                      <p className="meta-line-timestamp">27 minutes ago</p>
                      {/* /META LINE TIMESTAMP */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line settings">
                      {/* POST SETTINGS WRAP */}
                      <div className="post-settings-wrap">
                        {/* POST SETTINGS */}
                        <div className="post-settings post-settings-dropdown-trigger">
                          {/* POST SETTINGS ICON */}
                          <svg className="post-settings-icon icon-more-dots">
                            <use href="#svg-more-dots"></use>
                          </svg>
                          {/* /POST SETTINGS ICON */}
                        </div>
                        {/* /POST SETTINGS */}

                        {/* SIMPLE DROPDOWN */}
                        <div className="simple-dropdown post-settings-dropdown">
                          {/* SIMPLE DROPDOWN LINK */}
                          <p className="simple-dropdown-link">Report Post</p>
                          {/* /SIMPLE DROPDOWN LINK */}
                        </div>
                        {/* /SIMPLE DROPDOWN */}
                      </div>
                      {/* /POST SETTINGS WRAP */}
                    </div>
                    {/* /META LINE */}
                  </div>
                  {/* /CONTENT ACTION */}
                </div>
                {/* /CONTENT ACTIONS */}
              </div>
              {/* /POST COMMENT */}

              {/* POST COMMENT */}
              <div className="post-comment">
                {/* USER AVATAR */}
                <a
                  className="user-avatar small no-outline"
                  href="profile-timeline.html"
                >
                  {/* USER AVATAR CONTENT */}
                  <div className="user-avatar-content">
                    {/* HEXAGON */}
                    <div
                      className="hexagon-image-30-32"
                      data-src={Avatar07}
                    ></div>
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
                    <p className="user-avatar-badge-text">26</p>
                    {/* /USER AVATAR BADGE TEXT */}
                  </div>
                  {/* /USER AVATAR BADGE */}
                </a>
                {/* /USER AVATAR */}

                {/* POST COMMENT TEXT */}
                <p className="post-comment-text">
                  <a
                    className="post-comment-text-author"
                    href="profile-timeline.html"
                  >
                    Sarah Diamond
                  </a>
                  That sounds awesome Marina! And also thanks a lot for the art
                  sneak peek! I went to the GameCon last week and had a great
                  time playing the game's open demo.
                </p>
                {/* /POST COMMENT TEXT */}

                {/* CONTENT ACTIONS */}
                <div className="content-actions">
                  {/* CONTENT ACTION */}
                  <div className="content-action">
                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LINK */}
                      <p className="meta-line-link light reaction-options-small-dropdown-trigger">
                        React!
                      </p>
                      {/* /META LINE LINK */}

                      {/* REACTION OPTIONS */}
                      <div className="reaction-options small reaction-options-small-dropdown">
                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Like"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionLike}
                            alt="reaction-like"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Love"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionLove}
                            alt="reaction-love"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Dislike"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionDislike}
                            alt="reaction-dislike"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Happy"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionHappy}
                            alt="reaction-happy"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Funny"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionFunny}
                            alt="reaction-funny"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Wow"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionWow}
                            alt="reaction-wow"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Angry"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionAngry}
                            alt="reaction-angry"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}

                        {/* REACTION OPTION */}
                        <div
                          className="reaction-option text-tooltip-tft"
                          data-title="Sad"
                        >
                          {/* REACTION OPTION IMAGE */}
                          <img
                            className="reaction-option-image"
                            src={ReactionSad}
                            alt="reaction-sad"
                          />
                          {/* /REACTION OPTION IMAGE */}
                        </div>
                        {/* /REACTION OPTION */}
                      </div>
                      {/* /REACTION OPTIONS */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LINK */}
                      <p className="meta-line-link light">Reply</p>
                      {/* /META LINE LINK */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE TIMESTAMP */}
                      <p className="meta-line-timestamp">39 minutes ago</p>
                      {/* /META LINE TIMESTAMP */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line settings">
                      {/* POST SETTINGS WRAP */}
                      <div className="post-settings-wrap">
                        {/* POST SETTINGS */}
                        <div className="post-settings post-settings-dropdown-trigger">
                          {/* POST SETTINGS ICON */}
                          <svg className="post-settings-icon icon-more-dots">
                            <use href="#svg-more-dots"></use>
                          </svg>
                          {/* /POST SETTINGS ICON */}
                        </div>
                        {/* /POST SETTINGS */}

                        {/* SIMPLE DROPDOWN */}
                        <div className="simple-dropdown post-settings-dropdown">
                          {/* SIMPLE DROPDOWN LINK */}
                          <p className="simple-dropdown-link">Report Post</p>
                          {/* /SIMPLE DROPDOWN LINK */}
                        </div>
                        {/* /SIMPLE DROPDOWN */}
                      </div>
                      {/* /POST SETTINGS WRAP */}
                    </div>
                    {/* /META LINE */}
                  </div>
                  {/* /CONTENT ACTION */}
                </div>
                {/* /CONTENT ACTIONS */}
              </div>
              {/* /POST COMMENT */}

              {/* POST COMMENT HEADING */}
              <p className="post-comment-heading">
                Load More Comments <span className="highlighted">9+</span>
              </p>
              {/* /POST COMMENT HEADING */}

              {/* POST COMMENT FORM */}
              <div className="post-comment-form">
                {/* USER AVATAR */}
                <div className="user-avatar small no-outline">
                  {/* USER AVATAR CONTENT */}
                  <div className="user-avatar-content">
                    {/* HEXAGON */}
                    <div
                      className="hexagon-image-30-32"
                      data-src={Avatar01}
                    ></div>
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
                </div>
                {/* /USER AVATAR */}

                {/* FORM */}
                <form className="form">
                  {/* FORM ROW */}
                  <div className="form-row">
                    {/* FORM ITEM */}
                    <div className="form-item">
                      {/* FORM INPUT */}
                      <div className="form-input small">
                        <label for="post-reply">Your Reply</label>
                        <input type="text" id="post-reply" name="post_reply" />
                      </div>
                      {/* /FORM INPUT */}
                    </div>
                    {/* /FORM ITEM */}
                  </div>
                  {/* /FORM ROW */}
                </form>
                {/* /FORM */}
              </div>
              {/* /POST COMMENT FORM */}
            </div>
            {/* /POST COMMENT LIST */}
          </div>
          {/* /WIDGET BOX */}

          {/* WIDGET BOX */}
          <div className="widget-box no-padding">
            {/* WIDGET BOX SETTINGS */}
            <WidgetSettings settings={column2WidgetSettings} />
            {/* /WIDGET BOX SETTINGS */}

            {/* WIDGET BOX STATUS */}
            <div className="widget-box-status">
              {/* WIDGET BOX STATUS CONTENT */}
              <div className="widget-box-status-content">
                {/* USER STATUS */}
                <div className="user-status">
                  {/* USER STATUS AVATAR */}
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-outline">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-30-32"
                          data-src={Avatar01}
                        ></div>
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
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}

                  {/* USER STATUS TITLE */}
                  <p className="user-status-title medium">
                    <a className="bold" href="profile-timeline.html">
                      Marina Valentine
                    </a>
                  </p>
                  {/* /USER STATUS TITLE */}

                  {/* USER STATUS TEXT */}
                  <p className="user-status-text small">17 hours ago</p>
                  {/* /USER STATUS TEXT */}
                </div>
                {/* /USER STATUS */}

                {/* WIDGET BOX STATUS TEXT */}
                <p className="widget-box-status-text">
                  Tomorow I'll be livestreaming along with
                  <a href="profile-timeline.html">@DestroyDex</a> on my Youtube
                  channel. We are gonna do a spedrun of Super Mochi Bros 3!
                </p>
                {/* /WIDGET BOX STATUS TEXT */}

                {/* VIDEO STATUS */}
                <a
                  className="video-status"
                  href="https://www.youtube.com/"
                  target="_blank"
                >
                  {/* VIDEO STATUS IMAGE */}
                  <img
                    className="video-status-image"
                    src={Cover50}
                    alt="cover-50"
                  />
                  {/* /VIDEO STATUS IMAGE */}

                  {/* VIDEO STATUS INFO */}
                  <div className="video-status-info">
                    {/* VIDEO STATUS META */}
                    <p className="video-status-meta">youtube.com</p>
                    {/* /VIDEO STATUS META */}

                    {/* VIDEO STATUS TITLE */}
                    <p className="video-status-title">
                      <span className="bold">GameHuntress</span> on
                      <span className="highlighted">Youtube</span>
                    </p>
                    {/* /VIDEO STATUS TITLE */}

                    {/* VIDEO STATUS TEXT */}
                    <p className="video-status-text">
                      Watch the GameHuntress play all the greatest games.
                    </p>
                    {/* /VIDEO STATUS TEXT */}
                  </div>
                  {/* /VIDEO STATUS INFO */}
                </a>
                {/* /VIDEO STATUS */}

                {/* TAG LIST */}
                <div className="tag-list">
                  {/* TAG ITEM */}
                  <a className="tag-item secondary" href="newsfeed.html">
                    Stream
                  </a>
                  {/* /TAG ITEM */}

                  {/* TAG ITEM */}
                  <a className="tag-item secondary" href="newsfeed.html">
                    Youtube
                  </a>
                  {/* /TAG ITEM */}

                  {/* TAG ITEM */}
                  <a className="tag-item secondary" href="newsfeed.html">
                    Gaming
                  </a>
                  {/* /TAG ITEM */}

                  {/* TAG ITEM */}
                  <a className="tag-item secondary" href="newsfeed.html">
                    Retro
                  </a>
                  {/* /TAG ITEM */}
                </div>
                {/* /TAG LIST */}

                {/* CONTENT ACTIONS */}
                <div className="content-actions">
                  {/* CONTENT ACTION */}
                  <div className="content-action">
                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LIST */}
                      <div className="meta-line-list reaction-item-list">
                        {/* REACTION ITEM */}
                        <div className="reaction-item">
                          {/* REACTION IMAGE */}
                          <img
                            className="reaction-image reaction-item-dropdown-trigger"
                            src={ReactionHappy}
                            alt="reaction-happy"
                          />
                          {/* /REACTION IMAGE */}

                          {/* SIMPLE DROPDOWN */}
                          <div className="simple-dropdown padded reaction-item-dropdown">
                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src={ReactionHappy}
                                alt="reaction-happy"
                              />
                              <span className="bold">Happy</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Matt Parker</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Destroy Dex</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              The Green Goo
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}
                          </div>
                          {/* /SIMPLE DROPDOWN */}
                        </div>
                        {/* /REACTION ITEM */}

                        {/* REACTION ITEM */}
                        <div className="reaction-item">
                          {/* REACTION IMAGE */}
                          <img
                            className="reaction-image reaction-item-dropdown-trigger"
                            src={ReactionLove}
                            alt="reaction-love"
                          />
                          {/* /REACTION IMAGE */}

                          {/* SIMPLE DROPDOWN */}
                          <div className="simple-dropdown padded reaction-item-dropdown">
                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src={ReactionLove}
                                alt="reaction-love"
                              />
                              <span className="bold">Love</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              Sandra Strange
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Jane Rodgers</p>
                            {/* /SIMPLE DROPDOWN TEXT */}
                          </div>
                          {/* /SIMPLE DROPDOWN */}
                        </div>
                        {/* /REACTION ITEM */}

                        {/* REACTION ITEM */}
                        <div className="reaction-item">
                          {/* REACTION IMAGE */}
                          <img
                            className="reaction-image reaction-item-dropdown-trigger"
                            src={ReactionFunny}
                            alt="reaction-funny"
                          />
                          {/* /REACTION IMAGE */}

                          {/* SIMPLE DROPDOWN */}
                          <div className="simple-dropdown padded reaction-item-dropdown">
                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src={ReactionFunny}
                                alt="reaction-funny"
                              />
                              <span className="bold">Funny</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Neko Bebop</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Nick Grissom</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              Sarah Diamond
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Jett Spiegel</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              Marcus Jhonson
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <span className="bold">and 12 more...</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}
                          </div>
                          {/* /SIMPLE DROPDOWN */}
                        </div>
                        {/* /REACTION ITEM */}
                      </div>
                      {/* /META LINE LIST */}

                      {/* META LINE TEXT */}
                      <p className="meta-line-text">22</p>
                      {/* /META LINE TEXT */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LIST */}
                      <div className="meta-line-list user-avatar-list">
                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar09}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar08}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar12}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar16}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar06}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}
                      </div>
                      {/* /META LINE LIST */}

                      {/* META LINE TEXT */}
                      <p className="meta-line-text">30 Participants</p>
                      {/* /META LINE TEXT */}
                    </div>
                    {/* /META LINE */}
                  </div>
                  {/* /CONTENT ACTION */}

                  {/* CONTENT ACTION */}
                  <div className="content-action">
                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LINK */}
                      <p className="meta-line-link">12 Comments</p>
                      {/* /META LINE LINK */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE TEXT */}
                      <p className="meta-line-text">0 Shares</p>
                      {/* /META LINE TEXT */}
                    </div>
                    {/* /META LINE */}
                  </div>
                  {/* /CONTENT ACTION */}
                </div>
                {/* /CONTENT ACTIONS */}
              </div>
              {/* /WIDGET BOX STATUS CONTENT */}
            </div>
            {/* /WIDGET BOX STATUS */}

            {/* POST OPTIONS */}
            <div className="post-options">
              {/* POST OPTION WRAP */}
              <div className="post-option-wrap">
                {/* POST OPTION */}
                <div className="post-option reaction-options-dropdown-trigger">
                  {/* POST OPTION ICON */}
                  <svg className="post-option-icon icon-thumbs-up">
                    <use href="#svg-thumbs-up"></use>
                  </svg>
                  {/* /POST OPTION ICON */}

                  {/* POST OPTION TEXT */}
                  <p className="post-option-text">React!</p>
                  {/* /POST OPTION TEXT */}
                </div>
                {/* /POST OPTION */}

                {/* REACTION OPTIONS */}
                <div className="reaction-options reaction-options-dropdown">
                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Like"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionLike}
                      alt="reaction-like"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Love"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionLove}
                      alt="reaction-love"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Dislike"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionDislike}
                      alt="reaction-dislike"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Happy"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionDislike}
                      alt="reaction-happy"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Funny"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionFunny}
                      alt="reaction-funny"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Wow"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionWow}
                      alt="reaction-wow"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Angry"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionAngry}
                      alt="reaction-angry"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Sad"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionSad}
                      alt="reaction-sad"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}
                </div>
                {/* /REACTION OPTIONS */}
              </div>
              {/* /POST OPTION WRAP */}

              {/* POST OPTION */}
              <div className="post-option active">
                {/* POST OPTION ICON */}
                <svg className="post-option-icon icon-comment">
                  <use href="#svg-comment"></use>
                </svg>
                {/* /POST OPTION ICON */}

                {/* POST OPTION TEXT */}
                <p className="post-option-text">Comment</p>
                {/* /POST OPTION TEXT */}
              </div>
              {/* /POST OPTION */}

              {/* POST OPTION */}
              <div className="post-option">
                {/* POST OPTION ICON */}
                <svg className="post-option-icon icon-share">
                  <use href="#svg-share"></use>
                </svg>
                {/* /POST OPTION ICON */}

                {/* POST OPTION TEXT */}
                <p className="post-option-text">Share</p>
                {/* /POST OPTION TEXT */}
              </div>
              {/* /POST OPTION */}
            </div>
            {/* /POST OPTIONS */}

            {/* POST OPTION */}
            <div className="post-option">
              {/* POST OPTION ICON */}
              <svg className="post-option-icon icon-comment">
                <use href="#svg-comment"></use>
              </svg>
              {/* /POST OPTION ICON */}

              {/* POST OPTION TEXT */}
              <p className="post-option-text">Comment</p>
              {/* /POST OPTION TEXT */}
            </div>
            {/* /POST OPTION */}

            {/* POST OPTION */}
            <div className="post-option">
              {/* POST OPTION ICON */}
              <svg className="post-option-icon icon-share">
                <use href="#svg-share"></use>
              </svg>
              {/* /POST OPTION ICON */}

              {/* POST OPTION TEXT */}
              <p className="post-option-text">Share</p>
              {/* /POST OPTION TEXT */}
            </div>
            {/* /POST OPTION */}
          </div>
          {/* /POST OPTIONS */}
          {/* WIDGET BOX */}
          <div className="widget-box no-padding">
            {/* WIDGET BOX SETTINGS */}
            <WidgetSettings settings={column2WidgetSettings} />
            {/* /WIDGET BOX SETTINGS */}

            {/* WIDGET BOX STATUS */}
            <div className="widget-box-status">
              {/* WIDGET BOX STATUS CONTENT */}
              <div className="widget-box-status-content">
                {/* USER STATUS */}
                <div className="user-status">
                  {/* USER STATUS AVATAR */}
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-outline">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-30-32"
                          data-src={Avatar01}
                        ></div>
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
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}

                  {/* USER STATUS TITLE */}
                  <p className="user-status-title medium">
                    <a className="bold" href="profile-timeline.html">
                      Marina Valentine
                    </a>
                    wrote a <span className="bold">Blog Post</span>
                  </p>
                  {/* /USER STATUS TITLE */}

                  {/* USER STATUS TEXT */}
                  <p className="user-status-text small">2 days ago</p>
                  {/* /USER STATUS TEXT */}
                </div>
                {/* /USER STATUS */}
              </div>
              {/* /WIDGET BOX STATUS CONTENT */}

              {/* POST PREVIEW */}
              <div className="post-preview medium">
                {/* POST PREVIEW IMAGE */}
                <figure className="post-preview-image liquid">
                  <img src={Cover19} alt="cover-19" />
                </figure>
                {/* /POST PREVIEW IMAGE */}

                {/* POST PREVIEW INFO */}
                <div className="post-preview-info">
                  {/* POST PREVIEW TIMESTAMP */}
                  <p className="post-preview-timestamp">5 mins read</p>
                  {/* /POST PREVIEW TIMESTAMP */}

                  {/* POST PREVIEW TITLE */}
                  <p className="post-preview-title">
                    Here's the how and why did I became a full time Gaming
                    Streamer
                  </p>
                  {/* /POST PREVIEW TITLE */}

                  {/* POST PREVIEW TEXT */}
                  <p className="post-preview-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  {/* /POST PREVIEW TEXT */}

                  {/* POST PREVIEW TEXT */}
                  <p className="post-preview-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam...
                  </p>
                  {/* /POST PREVIEW TEXT */}

                  {/* POST PREVIEW LINK */}
                  <a className="post-preview-link" href="profile-post.html">
                    Read more...
                  </a>
                  {/* /POST PREVIEW LINK */}
                </div>
                {/* /POST PREVIEW INFO */}
              </div>
              {/* /POST PREVIEW */}

              {/* WIDGET BOX STATUS CONTENT */}
              <div className="widget-box-status-content">
                {/* TAG LIST */}
                <div className="tag-list">
                  {/* TAG ITEM */}
                  <a className="tag-item secondary" href="newsfeed.html">
                    Streamer
                  </a>
                  {/* /TAG ITEM */}

                  {/* TAG ITEM */}
                  <a className="tag-item secondary" href="newsfeed.html">
                    Gaming
                  </a>
                  {/* /TAG ITEM */}

                  {/* TAG ITEM */}
                  <a className="tag-item secondary" href="newsfeed.html">
                    Job
                  </a>
                  {/* /TAG ITEM */}

                  {/* TAG ITEM */}
                  <a className="tag-item secondary" href="newsfeed.html">
                    Life
                  </a>
                  {/* /TAG ITEM */}

                  {/* TAG ITEM */}
                  <a className="tag-item secondary" href="newsfeed.html">
                    Experience
                  </a>
                  {/* /TAG ITEM */}
                </div>
                {/* /TAG LIST */}

                {/* CONTENT ACTIONS */}
                <div className="content-actions">
                  {/* CONTENT ACTION */}
                  <div className="content-action">
                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LIST */}
                      <div className="meta-line-list reaction-item-list">
                        {/* REACTION ITEM */}
                        <div className="reaction-item">
                          {/* REACTION IMAGE */}
                          <img
                            className="reaction-image reaction-item-dropdown-trigger"
                            src={ReactionWow}
                            alt="reaction-wow"
                          />
                          {/* /REACTION IMAGE */}

                          {/* SIMPLE DROPDOWN */}
                          <div className="simple-dropdown padded reaction-item-dropdown">
                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src={ReactionWow}
                                alt="reaction-wow"
                              />
                              <span className="bold">Wow</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Neko Bebop</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Nick Grissom</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              Sarah Diamond
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              Marcus Jhonson
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}
                          </div>
                          {/* /SIMPLE DROPDOWN */}
                        </div>
                        {/* /REACTION ITEM */}

                        {/* REACTION ITEM */}
                        <div className="reaction-item">
                          {/* REACTION IMAGE */}
                          <img
                            className="reaction-image reaction-item-dropdown-trigger"
                            src={ReactionHappy}
                            alt="reaction-happy"
                          />
                          {/* /REACTION IMAGE */}

                          {/* SIMPLE DROPDOWN */}
                          <div className="simple-dropdown padded reaction-item-dropdown">
                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src={ReactionHappy}
                                alt="reaction-happy"
                              />
                              <span className="bold">Happy</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Jett Spiegel</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Jane Rodgers</p>
                            {/* /SIMPLE DROPDOWN TEXT */}
                          </div>
                          {/* /SIMPLE DROPDOWN */}
                        </div>
                        {/* /REACTION ITEM */}

                        {/* REACTION ITEM */}
                        <div className="reaction-item">
                          {/* REACTION IMAGE */}
                          <img
                            className="reaction-image reaction-item-dropdown-trigger"
                            src={ReactionLike}
                            alt="reaction-like"
                          />
                          {/* /REACTION IMAGE */}

                          {/* SIMPLE DROPDOWN */}
                          <div className="simple-dropdown padded reaction-item-dropdown">
                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src={ReactionLike}
                                alt="reaction-like"
                              />
                              <span className="bold">Like</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Neko Bebop</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Nick Grissom</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              Sarah Diamond
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Jett Spiegel</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              Marcus Jhonson
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">Jane Rodgers</p>
                            {/* /SIMPLE DROPDOWN TEXT */}

                            {/* SIMPLE DROPDOWN TEXT */}
                            <p className="simple-dropdown-text">
                              <span className="bold">and 7 more...</span>
                            </p>
                            {/* /SIMPLE DROPDOWN TEXT */}
                          </div>
                          {/* /SIMPLE DROPDOWN */}
                        </div>
                        {/* /REACTION ITEM */}
                      </div>
                      {/* /REACTION ITEM LIST */}

                      {/* META LINE TEXT */}
                      <p className="meta-line-text">19</p>
                      {/* /META LINE TEXT */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LIST */}
                      <div className="meta-line-list user-avatar-list">
                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar13}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar12}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar11}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar03}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}

                        {/* USER AVATAR */}
                        <div className="user-avatar micro no-stats">
                          {/* USER AVATAR BORDER */}
                          <div className="user-avatar-border">
                            {/* HEXAGON */}
                            <div className="hexagon-22-24"></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BORDER */}

                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-18-20"
                              data-src={Avatar04}
                            ></div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}
                      </div>
                      {/* /META LINE LIST */}

                      {/* META LINE TEXT */}
                      <p className="meta-line-text">22 Participants</p>
                      {/* /META LINE TEXT */}
                    </div>
                    {/* /META LINE */}
                  </div>
                  {/* /CONTENT ACTION */}

                  {/* CONTENT ACTION */}
                  <div className="content-action">
                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE LINK */}
                      <p className="meta-line-link">5 Comments</p>
                      {/* /META LINE LINK */}
                    </div>
                    {/* /META LINE */}

                    {/* META LINE */}
                    <div className="meta-line">
                      {/* META LINE TEXT */}
                      <p className="meta-line-text">0 Shares</p>
                      {/* /META LINE TEXT */}
                    </div>
                    {/* /META LINE */}
                  </div>
                  {/* /CONTENT ACTION */}
                </div>
                {/* /CONTENT ACTIONS */}
              </div>
              {/* /WIDGET BOX STATUS CONTENT */}
            </div>
            {/* /WIDGET BOX STATUS */}

            {/* POST OPTIONS */}
            <div className="post-options">
              {/* POST OPTION WRAP */}
              <div className="post-option-wrap">
                {/* POST OPTION */}
                <div className="post-option reaction-options-dropdown-trigger">
                  {/* POST OPTION ICON */}
                  <svg className="post-option-icon icon-thumbs-up">
                    <use href="#svg-thumbs-up"></use>
                  </svg>
                  {/* /POST OPTION ICON */}

                  {/* POST OPTION TEXT */}
                  <p className="post-option-text">React!</p>
                  {/* /POST OPTION TEXT */}
                </div>
                {/* /POST OPTION */}

                {/* REACTION OPTIONS */}
                <div className="reaction-options reaction-options-dropdown">
                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Like"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionLike}
                      alt="reaction-like"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Love"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionLove}
                      alt="reaction-love"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Dislike"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionDislike}
                      alt="reaction-dislike"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Happy"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionHappy}
                      alt="reaction-happy"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Funny"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionFunny}
                      alt="reaction-funny"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Wow"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionWow}
                      alt="reaction-wow"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Angry"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionAngry}
                      alt="reaction-angry"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}

                  {/* REACTION OPTION */}
                  <div
                    className="reaction-option text-tooltip-tft"
                    data-title="Sad"
                  >
                    {/* REACTION OPTION IMAGE */}
                    <img
                      className="reaction-option-image"
                      src={ReactionSad}
                      alt="reaction-sad"
                    />
                    {/* /REACTION OPTION IMAGE */}
                  </div>
                  {/* /REACTION OPTION */}
                </div>
                {/* /REACTION OPTIONS */}
              </div>
              {/* /POST OPTION WRAP */}

              {/* POST OPTION */}
              <div className="post-option">
                {/* POST OPTION ICON */}
                <svg className="post-option-icon icon-comment">
                  <use href="#svg-comment"></use>
                </svg>
                {/* /POST OPTION ICON */}

                {/* POST OPTION TEXT */}
                <p className="post-option-text">Comment</p>
                {/* /POST OPTION TEXT */}
              </div>
              {/* /POST OPTION */}

              {/* POST OPTION */}
              <div className="post-option">
                {/* POST OPTION ICON */}
                <svg className="post-option-icon icon-share">
                  <use href="#svg-share"></use>
                </svg>
                {/* /POST OPTION ICON */}

                {/* POST OPTION TEXT */}
                <p className="post-option-text">Share</p>
                {/* /POST OPTION TEXT */}
              </div>
              {/* /POST OPTION */}
            </div>
            {/* /POST OPTIONS */}
          </div>
          {/* /WIDGET BOX */}

          {/* LOADER BARS */}
          <LoaderBars />
          {/* /LOADER BARS */}
        </div>
        {/* /WIDGET BOX */}

        {/* /GRID COLUMN 3*/}
        {/* GRID COLUMN */}
        <div className="grid-column">
          {/* WIDGET BOX */}
          <div className="widget-box no-padding">
            {/* WIDGET BOX SETTINGS */}
            <WidgetSettings settings={column3widgetSettings} />
            {/* /WIDGET BOX SETTINGS */}

            {/* WIDGET BOX TITLE */}
            <p className="widget-box-title">Stream Box</p>
            {/* /WIDGET BOX TITLE */}

            {/* WIDGET BOX CONTENT */}
            <div className="widget-box-content small-margin-top">
              {/* STREAM BOX */}
              <div className="stream-box no-video-radius">
                {/* STREAM BOX VIDEO */}
                <div className="stream-box-video">
                  <iframe
                    src="https://player.twitch.tv/?channel=cohhcarnage"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* /STREAM BOX VIDEO */}

                {/* STREAM BOX IMAGE */}
                <div className="stream-box-image">
                  <figure className="picture tiny circle liquid">
                    <img src={Social01} alt="avatar-01-social" />
                  </figure>
                </div>
                {/* /STREAM BOX IMAGE */}

                {/* STREAM BOX INFO */}
                <div className="stream-box-info">
                  {/* STREAM BOX TITLE */}
                  <p className="stream-box-title">
                    <a href="profile-stream.html">
                      I'm Playing Athena’s Goddess Story...
                    </a>
                  </p>
                  {/* /STREAM BOX TITLE */}

                  {/* STREAM BOX TEXT */}
                  <p className="stream-box-text">
                    <a href="https://www.twitch.tv/" target="_blank">
                      @GameHuntress
                    </a>
                  </p>
                  {/* /STREAM BOX TEXT */}
                </div>
                {/* /STREAM BOX INFO */}
              </div>
              {/* /STREAM BOX */}
            </div>
            {/* WIDGET BOX CONTENT */}
          </div>
          {/* /WIDGET BOX */}

          {/* WIDGET BOX */}
          <div className="widget-box">
            {/* WIDGET BOX SETTINGS */}
            <WidgetSettings settings={column3widgetSettings} />
            {/* /WIDGET BOX SETTINGS */}

            {/* WIDGET BOX TITLE */}
            <p className="widget-box-title">
              Photos <span className="highlighted">74</span>
            </p>
            {/* /WIDGET BOX TITLE */}

            {/* WIDGET BOX CONTENT */}
            <div className="widget-box-content">
              {/* PICTURE ITEM LIST */}
              <div className="picture-item-list small">
                {/* PICTURE ITEM */}
                <div className="picture-item">
                  {/* PICTURE */}
                  <figure className="picture round liquid">
                    <img src={Avatar01} alt="avatar-01" />
                  </figure>
                  {/* /PICTURE */}
                </div>
                {/* /PICTURE ITEM */}

                {/* PICTURE ITEM */}
                <div className="picture-item">
                  {/* PICTURE */}
                  <figure className="picture round liquid">
                    <img src={Cover10} alt="avatar-10" />
                  </figure>
                  {/* /PICTURE */}
                </div>
                {/* /PICTURE ITEM */}

                {/* PICTURE ITEM */}
                <div className="picture-item">
                  {/* PICTURE */}
                  <figure className="picture round liquid">
                    <img src={Cover12} alt="avatar-12" />
                  </figure>
                  {/* /PICTURE */}
                </div>
                {/* /PICTURE ITEM */}

                {/* PICTURE ITEM */}
                <div className="picture-item">
                  {/* PICTURE */}
                  <figure className="picture round liquid">
                    <img src={Cover02} alt="avatar-02" />
                  </figure>
                  {/* /PICTURE */}
                </div>
                {/* /PICTURE ITEM */}

                {/* PICTURE ITEM */}
                <div className="picture-item">
                  {/* PICTURE */}
                  <figure className="picture round liquid">
                    <img src={Cover06} alt="avatar-06" />
                  </figure>
                  {/* /PICTURE */}
                </div>
                {/* /PICTURE ITEM */}

                {/* PICTURE ITEM */}
                <div className="picture-item">
                  {/* PICTURE */}
                  <figure className="picture round liquid">
                    <img src={Cover13} alt="avatar-13" />
                  </figure>
                  {/* /PICTURE */}
                </div>
                {/* /PICTURE ITEM */}

                {/* PICTURE ITEM */}
                <div className="picture-item">
                  {/* PICTURE */}
                  <figure className="picture round liquid">
                    <img src={Cover04} alt="avatar-04" />
                  </figure>
                  {/* /PICTURE */}
                </div>
                {/* /PICTURE ITEM */}

                {/* PICTURE ITEM */}
                <div className="picture-item">
                  {/* PICTURE */}
                  <figure className="picture round liquid">
                    <img src={Cover15} alt="avatar-15" />
                  </figure>
                  {/* /PICTURE */}
                </div>
                {/* /PICTURE ITEM */}

                {/* PICTURE ITEM */}
                <div className="picture-item">
                  {/* PICTURE */}
                  <figure className="picture round liquid">
                    <img src={Cover11} alt="avatar-11" />
                  </figure>
                  {/* /PICTURE */}
                </div>
                {/* /PICTURE ITEM */}

                {/* PICTURE ITEM */}
                <div className="picture-item">
                  {/* PICTURE */}
                  <figure className="picture round liquid">
                    <img src={Cover08} alt="avatar-08" />
                  </figure>
                  {/* /PICTURE */}
                </div>
                {/* /PICTURE ITEM */}

                {/* PICTURE ITEM */}
                <div className="picture-item">
                  {/* PICTURE */}
                  <figure className="picture round liquid">
                    <img src={Cover16} alt="avatar-16" />
                  </figure>
                  {/* /PICTURE */}
                </div>
                {/* /PICTURE ITEM */}

                {/* PICTURE ITEM */}
                <a className="picture-item" href="profile-photos.html">
                  {/* PICTURE */}
                  <figure className="picture round liquid">
                    <img src={Cover17} alt="avatar-17" />
                  </figure>
                  {/* /PICTURE */}

                  {/* PICTURE ITEM OVERLAY */}
                  <div className="picture-item-overlay round">
                    {/* PICTURE ITEM OVERLAY TEXT */}
                    <p className="picture-item-overlay-text">+61</p>
                    {/* /PICTURE ITEM OVERLAY TEXT */}
                  </div>
                  {/* /PICTURE ITEM OVERLAY */}
                </a>
                {/* /PICTURE ITEM */}
              </div>
              {/* /PICTURE ITEM LIST */}
            </div>
            {/* /WIDGET BOX CONTENT */}
          </div>
          {/* /WIDGET BOX */}

          {/* WIDGET BOX */}
          <div className="widget-box">
            {/* WIDGET BOX SETTINGS */}
            <WidgetSettings settings={column3widgetSettings} />
            {/* /WIDGET BOX SETTINGS */}

            {/* WIDGET BOX TITLE */}
            <p className="widget-box-title">Twitter Feed</p>
            {/* /WIDGET BOX TITLE */}

            {/* WIDGET BOX CONTENT */}
            <div className="widget-box-content">
              {/* TWEET FEED */}
              <div className="tweet-feed"></div>
              {/* /TWEET FEED */}
            </div>
            {/* /WIDGET BOX CONTENT */}
          </div>
          {/* /WIDGET BOX */}

          {/* WIDGET BOX */}
          <div className="widget-box">
            {/* WIDGET BOX SETTINGS */}
            <WidgetSettings settings={column3widgetSettings} />
            {/* /WIDGET BOX SETTINGS */}

            {/* WIDGET BOX TITLE */}
            <p className="widget-box-title">
              Groups <span className="highlighted">7</span>
            </p>
            {/* /WIDGET BOX TITLE */}

            {/* WIDGET BOX CONTENT */}
            <div className="widget-box-content">
              {/* FILTERS */}
              <div className="filters">
                {/* FILTER */}
                <p className="filter">Newest</p>
                {/* /FILTER */}

                {/* FILTER */}
                <p className="filter active">Popular</p>
                {/* /FILTER */}

                {/* FILTER */}
                <p className="filter">Active</p>
                {/* /FILTER */}
              </div>
              {/* /FILTERS */}

              {/* USER STATUS LIST */}
              <div className="user-status-list">
                {/* USER STATUS */}
                <div className="user-status request-small">
                  {/* USER STATUS AVATAR */}
                  <a className="user-status-avatar" href="group-timeline.html">
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-border">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-40-44"
                          data-src={Avatar29}
                        ></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}

                  {/* USER STATUS TITLE */}
                  <p className="user-status-title">
                    <a className="bold" href="group-timeline.html">
                      Twitch Streamers
                    </a>
                  </p>
                  {/* /USER STATUS TITLE */}

                  {/* USER STATUS TEXT */}
                  <p className="user-status-text small">265 members</p>
                  {/* /USER STATUS TEXT */}

                  {/* ACTION REQUEST LIST */}
                  <div className="action-request-list">
                    {/* ACTION REQUEST */}
                    <div className="action-request accept">
                      {/* ACTION REQUEST ICON */}
                      <svg className="action-request-icon icon-join-group">
                        <use href="#svg-join-group"></use>
                      </svg>
                      {/* /ACTION REQUEST ICON */}
                    </div>
                    {/* /ACTION REQUEST */}
                  </div>
                  {/* ACTION REQUEST LIST */}
                </div>
                {/* /USER STATUS */}

                {/* USER STATUS */}
                <div className="user-status request-small">
                  {/* USER STATUS AVATAR */}
                  <a className="user-status-avatar" href="group-timeline.html">
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-border">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-40-44"
                          data-src={Avatar24}
                        ></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}

                  {/* USER STATUS TITLE */}
                  <p className="user-status-title">
                    <a className="bold" href="group-timeline.html">
                      Cosplayers of the World
                    </a>
                  </p>
                  {/* /USER STATUS TITLE */}

                  {/* USER STATUS TEXT */}
                  <p className="user-status-text small">139 members</p>
                  {/* /USER STATUS TEXT */}

                  {/* ACTION REQUEST LIST */}
                  <div className="action-request-list">
                    {/* ACTION REQUEST */}
                    <div className="action-request accept">
                      {/* ACTION REQUEST ICON */}
                      <svg className="action-request-icon icon-join-group">
                        <use href="#svg-join-group"></use>
                      </svg>
                      {/* /ACTION REQUEST ICON */}
                    </div>
                    {/* /ACTION REQUEST */}
                  </div>
                  {/* ACTION REQUEST LIST */}
                </div>
                {/* /USER STATUS */}

                {/* USER STATUS */}
                <div className="user-status request-small">
                  {/* USER STATUS AVATAR */}
                  <a className="user-status-avatar" href="group-timeline.html">
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-border">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-40-44"
                          data-src={Avatar25}
                        ></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}

                  {/* USER STATUS TITLE */}
                  <p className="user-status-title">
                    <a className="bold" href="group-timeline.html">
                      Stream Designers
                    </a>
                  </p>
                  {/* /USER STATUS TITLE */}

                  {/* USER STATUS TEXT */}
                  <p className="user-status-text small">466 members</p>
                  {/* /USER STATUS TEXT */}

                  {/* ACTION REQUEST LIST */}
                  <div className="action-request-list">
                    {/* ACTION REQUEST */}
                    <div className="action-request accept">
                      {/* ACTION REQUEST ICON */}
                      <svg className="action-request-icon icon-join-group">
                        <use href="#svg-join-group"></use>
                      </svg>
                      {/* /ACTION REQUEST ICON */}
                    </div>
                    {/* /ACTION REQUEST */}
                  </div>
                  {/* ACTION REQUEST LIST */}
                </div>
                {/* /USER STATUS */}

                {/* USER STATUS */}
                <div className="user-status request-small">
                  {/* USER STATUS AVATAR */}
                  <a className="user-status-avatar" href="group-timeline.html">
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-border">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-40-44"
                          data-src={Avatar28}
                        ></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}

                  {/* USER STATUS TITLE */}
                  <p className="user-status-title">
                    <a className="bold" href="group-timeline.html">
                      Street Artists
                    </a>
                  </p>
                  {/* /USER STATUS TITLE */}

                  {/* USER STATUS TEXT */}
                  <p className="user-status-text small">951 members</p>
                  {/* /USER STATUS TEXT */}

                  {/* ACTION REQUEST LIST */}
                  <div className="action-request-list">
                    {/* ACTION REQUEST */}
                    <div className="action-request decline">
                      {/* ACTION REQUEST ICON */}
                      <svg className="action-request-icon icon-leave-group">
                        <use href="#svg-leave-group"></use>
                      </svg>
                      {/* /ACTION REQUEST ICON */}
                    </div>
                    {/* /ACTION REQUEST */}
                  </div>
                  {/* ACTION REQUEST LIST */}
                </div>
                {/* /USER STATUS */}

                {/* USER STATUS */}
                <div className="user-status request-small">
                  {/* USER STATUS AVATAR */}
                  <a className="user-status-avatar" href="group-timeline.html">
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-border">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-40-44"
                          data-src={Avatar27}
                        ></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}

                  {/* USER STATUS TITLE */}
                  <p className="user-status-title">
                    <a className="bold" href="group-timeline.html">
                      Gaming Watchtower
                    </a>
                  </p>
                  {/* /USER STATUS TITLE */}

                  {/* USER STATUS TEXT */}
                  <p className="user-status-text small">2.365 members</p>
                  {/* /USER STATUS TEXT */}

                  {/* ACTION REQUEST LIST */}
                  <div className="action-request-list">
                    {/* ACTION REQUEST */}
                    <div className="action-request accept">
                      {/* ACTION REQUEST ICON */}
                      <svg className="action-request-icon icon-join-group">
                        <use href="#svg-join-group"></use>
                      </svg>
                      {/* /ACTION REQUEST ICON */}
                    </div>
                    {/* /ACTION REQUEST */}
                  </div>
                  {/* ACTION REQUEST LIST */}
                </div>
                {/* /USER STATUS */}
              </div>
              {/* /USER STATUS LIST */}
            </div>
            {/* WIDGET BOX CONTENT */}
          </div>
          {/* /WIDGET BOX */}

          {/* WIDGET BOX */}
          <div className="widget-box">
            {/* WIDGET BOX SETTINGS */}
            <WidgetSettings settings={column3widgetSettings} />
            {/* /WIDGET BOX SETTINGS */}

            {/* WIDGET BOX TITLE */}
            <p className="widget-box-title">Latest Item</p>
            {/* /WIDGET BOX TITLE */}

            {/* WIDGET BOX CONTENT */}
            <div className="widget-box-content">
              {/* PRODUCT PREVIEW */}
              <div className="product-preview small">
                {/* PRODUCT PREVIEW IMAGE */}
                <a href="marketplace-product.html">
                  <figure className="product-preview-image liquid">
                    <img src={MarketplaceItems01} alt="item-01" />
                  </figure>
                </a>
                {/* /PRODUCT PREVIEW IMAGE */}

                {/* PRODUCT PREVIEW INFO */}
                <div className="product-preview-info">
                  {/* TEXT STICKER */}
                  <p className="text-sticker">
                    <span className="highlighted">$</span> 12.00
                  </p>
                  {/* /TEXT STICKER */}

                  {/* PRODUCT PREVIEW TITLE */}
                  <p className="product-preview-title">
                    <a href="marketplace-product.html">Twitch Stream UI Pack</a>
                  </p>
                  {/* /PRODUCT PREVIEW TITLE */}

                  {/* PRODUCT PREVIEW CATEGORY */}
                  <p className="product-preview-category digital">
                    <a href="marketplace-category.html">Stream Packs</a>
                  </p>
                  {/* /PRODUCT PREVIEW CATEGORY */}
                </div>
                {/* /PRODUCT PREVIEW INFO */}
              </div>
              {/* /PRODUCT PREVIEW */}
            </div>
            {/* /WIDGET BOX CONTENT */}
          </div>
          {/* /WIDGET BOX */}
        </div>
        {/* /GRID COLUMN */}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  data: state.data,
  ui: state.ui,
});
Grid.propTypes = {
  data: PropTypes.object,
  ui: PropTypes.object,
};
export default connect(mapStateToProps)(Grid);
