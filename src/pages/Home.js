import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';

const styles = {
  imageText: {
    color: 'white',
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 20,
 },
  imageContent: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
   },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default Home = () => {
  return (
  <Content >
    <View style={styles.container}> 
      <Card>
        <CardItem>
        </CardItem>
      </Card>
    </View>
</Content>
 );
}
