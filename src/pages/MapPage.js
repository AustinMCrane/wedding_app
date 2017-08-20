import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import MapView from 'react-native-maps';
import { Container, Title, Header, Card, Content, CardItem, H3, Body, Text, Button, Left, Right } from 'native-base';

import { getAllLocations } from '../api';
const styles = {
  expanded: {
    height: 700,
  },
  minimize: {
    height: 200,
  },
};
export default class MapPage extends Component {
  state = {
    locations: [],
    expanded: null,
  };
  componentDidMount() {
    getAllLocations().then((response) => {
      this.setState({ locations: response.data.list });
    }).catch((err) => {
      console.log(err);
    });
  }
  renderLocations() {
    return this.state.locations.map((location, index) => {
      const expanded = this.state.expanded === location.id;
      const shown = this.state.expanded === null || this.state.expanded === location.id;
      const startingPoint = location.cordinates[0];
      const markers = location.markers.map((cordinate) => {
        console.log(cordinate);
        return (
          <MapView.Marker
            key={'marker'+cordinate.id}
            title={cordinate.title}
            coordinate={{ latitude: cordinate.lat, longitude: cordinate.lng }}
          >
            <MapView.Callout>
              {cordinate.image !== "" &&
                <Image style={{ height: 100, width: 130, flex: 1 }} source={{ uri: cordinate.image }} />
              }
              <Text>
                {cordinate.title}
              </Text>
            </MapView.Callout>
          </MapView.Marker>
        );
      });

      const latlng = location.cordinates.map((c) => {
        return { latitude: c.lat, longitude: c.lng };
      });
      const polyline = (
        <MapView.Polyline
          coordinates={latlng}
          strokeWidth={2}
          strokeColor={'#ff0000'}
        />
      );
                    
      if (shown) {
      return (
          <Card key={location.id}>
            <CardItem>
              <Left>
                <H3>{ location.name }</H3>
              </Left>
              <Right>
                <Button onPress={() => expanded ? this.setState({ expanded: null }) : this.setState({ expanded: location.id })}>
                  <Text>
                    {  expanded ? 'Minimize' : 'Expand' }
                  </Text>
                </Button>
              </Right>
            </CardItem>
                <MapView
                  satellite="hybrid"
                  showsUserLocation
                  showsCompass
                  style={expanded ? styles.expanded : styles.minimize}
                  region={{
                    latitude: startingPoint.lat,
                    longitude: startingPoint.lng,
                    latitudeDelta: 1,
                    longitudeDelta: 1,
                  }}
                >
                    
                  {markers}
                  {polyline}
                </MapView>
          </Card>
       );
      } else {
        return;
      }
    });
  }
  render() {
    const page = {
      flex: 1
    };
    return (
      <Container>
        <Header>
          <Body>
            <Title>Maps</Title>
          </Body>
        </Header>
        <Content>
          { this.state.locations.length > 0 && this.renderLocations() }
        </Content>
     </Container>
    );
  }
}

MapPage.navigationOptions = () => {
  return {
    tabBarIcon: ({ tintColor }) => {
      return (
        <Image
          source={require('../car.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      );
    }
  };
}
