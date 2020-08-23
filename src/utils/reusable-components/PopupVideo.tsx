import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

type data = any;
type ui = any;
type stateProps = {
  data: data;
  ui: ui;
};

const PopupVideo = (props: stateProps) => {
  const { data, ui } = props;
  return (
    <>
      {/* POPUP VIDEO */}
      <div className="popup-video">
        {/* POPUP CLOSE BUTTON */}
        <div className="popup-close-button popup-video-trigger">
          {/* POPUP CLOSE BUTTON ICON */}
          <svg className="popup-close-button-icon icon-cross">
            <use href="#svg-cross"></use>
          </svg>
          {/* /POPUP CLOSE BUTTON ICON */}
        </div>
        {/* /POPUP CLOSE BUTTON */}

        {/* IFRAME WRAP */}
        <div className="iframe-wrap">
          <iframe
            src="https://www.youtube.com/embed/6ErE27RNLDQ?start=200"
            allowFullScreen
          ></iframe>
        </div>
        {/* /IFRAME WRAP */}
      </div>
      {/* /POPUP VIDEO */}
    </>
  );
};
const mapStateToProps = (state: stateProps) => ({
  data: state.data,
  ui: state.ui,
});
PopupVideo.propTypes = {
  data: PropTypes.object,
  ui: PropTypes.object,
};
export default connect(mapStateToProps)(PopupVideo);
