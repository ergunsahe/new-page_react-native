import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

const NewsCard = ({news}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: news.imageUrl
        }}
        style={styles.image}
      />

      <Text style={[styles.text, {fontSize:17, fontWeight:"bold"}]}> {news.title}</Text>
      <Text style={styles.text}> {news.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
        borderWidth: 2, 
        borderColor: 'gray', 
        borderRadius:5,
        margin: 5
    },
    image:{
        height: Dimensions.get('window').height * 0.25,
        borderRadius:10,
        margin:5,
        resizeMode:"stretch"
    },
    text:{
        margin:5
    }
})
export default NewsCard;
