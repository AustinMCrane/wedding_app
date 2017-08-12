import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { Container, Button, Header, Title, H1, Content, Card, CardItem, Text, Body, Form, Item, Input, Radio, Right, ListItem } from 'native-base';

import { rsvpUser } from '../api';

export default class PostPage extends Component {
  state = {
    rsvp: false,
    name: "",
    numberAttending: 0,
  };

  nameChanged(text) {
    let name = text;
    this.setState({ name });
  }

  numberAttendingChanged(text) {
    let numberAttending = Number(text);
    this.setState({ numberAttending });
  }

  rsvpChanged(value) {
    let rsvp = value;
    this.setState({ rsvp });
  }

  submit() {
    rsvpUser(this.state.name).then((response) => {
      // TODO: Add toast to show success rsvp!
    }).catch((response) => {
      // TODO: Add toast to show that the user isnt on the list rsvp
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>RSVP</Title>
          </Body>
        </Header>
        <Content>
          <Card>
            <Form>
              <Item>
               <Input placeholder="Name" value={ this.state.name } onChangeText={this.nameChanged.bind(this)} />
              </Item>
              <ListItem>
                <Text>Accepts With Pleasure</Text>
                <Right>
                  <Radio selected={this.state.rsvp} onChange={this.rsvpChanged.bind(this, true)} />
                </Right>
              </ListItem>
              <ListItem>
                <Text>Declines With Regret</Text>
                <Right>
                  <Radio selected={!this.state.rsvp} onChange={this.rsvpChanged.bind(this, false)} />
                </Right>
              </ListItem>
              <Item>
               <Input placeholder="Number Attending" value={ this.state.numberAttending.toString() } onChangeText={this.numberAttendingChanged.bind(this)} />
             </Item>
               <Button block light onPress={this.submit.bind(this)} >
                 <Text>
                   Submit
                 </Text>
               </Button>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}
