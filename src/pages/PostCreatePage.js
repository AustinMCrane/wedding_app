import React, { Component } from 'react';

import { Container, Spinner, Thumbnail, Image, Item, Right, Form, Left, Button, Input, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import ImagePicker from 'react-native-image-picker';

import { createPost } from '../api';

export default class PostCreatePage extends Component {
  state = {
    pictureData: "",
    pictureSource: { uri: "" },
    pictureName: "blank.jpg",
    message: "",
    saving: false,
  };

  pickPicture() {

    ImagePicker.showImagePicker(null, (response) => {

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let source = { uri: response.uri };
          this.setState({
            pictureData: response.data,
            pictureSource: source,
            pictureName: response.fileName,
          });
        }
      });
  }

  submit() {
    createPost(this.state.message, this.state.pictureName, this.state.pictureData).then((response) => {
      this.setState({ saving: false });
      this.props.navigation.navigate('PostListPage');
      console.log(this.props);
    }).catch((err) => {
      console.log(err.response);
    });
    this.setState({ saving: true });
  }

  render() {
    return (
      <Container>
        <Content>
          {this.state.saving ? <Spinner /> :
          <Card>
            <Form>
              <CardItem>
                <Input placeholder="Message" onChangeText={(message) => this.setState({ message }) }/>
              </CardItem>
              <CardItem>
                <Button onPress={this.pickPicture.bind(this)}>
                  <Text>
                    Add Picture
                  </Text>
                </Button>
                { this.state.pictureSource !=  { uri: "" } &&
                  <Thumbnail source={this.state.pictureSource} />
                }
              </CardItem>
              <Button onPress={this.submit.bind(this)} block>
                <Text>
                  Submit
                </Text>
              </Button>
            </Form>
          </Card>
          }
        </Content>
      </Container>
    );
  }
}

PostCreatePage.navigationOptions = () => {
  return {
    title: 'New Post',
  };
}
