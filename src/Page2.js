// src/Page2.js

import React from 'react';
import { View, Button, Text } from 'react-native';

const Page2 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Sobre nós:</Text>
  </View>
);

Page2.navigationOptions = {
  title: 'About',
}


export default Page2;