import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}

const HelloWorld = (props: Props) => {
  return (
    <View>
      <Text style={s.text}>Hello World!</Text>
    </View>
  );
};

export default HelloWorld;

const s = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});
