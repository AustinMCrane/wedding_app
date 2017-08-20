import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import { Container, H1, Title, H2, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';

import { getAllTimelines } from '../api';

const styles = {
  imageText: {
    color: 'white',
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 20,
  },
  centerText: {
    textAlign: 'center',
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

export default class Home extends Component {
  state = {
    timelines: [],
  };
  getTimelines() {
    getAllTimelines().then((response) => {
      console.log(response);
      this.setState({ timelines: response.data.list });
    }).catch((err) => {
      console.log(err);
    });
  }

  componentDidMount() {
    this.getTimelines();
  }

  renderTimeline() {
    return this.state.timelines.map((item) => {
      return (
        <Card key={ item.id }>
          <CardItem>
            <Text>{ item.time }</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{ item.body }</Text>
            </Body>
          </CardItem>
        </Card>
      );
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Bulletin</Title>
          </Body>
        </Header>
        <Content >
          <Card>
            <Image 
              style={{height: 300, width: null, flex: 1}}
              source={require('../homepicture.png')} />
          </Card>
          <View>
            {this.state.timelines.length > 0 &&
              this.renderTimeline()
            }
          </View>
        </Content>
      </Container>
   );
  }
}

Home.navigationOptions = () => {
  return {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../heart.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  };
}
