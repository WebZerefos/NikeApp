import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import products from '../data/products';
import {useNavigation} from '@react-navigation/native';

const ProductsScreen = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Product Details')}>
            <Image source={{uri: item.image}} style={styles.image} />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: '50%',
    padding: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
});
