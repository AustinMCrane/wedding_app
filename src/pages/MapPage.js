import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import MapView from 'react-native-maps';

export default Home = () => {
  const page = {
    flex: 1
  };
  return (
    <View style={page}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
   </View>
  );
}
