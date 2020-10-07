import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={styles.header}>News</Text>
      <View style={styles.bitcoinContainer}>
        <Image
          style={styles.bitcoin}
          source={require('../img/bitcoin-chart.jpg')}
        />
        <Text style={styles.subHeader}>
          Bulls Exit BitMEX Bitcoin Furures Market
        </Text>
        <Text style={styles.subtext}>
          Since the announcement from U.S. regulators, BitMEX has witnessed an
          outflow of more than 40,000 bitcoins, currently worth more than $422
          million.
        </Text>
      </View>
      <View style={styles.follow}>
        <Image
          style={styles.followMoney}
          source={require('../img/follow-money.jpg')}
        />
        <Text style={styles.subHeader}>
          Coinbase customers can now dodge a bank
        </Text>
        <Text style={styles.subtext}>
          New update form Coinbase quickens the transmutation of crypto into
          fiat. Coinbase has unveiled a faster way for its customers to move
          digital currencies out of crypto and into their bank accounts.
        </Text>
      </View>
      <View style={styles.crypto}>
        <Image
          style={styles.cryptoHacker}
          source={require('../img/crypto-hacker.jpg')}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  bitcoin: {
    marginLeft: 5,
    marginTop: 5,
    width: 340,
    height: 188,
    // paddingTop: 15,
  },
  bitcoinContainer: {
    width: 354,
    height: 238,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    margin: 3,
  },
  subHeader: {
    fontSize: 14,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  subtext: {
    marginLeft: 5,
    fontSize: 10,
  },
  follow: {
    width: 354,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    margin: 3,
  },
  followMoney: {
    margin: 5,
    marginBottom: 5,
    width: 340,
    height: 150,
    borderRadius: 5,
  },
  crypto: {
    width: 354,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    margin: 3,
  },
  cryptoHacker: {
    margin: 5,
    width: 340,
    height: 150,
    borderRadius: 5,
  },
});
