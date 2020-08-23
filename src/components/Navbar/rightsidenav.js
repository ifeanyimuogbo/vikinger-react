import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Avatar02,
  Avatar03,
  Avatar04,
  Avatar05,
  Avatar07,
  Avatar08,
  Avatar09,
  Avatar10,
  Avatar12,
  Avatar14,
  Avatar20,
} from '../../api/data/images';

const RightSideNav = (props) => {
  // CHAT NAV
  return (
    <aside
      id="chat-widget-messages"
      className="chat-widget closed sidebar right"
    >
      {/* CHAT WIDGET MESSAGES */}
      <div className="chat-widget-messages" data-simplebar>
        {/* CHAT WIDGET MESSAGE */}
        <div className="chat-widget-message">
          {/* USER STATUS */}
          <div className="user-status">
            {/* USER STATUS AVATAR */}
            <div className="user-status-avatar">
              {/* USER AVATAR */}
              <div className="user-avatar small no-outline online">
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
            </div>
            {/* /USER STATUS AVATAR */}

            {/* USER STATUS TITLE */}
            <p className="user-status-title">
              <span className="bold">Nick Grissom</span>
            </p>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">
              Can you stream the new game?
            </p>
            {/* /USER STATUS TEXT */}

            {/* USER STATUS TIMESTAMP */}
            <p className="user-status-timestamp floaty">2hrs</p>
            {/* /USER STATUS TIMESTAMP */}
          </div>
          {/* /USER STATUS */}
        </div>
        {/* /CHAT WIDGET MESSAGE */}

        {/* CHAT WIDGET MESSAGE */}
        <div className="chat-widget-message">
          {/* USER STATUS */}
          <div className="user-status">
            {/* USER STATUS AVATAR */}
            <div className="user-status-avatar">
              {/* USER AVATAR */}
              <div className="user-avatar small no-outline online">
                {/* USER AVATAR CONTENT */}
                <div className="user-avatar-content">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-image-30-32"
                    data-src={Avatar20}
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
                  <p className="user-avatar-badge-text">9</p>
                  {/* /USER AVATAR BADGE TEXT */}
                </div>
                {/* /USER AVATAR BADGE */}
              </div>
              {/* /USER AVATAR */}
            </div>
            {/* /USER STATUS AVATAR */}

            {/* USER STATUS TITLE */}
            <p className="user-status-title">
              <span className="bold">Matt Parker</span>
            </p>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">
              Can you stream the new game?
            </p>
            {/* /USER STATUS TEXT */}

            {/* USER STATUS TIMESTAMP */}
            <p className="user-status-timestamp floaty">2hrs</p>
            {/* /USER STATUS TIMESTAMP */}
          </div>
          {/* /USER STATUS */}
        </div>
        {/* /CHAT WIDGET MESSAGE */}

        {/* CHAT WIDGET MESSAGE */}
        <div className="chat-widget-message">
          {/* USER STATUS */}
          <div className="user-status">
            {/* USER STATUS AVATAR */}
            <div className="user-status-avatar">
              {/* USER AVATAR */}
              <div className="user-avatar small no-outline away">
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
            </div>
            {/* /USER STATUS AVATAR */}

            {/* USER STATUS TITLE */}
            <p className="user-status-title">
              <span className="bold">Neko Bebop</span>
            </p>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">
              Awesome! I'll see you there!
            </p>
            {/* /USER STATUS TEXT */}

            {/* USER STATUS TIMESTAMP */}
            <p className="user-status-timestamp floaty">54mins</p>
            {/* /USER STATUS TIMESTAMP */}
          </div>
          {/* /USER STATUS */}
        </div>
        {/* /CHAT WIDGET MESSAGE */}

        {/* CHAT WIDGET MESSAGE */}
        <div className="chat-widget-message">
          {/* USER STATUS */}
          <div className="user-status">
            {/* USER STATUS AVATAR */}
            <div className="user-status-avatar">
              {/* USER AVATAR */}
              <div className="user-avatar small no-outline offline">
                {/* USER AVATAR CONTENT */}
                <div className="user-avatar-content">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-image-30-32"
                    data-src={Avatar04}
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
                  <p className="user-avatar-badge-text">6</p>
                  {/* /USER AVATAR BADGE TEXT */}
                </div>
                {/* /USER AVATAR BADGE */}
              </div>
              {/* /USER AVATAR */}
            </div>
            {/* /USER STATUS AVATAR */}

            {/* USER STATUS TITLE */}
            <p className="user-status-title">
              <span className="bold">Bearded Wonder</span>
            </p>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">
              Great! Then we'll meet with them at...
            </p>
            {/* /USER STATUS TEXT */}

            {/* USER STATUS TIMESTAMP */}
            <p className="user-status-timestamp floaty">2hrs</p>
            {/* /USER STATUS TIMESTAMP */}
          </div>
          {/* /USER STATUS */}
        </div>
        {/* /CHAT WIDGET MESSAGE */}

        {/* CHAT WIDGET MESSAGE */}
        <div className="chat-widget-message">
          {/* USER STATUS */}
          <div className="user-status">
            {/* USER STATUS AVATAR */}
            <div className="user-status-avatar">
              {/* USER AVATAR */}
              <div className="user-avatar small no-outline online">
                {/* USER AVATAR CONTENT */}
                <div className="user-avatar-content">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-image-30-32"
                    data-src={Avatar09}
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
                  <p className="user-avatar-badge-text">27</p>
                  {/* /USER AVATAR BADGE TEXT */}
                </div>
                {/* /USER AVATAR BADGE */}
              </div>
              {/* /USER AVATAR */}
            </div>
            {/* /USER STATUS AVATAR */}

            {/* USER STATUS TITLE */}
            <p className="user-status-title">
              <span className="bold">Sandra Strange</span>
            </p>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">
              Can you stream the new game?
            </p>
            {/* /USER STATUS TEXT */}

            {/* USER STATUS TIMESTAMP */}
            <p className="user-status-timestamp floaty">2hrs</p>
            {/* /USER STATUS TIMESTAMP */}
          </div>
          {/* /USER STATUS */}
        </div>
        {/* /CHAT WIDGET MESSAGE */}

        {/* CHAT WIDGET MESSAGE */}
        <div className="chat-widget-message">
          {/* USER STATUS */}
          <div className="user-status">
            {/* USER STATUS AVATAR */}
            <div className="user-status-avatar">
              {/* USER AVATAR */}
              <div className="user-avatar small no-outline online">
                {/* USER AVATAR CONTENT */}
                <div className="user-avatar-content">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-image-30-32"
                    data-src={Avatar12}
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
                  <p className="user-avatar-badge-text">10</p>
                  {/* /USER AVATAR BADGE TEXT */}
                </div>
                {/* /USER AVATAR BADGE */}
              </div>
              {/* /USER AVATAR */}
            </div>
            {/* /USER STATUS AVATAR */}

            {/* USER STATUS TITLE */}
            <p className="user-status-title">
              <span className="bold">James Murdock</span>
            </p>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">
              Great! Then we'll meet with them at...
            </p>
            {/* /USER STATUS TEXT */}

            {/* USER STATUS TIMESTAMP */}
            <p className="user-status-timestamp floaty">7hrs</p>
            {/* /USER STATUS TIMESTAMP */}
          </div>
          {/* /USER STATUS */}
        </div>
        {/* /CHAT WIDGET MESSAGE */}

        {/* CHAT WIDGET MESSAGE */}
        <div className="chat-widget-message">
          {/* USER STATUS */}
          <div className="user-status">
            {/* USER STATUS AVATAR */}
            <div className="user-status-avatar">
              {/* USER AVATAR */}
              <div className="user-avatar small no-outline away">
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
            </div>
            {/* /USER STATUS AVATAR */}

            {/* USER STATUS TITLE */}
            <p className="user-status-title">
              <span className="bold">The Green Goo</span>
            </p>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">
              Can you stream the new game?
            </p>
            {/* /USER STATUS TEXT */}

            {/* USER STATUS TIMESTAMP */}
            <p className="user-status-timestamp floaty">2hrs</p>
            {/* /USER STATUS TIMESTAMP */}
          </div>
          {/* /USER STATUS */}
        </div>
        {/* /CHAT WIDGET MESSAGE */}

        {/* CHAT WIDGET MESSAGE */}
        <div className="chat-widget-message">
          {/* USER STATUS */}
          <div className="user-status">
            {/* USER STATUS AVATAR */}
            <div className="user-status-avatar">
              {/* USER AVATAR */}
              <div className="user-avatar small no-outline online">
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
            </div>
            {/* /USER STATUS AVATAR */}

            {/* USER STATUS TITLE */}
            <p className="user-status-title">
              <span className="bold">Sarah Diamond</span>
            </p>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">
              I'm sending you the latest news of...
            </p>
            {/* /USER STATUS TEXT */}

            {/* USER STATUS TIMESTAMP */}
            <p className="user-status-timestamp floaty">16hrs</p>
            {/* /USER STATUS TIMESTAMP */}
          </div>
          {/* /USER STATUS */}
        </div>
        {/* /CHAT WIDGET MESSAGE */}

        {/* CHAT WIDGET MESSAGE */}
        <div className="chat-widget-message">
          {/* USER STATUS */}
          <div className="user-status">
            {/* USER STATUS AVATAR */}
            <div className="user-status-avatar">
              {/* USER AVATAR */}
              <div className="user-avatar small no-outline offline">
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
            </div>
            {/* /USER STATUS AVATAR */}

            {/* USER STATUS TITLE */}
            <p className="user-status-title">
              <span className="bold">Destroy Dex</span>
            </p>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">
              Can you stream the new game?
            </p>
            {/* /USER STATUS TEXT */}

            {/* USER STATUS TIMESTAMP */}
            <p className="user-status-timestamp floaty">2hrs</p>
            {/* /USER STATUS TIMESTAMP */}
          </div>
          {/* /USER STATUS */}
        </div>
        {/* /CHAT WIDGET MESSAGE */}

        {/* CHAT WIDGET MESSAGE */}
        <div className="chat-widget-message">
          {/* USER STATUS */}
          <div className="user-status">
            {/* USER STATUS AVATAR */}
            <div className="user-status-avatar">
              {/* USER AVATAR */}
              <div className="user-avatar small no-outline online">
                {/* USER AVATAR CONTENT */}
                <div className="user-avatar-content">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-image-30-32"
                    data-src={Avatar08}
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
                  <p className="user-avatar-badge-text">4</p>
                  {/* /USER AVATAR BADGE TEXT */}
                </div>
                {/* /USER AVATAR BADGE */}
              </div>
              {/* /USER AVATAR */}
            </div>
            {/* /USER STATUS AVATAR */}

            {/* USER STATUS TITLE */}
            <p className="user-status-title">
              <span className="bold">Damian Greyson</span>
            </p>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">
              Can you stream the new game?
            </p>
            {/* /USER STATUS TEXT */}

            {/* USER STATUS TIMESTAMP */}
            <p className="user-status-timestamp floaty">2hrs</p>
            {/* /USER STATUS TIMESTAMP */}
          </div>
          {/* /USER STATUS */}
        </div>
        {/* /CHAT WIDGET MESSAGE */}

        {/* CHAT WIDGET MESSAGE */}
        <div className="chat-widget-message">
          {/* USER STATUS */}
          <div className="user-status">
            {/* USER STATUS AVATAR */}
            <div className="user-status-avatar">
              {/* USER AVATAR */}
              <div className="user-avatar small no-outline online">
                {/* USER AVATAR CONTENT */}
                <div className="user-avatar-content">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-image-30-32"
                    data-src={Avatar14}
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
                  <p className="user-avatar-badge-text">3</p>
                  {/* /USER AVATAR BADGE TEXT */}
                </div>
                {/* /USER AVATAR BADGE */}
              </div>
              {/* /USER AVATAR */}
            </div>
            {/* /USER STATUS AVATAR */}

            {/* USER STATUS TITLE */}
            <p className="user-status-title">
              <span className="bold">Paul Lang</span>
            </p>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">
              Can you stream the new game?
            </p>
            {/* /USER STATUS TEXT */}

            {/* USER STATUS TIMESTAMP */}
            <p className="user-status-timestamp floaty">2hrs</p>
            {/* /USER STATUS TIMESTAMP */}
          </div>
          {/* /USER STATUS */}
        </div>
        {/* /CHAT WIDGET MESSAGE */}
      </div>
      {/* /CHAT WIDGET MESSAGES */}

      {/* CHAT WIDGET FORM */}
      <form className="chat-widget-form">
        {/* INTERACTIVE INPUT */}
        <div className="interactive-input small">
          <input
            type="text"
            id="chat-widget-search"
            name="chat_widget_search"
            placeholder="Search Messages..."
          />
          {/* INTERACTIVE INPUT ICON WRAP */}
          <div className="interactive-input-icon-wrap">
            {/* INTERACTIVE INPUT ICON */}
            <svg className="interactive-input-icon icon-magnifying-glass">
              <use href="#svg-magnifying-glass"></use>
            </svg>
            {/* /INTERACTIVE INPUT ICON */}
          </div>
          {/* /INTERACTIVE INPUT ICON WRAP */}

          {/* INTERACTIVE INPUT ACTION */}
          <div className="interactive-input-action">
            {/* INTERACTIVE INPUT ACTION ICON */}
            <svg className="interactive-input-action-icon icon-cross-thin">
              <use href="#svg-cross-thin"></use>
            </svg>
            {/* /INTERACTIVE INPUT ACTION ICON */}
          </div>
          {/* /INTERACTIVE INPUT ACTION */}
        </div>
        {/* /INTERACTIVE INPUT */}
      </form>
      {/* /CHAT WIDGET FORM */}

      {/* CHAT WIDGET BUTTON */}
      <div className="chat-widget-button">
        {/* CHAT WIDGET BUTTON ICON */}
        <div className="chat-widget-button-icon">
          {/* BURGER ICON */}
          <div className="burger-icon">
            {/* BURGER ICON BAR */}
            <div className="burger-icon-bar"></div>
            {/* /BURGER ICON BAR */}

            {/* BURGER ICON BAR */}
            <div className="burger-icon-bar"></div>
            {/* /BURGER ICON BAR */}

            {/* BURGER ICON BAR */}
            <div className="burger-icon-bar"></div>
            {/* /BURGER ICON BAR */}
          </div>
          {/* /BURGER ICON */}
        </div>
        {/* /CHAT WIDGET BUTTON ICON */}

        {/* CHAT WIDGET BUTTON TEXT */}
        <p className="chat-widget-button-text">Messages / Chat</p>
        {/* /CHAT WIDGET BUTTON TEXT */}
      </div>
      {/* /CHAT WIDGET BUTTON */}
    </aside>
  );
};
const mapStateToProps = (state) => ({
  data: state.data,
  ui: state.ui,
});
RightSideNav.propTypes = {
  data: PropTypes.object,
  ui: PropTypes.object,
};
export default connect(mapStateToProps)(RightSideNav);
