import React, { useState } from 'react';
import { View, Text } from 'react-native';
import RadioButton from './RadioButton'; // Import the custom RadioButton component

const GenderSelection = () => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 20, }}>
      <Text style={{ fontSize: 18, color: '#808080' }}>Gender</Text>
      <RadioButton
        label="Male"
        selected={selectedGender === 'male'}
        onPress={() => handleGenderSelect('male')}
      />
      <RadioButton
        label="Female"
        selected={selectedGender === 'female'}
        onPress={() => handleGenderSelect('female')}
      />
    </View>
  );
};

export default GenderSelection;
