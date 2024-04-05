'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import DashSectionWrapper from '../DashSectionWrapper';
import { VscLoading } from 'react-icons/vsc';
import DashTitle from '../ui/dash-title';

const DashboardProgress = () => {

  return (
    <DashSectionWrapper>
      <DashTitle title='Progress' />
      
    </DashSectionWrapper>
  );
};

export default DashboardProgress;
