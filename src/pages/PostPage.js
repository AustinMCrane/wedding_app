import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import { Container, Right, Left, Button, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import { StackNavigator } from 'react-navigation';

import { getAllPosts } from '../api';
import PostCreatePage from './PostCreatePage';

export class PostListPage extends Component {
  state = {
    posts: [],
  };
  static navigationOptions = {
 }

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

PostListPage.navigationOptions = ({ navigation }) => {
  return {
    title: 'Posts',
    headerRight: (
      <Button transparent onPress={() => navigation.navigate('PostCreatePage')}>
        <Text>+</Text>
      </Button>
    )
  };
};
export default PostPage = StackNavigator({
  PostListPage: {
    screen: PostListPage,
  },
  PostCreatePage: {
    screen: PostCreatePage,
  }
});
