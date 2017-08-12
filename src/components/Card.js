import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 200,
  },
  imageContainer: {
    height: 300,
    margin: 800,
  },
};
export default Card = (image, title) => {
  return (
    <View style={styles.container}>
      <Image source={require('./homepicture.jpg')} style={styles.imageContainer}>
      </Image>
      <Text style={styles.subtitleText}>
        September 16 2017
      </Text>
    </View>
  );
}
