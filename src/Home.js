import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Button from './Button';

const Home = props => {
  return (
    <View style={{backgroundColor: '#273444', flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Convay</Text>
        <Text style={styles.subTitle}>Next-Gen Video Conferencing</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#2C3333',
            borderRadius: 7,
            alignItems: 'center',
            padding: 8,
            margin: 10,
            width: '90%',
          }}>
          <Text style={{color: 'white', fontSize: 14}}>Join a Meeting</Text>
        </TouchableOpacity>
        <Image
          style={{height: '35%', width: '50%', margin: 30}}
          source={require('./assets/prom.png')}></Image>

        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Button
            bgColor="#85CDCF"
            textColor="white"
            btnLabel="Login"
            press={() => props.navigation.navigate('Login')}
          />
          <Button
            bgColor="#1E6E7A"
            textColor="white"
            btnLabel="Signup"
            press={() => props.navigation.navigate('Signup')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#71bec1',
    borderRadius: 10,
    padding: 5,
    paddingTop: 20,
    height: 500,
    margin: 20,
    marginTop: 100,
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginBottom: 15,
  },
  subTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 25,
  },
});

export default Home;
