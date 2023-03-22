import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button({bgColor, btnLabel, textColor, press}) {
  return (
    <TouchableOpacity
      onPress={press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 7,
        alignItems: 'center',
        width: '40%',
        padding: 7,
        margin: 10,
      }}>
      <Text style={{color: textColor, fontSize: 14}}>{btnLabel}</Text>
    </TouchableOpacity>
  );
}
