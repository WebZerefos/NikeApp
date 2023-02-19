import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Currency from 'react-currency-formatter';
import CartListItem from '../components/CartListItem';
import {useSelector} from 'react-redux';
import {
  selectDeliveryPrice,
  selectSubTotal,
  selectTotal,
} from '../store/cartSlice';

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubTotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);
  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>
          <Currency quantity={subtotal} currency="USD" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>
          <Currency quantity={deliveryFee} currency="USD" />
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>
          <Currency quantity={total} currency="USD" />
        </Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({item}) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>Check-out</Text>
      </Pressable>
    </>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  totalsContainer: {
    padding: 20,
    borderTopColor: '#becbd6',
    borderTopWidth: 0.4,
    margin: 20,
    marginBottom: 100,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: '#687387',
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#88abb8',
  },
  button: {
    position: 'absolute',
    bottom: 30,
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
