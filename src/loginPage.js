import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.mymage}
          source={require('../img/shopping-cart.png')}
        />
      </View>
      <TextInput
        style={styles.userInput}
        keyboardType="email-address"
        placeholder="E-posta giriniz"
      />
      <TextInput
        style={styles.userInput2}
        keyboardType="visible-password"
        placeholder="Şifre giriniz"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#80CBC4',
    flex: 1,
  },
  mymage: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 75,
    backgroundColor:"#80CBC4"
  },
  userInput: {
    backgroundColor: '#ECEFF1',
    marginTop: 75,
    margin: 20,
    borderRadius: 10,
  },
  userInput2: {
    backgroundColor: '#ECEFF1',
    marginTop: 10,
    margin: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#546E7A',
    width: 200,
    height: 40,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  text: {
    color: 'white',
  },
});
