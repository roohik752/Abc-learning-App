import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GenderSelection from './Components/GenderSelection';

const Registration = ({ navigation }) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [district, setDistrict] = useState('');
  const [pincode, setPincode] = useState('');

  return (
    <LinearGradient
      colors={['#FFFFFF', '#4CBB17']}
      style={styles.linearGradient}
      start={{ x: 0.4, y: 0.4 }}
    >
      <Text style={styles.Heading}>Registration</Text>
      <View style={{ marginTop: 40 }}>
        <View style={styles.box}>
          <Image source={require('../assets/img/User.png')} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            placeholderTextColor='#808080'
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/img/Phone.png')} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Number"
            placeholderTextColor='#808080'
            onChangeText={(number) => setNumber(number)}
            value={number}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.box}>
                    <Image source={require('../assets/img/Key.png')} style={styles.icon} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        placeholderTextColor='#808080'
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                    <Image source={require('../assets/img/Eye.png')} style={styles.icon} />
                </View>
        <View>
          <GenderSelection />
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/img/City.png')} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="City"
            placeholderTextColor='#808080'
            onChangeText={(text) => setCity(text)}
            value={city}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.box1}>
            <TextInput
              style={styles.textInput1}
              placeholder="District"
              placeholderTextColor='#808080'
              onChangeText={(text) => setDistrict(text)}
              value={district}
            />
          </View>
          <View style={styles.box1}>
            <TextInput
              style={styles.textInput1}
              placeholder="Pin Code"
              placeholderTextColor='#808080'
              onChangeText={(number) => setPincode(number)}
              value={pincode}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/img/State.png')} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="State"
            placeholderTextColor='#808080'
            onChangeText={(text) => setState(text)}
            value={state}
          />
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/img/Country.png')} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Country"
            placeholderTextColor='#808080'
            onChangeText={(text) => setCountry(text)}
            value={country}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('OTP2')}
      >
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default Registration;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
  },
  Heading: {
    color: '#000',
    fontSize: 22,
    fontWeight: '900',
    marginTop: -20
  },
  box: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 10,
    marginBottom: 10
  },
  icon: {
    height: 19,
    width: 19,
    marginTop: 9,
  },
  textInput: {
    height: 40,
    width: 270,
    color: '#818589',
    fontSize: 18,
    paddingLeft: 10,
  },
  box1: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 10,
    marginBottom: 10,
  },
  textInput1: {
    height: 40,
    width: 158,
    color: '#818589',
    fontSize: 18,
    paddingLeft: 20,
  },
  button: {
    height: 40,
    width: 340,
    backgroundColor: '#000',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});