import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GenderSelection from './Components/GenderSelection';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const API_BASE_URL = 'https://api.maple.com';
const CITY_API_ENDPOINT = '/city';
const TOKEN_API_ENDPOINT = '/token';

const Registration = ({ navigation }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [district, setDistrict] = useState('');
  const [pincode, setPincode] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiKey = 'b6a26826-cc23-4ea7-8d1f-2f15b57e8236';
      const response = await fetch(
        `https://atlas.mapmyindia.com/api/places/geocode?address=${city}&itemCount=7`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const data = await response.json();
      setDistrict(data.district);
      setPincode(data.pincode);
      setState(data.state);
      setCountry(data.country);
    } catch (error) {
      console.error('Error fetching geocode data:', error);
    }
  };

  const handleCitySelect = async (selectedCity) => {
    try {
      setCity(selectedCity.placeName);
      const apiKey = 'b6a26826-cc23-4ea7-8d1f-2f15b57e8236';
      const geocodeResponse = await fetch(
        `https://atlas.mapmyindia.com/api/places/geocode?address=${selectedCity.placeName}&itemCount=1`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const geocodeData = await geocodeResponse.json();

      if (geocodeData.error) {
        console.error('Geocode API Error:', geocodeData.error);
        return;
      }

      setDistrict(geocodeData.district);
      setPincode(geocodeData.pincode);
      setState(geocodeData.state);
      setCountry(geocodeData.country);
      await fetchData();
    } catch (error) {
      console.error('Error fetching geocode data for selected city:', error);
    }

    setSuggestions([]);
  };

  const handleCityChange = async (text) => {
    setCity(text);
    try {
      const apiKey = 'b6a26826-cc23-4ea7-8d1f-2f15b57e8236';
      const response = await fetch(
        `https://atlas.mapmyindia.com/api/places/search/json?query=${text}&types=city&withDist=false&withPincode=false&withSTD=false&refLocation=28.6139,77.2090`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const data = await response.json();
      setSuggestions(data.suggestedLocations || []);
    } catch (error) {
      console.error('Error fetching city suggestions:', error);
    }
  };

  const renderSuggestions = () => (
    <FlatList
      data={suggestions}
      keyExtractor={(item) =>
        item.placeId ? item.placeId.toString() : item.placeName
      }
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleCitySelect(item)}>
          <Text style={styles.suggestionText}>{item.placeName}</Text>
        </TouchableOpacity>
      )}
    />
  );

  const generateToken = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}${TOKEN_API_ENDPOINT}`);
      const newToken = response.data.token;
      await AsyncStorage.setItem('mapleToken', newToken);
      return newToken;
    } catch (error) {
      console.error('Error generating token:', error);
      throw error;
    }
  };

  const fetchCityData = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('mapleToken');
      const token = storedToken || (await generateToken());
      const response = await axios.get(`${API_BASE_URL}${CITY_API_ENDPOINT}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCity(response.data.city);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const newToken = await generateToken();
        await AsyncStorage.setItem('mapleToken', newToken);
        await fetchCityData();
      } else {
        console.error('Error fetching city data:', error);
      }
    }
  };

  const handleStateChange = async (text) => {
    try {
      const apiKey = 'b6a26826-cc23-4ea7-8d1f-2f15b57e8236';
      const response = await fetch(
        `https://atlas.mapmyindia.com/api/places/search/json?query=${text}&types=state&withDist=false&withPincode=false&withSTD=false&refLocation=28.6139,77.2090`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const data = await response.json();
      setSuggestions(data.suggestedLocations || []);
    } catch (error) {
      console.error('Error fetching state suggestions:', error);
    }
  };

  const handleDistrictChange = async (text) => {
    try {
      const apiKey = 'b6a26826-cc23-4ea7-8d1f-2f15b57e8236';
      const response = await fetch(
        `https://atlas.mapmyindia.com/api/places/search/json?query=${text}&types=district&withDist=false&withPincode=false&withSTD=false&refLocation=28.6139,77.2090`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const data = await response.json();
      setSuggestions(data.suggestedLocations || []);
    } catch (error) {
      console.error('Error fetching district suggestions:', error);
    }
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#4CBB17']}
      style={styles.linearGradient}
      start={{ x: 0.4, y: 0.4 }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.Heading}>Registration</Text>
        <View style={{ marginTop: 40 }}>
          <View style={styles.box}>
            <Image
              source={require('../assets/img/User.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              placeholderTextColor="#000"
              onChangeText={(text) => setName(text)}
              value={name}
            />
          </View>
          <View style={styles.box}>
            <Image
              source={require('../assets/img/Phone.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Mobile Number"
              placeholderTextColor="#000"
              onChangeText={(number) => setNumber(number)}
              value={number}
              keyboardType="numeric"
              maxLength={10}
            />
          </View>
          <View style={styles.box}>
            <Image
              source={require('../assets/img/Key.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#000"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={!isVisible}
            />
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
              <Image
                source={
                  isVisible
                    ? require('../assets/img/visible.png')
                    : require('../assets/img/hide.png')
                }
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View>
            <GenderSelection />
          </View>
          <View style={styles.box}>
            <Image
              source={require('../assets/img/City.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="City"
              placeholderTextColor="#000"
              onChangeText={handleCityChange}
              value={city}
            />
          </View>
          {suggestions.length > 0 && renderSuggestions()}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.box1}>
              <TextInput
                style={styles.textInput1}
                placeholder="District"
                placeholderTextColor="#000"
                onChangeText={handleDistrictChange}
                value={district}
              />
            </View>
            <View style={styles.box1}>
              <TextInput
                style={styles.textInput1}
                placeholder="Pin Code"
                placeholderTextColor="#000"
                onChangeText={(number) => setPincode(number)}
                value={pincode}
                keyboardType="numeric"
                maxLength={6}
              />
            </View>
          </View>
          <View style={styles.box}>
            <Image
              source={require('../assets/img/State.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="State"
              placeholderTextColor="#000"
              onChangeText={handleStateChange}
              value={state}
            />
          </View>
          <View style={styles.box}>
            <Image
              source={require('../assets/img/Country.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Country"
              placeholderTextColor="#000"
              onChangeText={(text) => setCountry(text)}
              value={country}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('OTP2')}
        >
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default Registration;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  Heading: {
    color: '#000',
    fontSize: 22,
    fontWeight: '900',
    marginTop: 30,
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 10,
    marginBottom: 10,
  },
  icon: {
    height: 19,
    width: 19,
    marginTop: 9,
  },
  textInput: {
    height: 40,
    width: 270,
    color: '#000',
    fontSize: 18,
    paddingLeft: 10,
  },
  box1: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginBottom: 10,
  },
  textInput1: {
    height: 40,
    width: 158,
    color: '#000',
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
  suggestionText: {
    padding: 10,
    fontSize: 16,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});