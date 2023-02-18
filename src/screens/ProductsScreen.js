import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {productsSlice} from '../store/productsSlice';

const ProductsScreen = () => {
  const navigation = useNavigation();

  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <TouchableOpacity
            onPress={() => {
              //get Selected Product
              dispatch(productsSlice.actions.setelectedProduct(item.id));
              navigation.navigate('Product Details');
            }}>
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
