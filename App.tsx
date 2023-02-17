import {View} from 'react-native';
import React from 'react';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';

const App = () => {
  return (
    <View>
      {/* <ProductsScreen /> */}
      <ProductDetailsScreen />
    </View>
  );
};

export default App;
