import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import Home from './pages/Home';
import MapPage from './pages/MapPage';
import PostPage from './pages/PostPage';
import RSVPPage from './pages/RSVPPage';

export default App = TabNavigator({
  Home: {
    screen: Home,
  },
  Map: {
    screen: MapPage,
  },
  Post: {
    screen: PostPage,
  },
  RSVP: {
    screen: RSVPPage
  }
});
