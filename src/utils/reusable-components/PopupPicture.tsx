import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Avatar01,
  ReactionLove,
  ReactionWow,
  ReactionLike,
  Cover04,
  ReactionDislike,
  ReactionHappy,
  ReactionFunny,
  ReactionAngry,
  ReactionSad,
  Avatar05,
  Avatar03,
  Avatar02,
  Avatar07,
} from '../../api/data/images';

type data = any;
type ui = any;
type stateProps = {
  data: data;
  ui: ui;
};

const PopupPicture = (props: stateProps) => {
  const { data, ui } = props;
  return (
    <>
      {/* POPUP PICTURE */}
      <div className="popup-picture">
        {/* POPUP CLOSE BUTTON */}
        <div className="popup-close-button popup-picture-trigger">
          {/* POPUP CLOSE BUTTON ICON */}
          <svg className="popup-close-button-icon icon-cross">
            <use href="#svg-cross"></use>
          </svg>
          {/* /POPUP CLOSE BUTTON ICON */}
        </div>
        {/* /POPUP CLOSE BUTTON */}

        {/* WIDGET BOX */}
        <div className="widget-box no-padding">
          {/* WIDGET BOX SCROLLABLE */}
          <div className="widget-box-scrollable" data-simplebar>
            {/* WIDGET BOX SETTINGS */}
            <div className="widget-box-settings">
              {/* POST SETTINGS WRAP */}
              <div className="post-settings-wrap">
                {/* POST SETTINGS */}
                <div className="post-settings widget-box-post-settings-dropdown-trigger">
                  {/* POST SETTINGS ICON */}
                  <svg className="post-settings-icon icon-more-dots">
                    <use href="#svg-more-dots"></use>
                  </svg>
                  {/* /POST SETTINGS ICON */}
                </div>
                {/* /POST SETTINGS */}

                {/* SIMPLE DROPDOWN */}
                <div className="simple-dropdown widget-box-post-settings-dropdown">
                  {/* SIMPLE DROPDOWN LINK */}
                  <p className="simple-dropdown-link">Edit Post</p>
                  {/* /SIMPLE DROPDOWN LINK */}

                  {/* SIMPLE DROPDOWN LINK */}
                  <p className="simple-dropdown-link">Delete Post</p>
                  {/* /SIMPLE DROPDOWN LINK */}

                  {/* SIMPLE DROPDOWN LINK */}
                  <p className="simple-dropdown-link">Make it Featured</p>
                  {/* /SIMPLE DROPDOWN LINK */}

                  {/* SIMPLE DROPDOWN LINK */}
                  <p className="simple-dropdown-link">Report Post</p>
                  {/* /SIMPLE DROPDOWN LINK */}

                  {/* SIMPLE DROPDOWN LINK */}
                  <p className="simple-dropdown-link">Report Author</p>
                  {/* /SIMPLE DROPDOWN LINK */}
                </div>
                {/* /SIMPLE DROPDOWN */}
              </div>
              {/* /POST SETTINGS WRAP */}
            </div>
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
                              />{' '}
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
                              />{' '}
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
                              />{' '}
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
                <div className="post-option no-text reaction-options-dropdown-trigger">
                  {/* POST OPTION ICON */}
                  <svg className="post-option-icon icon-thumbs-up">
                    <use href="#svg-thumbs-up"></use>
                  </svg>
                  {/* /POST OPTION ICON */}
                </div>
                {/* /POST OPTION */}

                {/* REACTION OPTIONS */}
                <div className="reaction-options small reaction-options-dropdown">
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
              <div className="post-option no-text active">
                {/* POST OPTION ICON */}
                <svg className="post-option-icon icon-comment">
                  <use href="#svg-comment"></use>
                </svg>
                {/* /POST OPTION ICON */}
              </div>
              {/* /POST OPTION */}

              {/* POST OPTION */}
              <div className="post-option no-text">
                {/* POST OPTION ICON */}
                <svg className="post-option-icon icon-share">
                  <use href="#svg-share"></use>
                </svg>
                {/* /POST OPTION ICON */}
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
                              />{' '}
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
                              />{' '}
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
                      <p className="meta-line-timestamp">15 min ago</p>
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
                              />{' '}
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
                      <p className="meta-line-timestamp">2 min ago</p>
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
                  YEAHHH!! <a href="profile-timeline.html">@MarinaValentine</a>{' '}
                  I really enjoyed your last stream and it also was really
                  funny! Can't wait!
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
                      <p className="meta-line-timestamp">27 min ago</p>
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
                      <p className="meta-line-timestamp">39 min ago</p>
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
            </div>
            {/* /POST COMMENT LIST */}
          </div>
          {/* /WIDGET BOX SCROLLABLE */}

          {/* POST COMMENT FORM */}
          <div className="post-comment-form bordered-top">
            {/* USER AVATAR */}
            <div className="user-avatar small no-outline">
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
                    <label htmlFor="popup-post-reply">Your Reply</label>
                    <input
                      type="text"
                      id="popup-post-reply"
                      name="popup_post_reply"
                    />
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
        {/* /WIDGET BOX */}

        {/* POPUP PICTURE IMAGE WRAP */}
        <div className="popup-picture-image-wrap">
          {/* POPUP PICTURE IMAGE */}
          <figure className="popup-picture-image">
            <img src={Cover04} alt="cover-04" />
          </figure>
          {/* /POPUP PICTURE IMAGE */}
        </div>
        {/* /POPUP PICTURE IMAGE WRAP */}
      </div>
      {/* /POPUP PICTURE */}
    </>
  );
};
const mapStateToProps = (state: stateProps) => ({
  data: state.data,
  ui: state.ui,
});
export default connect(mapStateToProps)(PopupPicture);
