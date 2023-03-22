import React from 'react';
import {TextInput} from 'react-native';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 8,
        color: 'black',
        padding: 5,
        width: '90%',
        backgroundColor: 'white',
        margin: 5,
        fontSize: 13,
        paddingLeft: 15,
      }}
      placeholderTextColor={'black'}></TextInput>
  );
};

export default Field;
