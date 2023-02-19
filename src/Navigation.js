/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ShoppingCart from './screens/ShoppingCart';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ShoppingCartIcon} from 'react-native-heroicons/outline';
import {useSelector} from 'react-redux';
import {numberOfItems} from './store/cartSlice';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const itemsNumber = useSelector(numberOfItems);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProductsScreen"
        screenOptions={{
          contentStyle: {
            backgroundColor: '#FFFFFF',
          },
        }}>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate('Cart')}>
                <ShoppingCartIcon color={'gray'} size={30} />
                {itemsNumber > 0 && <View style={styles.cartStyle} />}
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{presentation: 'modal'}}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  cartStyle: {
    position: 'absolute',
    right: -1,
    backgroundColor: 'red',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
