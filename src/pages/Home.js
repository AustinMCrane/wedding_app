import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import { Container, H1, H2, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';

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
    <Container>
      <Header/>
      <Content >
        <H1>The Wedding Of</H1>
        <Card>
          <Image 
            style={{height: 300, width: null, flex: 1}}
            source={require('../components/homepicture.jpg')} />
        </Card>
        <H1>Mr & Mrs Austin Crane</H1>
        <H2>September 16 2017</H2>
      </Content>
    </Container>
 );
}
