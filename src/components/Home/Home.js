import React, { useCallback } from 'react';
import {
  View,
  Image
} from 'react-native';
import { useSelector } from 'react-redux';

import { Input, Item, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

import SearchBar from 'react-native-searchbar'

import styles from './styles';

import TextStyles from '../../helpers/TextStyles';
import strings from '../../localization';
import getUser from '../../selectors/UserSelectors';

function renderNews(){
  let news = ""
  for (var i = 0; i <= 10; i++) {
    return(
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://upload.wikimedia.org/wikipedia/en/7/77/Lse_library_interior.jpg'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/en/7/77/Lse_library_interior.jpg'}} style={{height: 250, width: 320, flex: 1}}/>
                <Text>
                  Some description for the article
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
      );
  }
}

function Home() {

  Home.seachBar = null
  const user = useSelector(state => getUser(state));
  const getMessage = useCallback(() => `${strings.homeMessage} ${user && user.name}`, [user]);

  return (
<Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://upload.wikimedia.org/wikipedia/en/7/77/Lse_library_interior.jpg'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/en/7/77/Lse_library_interior.jpg'}} style={{height: 200, width: 320, flex: 1}}/>
                <Text>
                  Some description for the article
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://upload.wikimedia.org/wikipedia/en/7/77/Lse_library_interior.jpg'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/en/7/77/Lse_library_interior.jpg'}} style={{height: 200, width: 320, flex: 1}}/>
                <Text>
                  Some description for the article
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://upload.wikimedia.org/wikipedia/en/7/77/Lse_library_interior.jpg'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/en/7/77/Lse_library_interior.jpg'}} style={{height: 200, width: 320, flex: 1}}/>
                <Text>
                  Some description for the article
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://upload.wikimedia.org/wikipedia/en/7/77/Lse_library_interior.jpg'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/en/7/77/Lse_library_interior.jpg'}} style={{height: 200, width: 320, flex: 1}}/>
                <Text>
                  Some description for the article
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
}



Home.navigationOptions = {
    title: strings.newsFeed
};

export default Home;
