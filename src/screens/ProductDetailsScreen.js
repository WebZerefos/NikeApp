import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Currency from 'react-currency-formatter';
import {useSelector, useDispatch} from 'react-redux';
import {cartSlice} from '../store/cartSlice';
import {useNavigation} from '@react-navigation/native';

export const first = state => state.second;

const width = Dimensions.get('window').width;

const ProductDetailsScreen = () => {
  const product = useSelector(state => state.products.selectedProduct);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const addToCart = () => {
    dispatch(cartSlice.actions.addItem({product}));
    navigation.goBack();
  };

  return (
    <View>
      <ScrollView style={styles.scrollContainer}>
        {/* Image Carousel */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment="center"
          data={product.images}
          renderItem={({item}) => (
            <Image source={{uri: item}} style={styles.image} />
          )}
        />

        <View style={styles.detailsContainer}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>
            <Currency quantity={product.price} currency="USD" />
          </Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* Add to cart button */}
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>

      {/* Navigation icon */}
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    marginBottom: 80,
  },
  image: {
    width: width,
    aspectRatio: 1,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    color: '#687387',
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    color: '#687387',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 2,
  },
  description: {
    color: '#8b94a5',
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '400',
  },
  button: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: '#687387',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '90%',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
