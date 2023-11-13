import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const RadioButton = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            width: 18,
            height: 18,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: selected ? '#000' : '#000',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 30
          }}
        >
          {selected && (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 6,
                backgroundColor: '#000',
              }}
            />
          )}
        </View>
        <Text style={{ marginLeft: 8, color: '#000', fontSize: 18 }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
