import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const WidgetSettings = (props) => {
  const { settings } = props;
  return (
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
          {settings.map((setting, i) => (
            <p className="simple-dropdown-link" key={i}>
              {setting}
            </p>
          ))}

          {/* /SIMPLE DROPDOWN LINK */}
        </div>
        {/* /SIMPLE DROPDOWN */}
      </div>
      {/* /POST SETTINGS WRAP */}
    </div>
  );
};
const mapStateToProps = (state) => ({
  data: state.data,
  ui: state.ui,
});
WidgetSettings.propTypes = {
  settings: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.object,
  ui: PropTypes.object,
};
export default connect(mapStateToProps)(WidgetSettings);
