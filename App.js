/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Container, Button, Text, Content, Accordion } from 'native-base';


const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];


const App: () => React$Node = () => {
  return (
    <Container>
        <Button>
          <Text>
            Student Partner
          </Text>
        </Button>
		
		<Content padder>
          <Accordion dataArray={dataArray} icon="add" expandedIcon="remove"/>
        </Content>
		
      </Container>
  );
};

const styles = StyleSheet.create({
  
});


const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
});

export default createAppContainer(AppNavigator);

//export default App;
