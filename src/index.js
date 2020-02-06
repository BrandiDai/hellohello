// src/index.js
import React from 'react';
import ReactDom from 'react-dom';
import App from './app.js';
import Analytics from './analytics.js';
import * as Amplitude from 'expo-analytics-amplitude';
import * as Segment from 'expo-analytics-segment';
ReactDom.render(<App />, document.getElementById("root"));
