import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HelloWorld } from '_atoms';

const App = () => {
  return (
    <View style={s.screen}>
      <HelloWorld />
    </View>
  );
};

const s = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default App;
