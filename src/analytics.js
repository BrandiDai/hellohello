import React from 'react';
import { View, Text, Image } from 'react-native';
import * as Amplitude from 'expo-analytics-amplitude';
import * as Segment from 'expo-analytics-segment';
const Analytics = props => {
  const Analytics = Analytics[0];
  return (
Segment.initialize({
  iosWriteKey: "dvHY8AWKFtchJ5R146WyuAsHy45Tak1F",
  androidWriteKey: "rMtRzfD2wS4dyjQVw0RrWcM4ZRnEAzG9"}),
Segment.track('pageLoad'),

Amplitude.initialize('b000c3d0ca796cc59fd71f6935584882'),
Amplitude.logEvent('pageLoad'),
Amplitude.setUserProperties(
  'device_id',
  'app_version',
  'platform',
  'os_name',
  'os_version',
  'device_brand',
  'device_manufacturer',
  'device_model',
  'carrier',
  'country',
  'city',
  'dma',
  'adid',
  'idfa')
)};

export default Analytics;
