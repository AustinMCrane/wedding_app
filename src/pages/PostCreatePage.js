import React, { Component } from 'react';

import { Container, Right, Form, Left, Button, Input, Header, Content, Card, CardItem, Text, Body } from 'native-base';

export default class PostCreatePage extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <Form>
              <Input placeholder="Message" />
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}
