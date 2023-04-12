'use client';
import React from 'react';
import { useMediaQuery } from '@mui/material';
import theme from '@/src/theme/theme';

const useIsDesktop = () => useMediaQuery(theme.breakpoints.not('xs'));

export default useIsDesktop;
