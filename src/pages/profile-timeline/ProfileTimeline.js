import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Loader from '../../utils/reusable-components/Loader';
import ContentGrid from './contentgrid';
import PopupPicture from '../../utils/reusable-components/PopupPicture';
import PopupVideo from '../../utils/reusable-components/PopupVideo';

const ProfileTimeline = () => {
  return (
    <div>
      <Loader />
      <ContentGrid />
      <PopupVideo />
      <PopupPicture />
    </div>
  );
};

export default ProfileTimeline;
