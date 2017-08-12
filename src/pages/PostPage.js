import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

import { getAllPosts } from '../api';

export default class PostPage extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    // get the post data
    getAllPosts().then((response) => {
      this.setState({ posts: response.data.list });
    });
  }

  getPostCards() {
    let posts = this.state.posts.map((post) => {
      return (
        <Card key={post.id}>
          <CardItem cardBody>
            <Image
              source={{ uri: post.imageUrl }}
              style={{height: 200, width: null, flex: 1}} />
          </CardItem>
          <CardItem>
            <Text>
              { post.body }
            </Text>
          </CardItem>
        </Card>
      );
    });
    return posts;
  }

  render() {
    let posts = this.getPostCards();
    if (posts.length === 0)
      posts = <Text>No Posts</Text>;
    console.log(posts);
    return (
      <Container>
        <Content>
          <View>
            { posts }
          </View>
        </Content>
      </Container>
   );
  }
}
