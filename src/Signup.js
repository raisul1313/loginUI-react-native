import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import Field from './Field';

const Signup = props => {
  return (
    <View style={{backgroundColor: '#273444', flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Convay</Text>
        <Text style={styles.subTitle}>Sign Up</Text>
        <Text style={styles.description}>
          Redefine Video Conferencing Experince
        </Text>
        <Field placeholder="Enter your email" keyboardType={'email-address'} />

        <TouchableOpacity
          onPress={() => {
            alert('Accoutn created');
            props.navigation.navigate('Login');
          }}
          style={{
            backgroundColor: '#2C3333',
            borderRadius: 7,
            alignItems: 'center',
            padding: 8,
            margin: 10,
            width: '90%',
          }}>
          <Text style={{color: 'white', fontSize: 14}}>Continue</Text>
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 12, fontWeight: '400', color: 'white'}}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={{color: 'white', fontSize: 12, fontWeight: '400'}}>
              Login
            </Text>
          </TouchableOpacity>
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
    paddingTop: 20,
    height: 500,
    margin: 20,
    marginTop: 100,
  },

  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: '400',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '400',
    marginBottom: 20,
  },

  description: {
    fontSize: 15,
    color: 'white',
    fontWeight: '400',
    marginBottom: 20,
  },

  forgotPass: {
    alignItems: 'flex-end',
    width: '100%',
    paddingRight: 20,
    margin: 5,
    marginBottom: 15,
  },
});

export default Signup;
