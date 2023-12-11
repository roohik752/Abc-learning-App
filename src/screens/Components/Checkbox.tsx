import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Checkbox = ({ label, checked, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle}>
      <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft: 2 }}>
        {checked ? (
          <Image
            source={require('../../assets/img/charm_tick.png')}
            style={{ width: 20, height: 20, marginRight: 10, borderWidth: 1, borderColor: '#000', backgroundColor: '#000' }}
          />
        ) : (
          <View
            style={{
              width: 20,
              height: 20,
              borderWidth: 1,
              borderColor: '#000',
              // borderRadius: 3,
              marginRight: 10,
            }}
          />
        )}
        <Text style={{ fontSize: 16, color: '#000', }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;

