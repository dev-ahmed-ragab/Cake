import AboutSectionAbout from '@/components/AboutSectionAbout';
import BannerAbout from '@/components/BannerAbout';
import Expertise from '@/components/Expertise';
import React from 'react';

const page = () => {
  return (
    <div>
      <BannerAbout />
      <AboutSectionAbout />
      <Expertise />
    </div>
  );
};

export default page;
