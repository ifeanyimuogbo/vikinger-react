import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Loader from '../../utils/reusable-components/Loader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const HomePage = (props) => {
  return (
    <>
      <Loader />
      <h1>Home Page</h1>
    </>
  );
};
const mapStateToProps = (state) => ({
  data: state.data,
  ui: state.ui,
});
HomePage.propTypes = {
  data: PropTypes.object,
  ui: PropTypes.object,
};
export default connect(mapStateToProps)(HomePage);
