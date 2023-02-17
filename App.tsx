import {StyleSheet, View} from 'react-native';
import React from 'react';
import ProductsScreen from './src/screens/ProductsScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <ProductsScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
// git config --global user.email "you@example.com"
//   git config --global user.name "Your Name"
