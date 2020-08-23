import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchData } from '../../redux/actions';
import { connect } from 'react-redux';

type dataProps = {
  coverPhoto: string;
  description: {
    title: string;
    text: string;
    badgeText: number;
    avatar: any;
  };
  badges: {
    src: string;
    alt: string;
    href?: string;
    num?: string;
  }[];
  stats: {
    stat: string;
    count: any;
  }[];
};
type propsProps = {
  data: dataProps;
  ui: any;
  fetchData: () => void;
};
type stateProps = {
  data: dataProps;
  ui: boolean;
};

const menuItems = [
  {
    link: 'newsfeed.html',
    icon: (
      <svg className="menu-item-link-icon icon-newsfeed">
        <use href="#svg-newsfeed"></use>
      </svg>
    ),
    text: 'Newsfeed',
  },
  {
    link: 'overview.html',
    icon: (
      <svg className="menu-item-link-icon icon-overview">
        <use href="#svg-overview"></use>
      </svg>
    ),
    text: 'Overview',
  },
  {
    link: 'groups.html',
    icon: (
      <svg className="menu-item-link-icon icon-group">
        <use href="#svg-group"></use>
      </svg>
    ),
    text: 'Groups',
  },
  {
    link: 'members.html',
    icon: (
      <svg className="menu-item-link-icon icon-members">
        <use href="#svg-members"></use>
      </svg>
    ),
    text: 'Members',
  },
  {
    link: 'badges.html',
    icon: (
      <svg className="menu-item-link-icon icon-badges">
        <use href="#svg-badges"></use>
      </svg>
    ),
    text: 'Badges',
  },
  {
    link: 'quests.html',
    icon: (
      <svg className="menu-item-link-icon icon-quests">
        <use href="#svg-quests"></use>
      </svg>
    ),
    text: 'Quests',
  },
  {
    link: 'streams.html',
    icon: (
      <svg className="menu-item-link-icon icon-streams">
        <use href="#svg-streams"></use>
      </svg>
    ),
    text: 'Streams',
  },
  {
    link: 'events.html',
    icon: (
      <svg className="menu-item-link-icon icon-events">
        <use href="#svg-events"></use>
      </svg>
    ),
    text: 'Events',
  },
  {
    link: 'forums.html',
    icon: (
      <svg className="menu-item-link-icon icon-forums">
        <use href="#svg-forums"></use>
      </svg>
    ),
    text: 'Forums',
  },
  {
    link: 'marketplace.html',
    icon: (
      <svg className="menu-item-link-icon icon-marketplace">
        <use href="#svg-marketplace"></use>
      </svg>
    ),
    text: 'Marketplace',
  },
];

const LeftSidePanel = (props: propsProps) => {
  const { data, ui } = props;
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <nav
      id="navigation-widget"
      className="navigation-widget navigation-widget-desktop sidebar left hidden"
      data-simplebar
    >
      {/* NAVIGATION WIDGET COVER */}
      <figure className="navigation-widget-cover liquid">
        {data.coverPhoto && <img src={data.coverPhoto} alt="cover-01" />}
      </figure>
      {/* /NAVIGATION WIDGET COVER */}

      {/* USER SHORT DESCRIPTION */}
      <div className="user-short-description">
        {/* USER SHORT DESCRIPTION AVATAR */}
        <a
          className="user-short-description-avatar user-avatar medium"
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
            <div
              className="hexagon-image-82-90"
              data-src={
                data.description &&
                data.description.avatar &&
                data.description.avatar
              }
            ></div>
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
            <p className="user-avatar-badge-text">
              {data.description &&
                data.description.badgeText &&
                data.description.badgeText}
            </p>
            {/* /USER AVATAR BADGE TEXT */}
          </div>
          {/* /USER AVATAR BADGE */}
        </a>
        {/* /USER SHORT DESCRIPTION AVATAR */}

        {/* USER SHORT DESCRIPTION TITLE */}
        <p className="user-short-description-title">
          <a href="profile-timeline.html">
            {data.description &&
              data.description.title &&
              data.description.title}
          </a>
        </p>
        {/* /USER SHORT DESCRIPTION TITLE */}

        {/* USER SHORT DESCRIPTION TEXT */}
        <p className="user-short-description-text">
          <a href="#">
            {data.description && data.description.text && data.description.text}
          </a>
        </p>
        {/* /USER SHORT DESCRIPTION TEXT */}
      </div>
      {/* /USER SHORT DESCRIPTION */}

      {/* BADGE LIST */}
      <div className="badge-list small">
        {/* BADGE ITEM */}
        {data.badges &&
          data.badges.map((badge, i) =>
            !badge.href ? (
              <div className="badge-item">
                <img src={badge.src} alt={badge.alt} key={i} />
              </div>
            ) : (
              <a className="badge-item" href={badge.href}>
                <img src={badge.src} alt={badge.alt} />
                {/* BADGE ITEM TEXT */}
                <p className="badge-item-text">{badge.num}</p>
                {/* /BADGE ITEM TEXT */}
              </a>
            )
          )}
        {/* /BADGE ITEM */}
      </div>
      {/* /BADGE LIST */}

      {/* USER STATS */}
      <div className="user-stats">
        {/* USER STAT */}
        {data.stats &&
          data.stats.map((stat, i) => (
            <div className="user-stat">
              {/* USER STAT TITLE */}
              <p className="user-stat-title" key={i}>
                {stat.count}
              </p>
              {/* /USER STAT TITLE */}
              {/* USER STAT TEXT */}
              <p className="user-stat-text" key={i}>
                {stat.stat}
              </p>
              {/* /USER STAT TEXT */}
            </div>
          ))}
        {/* USER STAT */}
      </div>
      {/* /USER STATS */}

      {/* MENU */}
      <ul className="menu">
        {/* MENU ITEM */}
        {menuItems.map((item, i) => (
          <li className="menu-item" key={i}>
            {/* MENU ITEM LINK */}
            <a className="menu-item-link" href={item.link}>
              {/* MENU ITEM LINK ICON */}
              {item.icon}
              {/* /MENU ITEM LINK ICON */}
              {item.text}
            </a>
            {/* /MENU ITEM LINK */}
          </li>
        ))}
        {/* /MENU ITEM */}
      </ul>
      {/* /MENU */}
    </nav>
  );
};
const mapStateToProps = (state: stateProps) => ({
  data: state.data,
  ui: state.ui,
});

export default connect(mapStateToProps, { fetchData })(LeftSidePanel);
