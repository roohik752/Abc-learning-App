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
  Platform,
  PermissionsAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GenderSelection from './Components/GenderSelection';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-community/async-storage';
import { encode, decode } from 'base-64';

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
  const [districtSuggestions, setDistrictSuggestions] = useState([]);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [placeName, setPlaceName] = useState('');
  const [data, setData] = useState(null);
  const [searchData, setSearchData] = useState(null);


  useEffect(() => {
    // Request location permission (only needed on Android)
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
        .then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getLocation();
          } else {
            console.log('Location permission denied');
          }
        })
        .catch(err => console.warn(err));
    } else {
      getLocation();
    }
  }, []);



  // console.log('loc',location)

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        console.log('latitude', latitude, longitude)
      },
      error => {
        console.log('Error getting location:', error);
      },
      { enableHighAccuracy: false, timeout: 15000, maximumAge: 1000 }
    );
  };

  useEffect(() => {
    console.log("useffCalled")
    reverseGeocode()
    generateToken()
  }, [location])

useEffect(()=>{
       if(data){
        if(data.locality){
          setCity(`${data.locality}`)
        }else{
          setCity(`${data.city}`)
        }
        setDistrict(data.district);
        setPincode(data.pincode);
        setState(data.state);
        setCountry(data.area)
      }
},[data])

useEffect(()=>{
  if(searchData){
  console.log(">>>>>>>>>>>>>>>>>>>>copResults",searchData.copResults[0])

    setCity(`${searchData.copResults[0].locality}`);
  setDistrict(searchData.copResults[0].district);
  setPincode(searchData.copResults[0].pincode);
  setState(searchData.copResults[0].state);
  // setState(searchData.copResults[0].state);
}
},[searchData])

  const reverseGeocode = async () => {
console.log(">>>>>>>>>>>>>>>>>Called<<<<<<<<<<<<<")
    const apiKey = '1fd297cf-9586-4d48-a5f7-09e009761c15';
    // // ======my credentials======
    // const apiUrl = `https://apis.mappls.com/advancedmaps/v1/2d149d9a7b304e5aab5ce470bc6f8512/rev_geocode?lat=${location.latitude}&lng=${location.longitude}`
    
    // // ======Sandhya's credentials======
    const apiUrl = `https://apis.mappls.com/advancedmaps/v1/7be3c6c9f3c138c7f6fe9f0d7f0746c2/rev_geocode?lat=${location.latitude}&lng=${location.longitude}`

    try {
      const response = await axios.get(apiUrl);

      if (response.data.results.length > 0) {
        setData(response.data.results[0])

        console.log(pincode,'formattedAddress', response.data.results[0].pincode)
      } else {
        console.log('No results found');
      }
    } catch (error) {
      console.log('Error fetching reverse geocoding data:', error);
    }
  };

  const fetchData = async () => {
    try {
      const apiKey = '1fd297cf-9586-4d48-a5f7-09e009761c15';
      const response = await fetch(
        `https://atlas.mapmyindia.com/api/places/geocode?address=${city}&itemCount=5`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const data = await response.json();
  
      if (data.copResults) {
        // setDistrict(data.copResults.district);
        // setPincode(data.copResults.pincode);
        // setState(data.copResults.state);
        // setCountry(data.copResults.country);
      } else {
        console.log('No results found');
      }
    } catch (error) {
      console.error('Error fetching geocode data:', error);
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
  const handleCitySelect = async (selectedCity) => {
    try {
      // setCity(selectedCity.placeName);

      const apiKey = '1fd297cf-9586-4d48-a5f7-09e009761c15';

      // Fetch district information based on the selected city
      const districtResponse = await fetch(
        `https://atlas.mapmyindia.com/api/places/geocode?address=${selectedCity.placeName}&itemCount=5`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const districtData = await districtResponse.json();

      if (districtData.error) {
        console.error('Geocode API Error:', districtData.error);
        return;
      }

      // Set both city and district
     setSearchData(districtData)

      // Fetch other information if needed
      await fetchData();
    } catch (error) {
      console.error('Error handling city select:', error);
    }

    // Clear suggestions after selection
    setSuggestions([]);
  };

  const handleCityChange = async (text) => {
    setCity(text);
    try {
      const apiKey = '1fd297cf-9586-4d48-a5f7-09e009761c15';
      const response = await fetch(
        `https://atlas.mapmyindia.com/api/places/search/json?query=${text}&types=city&withDist=false&withPincode=false&withSTD=false&refLocation=${location.latitude},${location.longitude}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const data = await response.json();
      console.log('data', data)
      setSuggestions(data.suggestedLocations || []);
    } catch (error) {
      console.error('Error fetching city suggestions:', error);
    }
  };

  const renderSuggestions = () => {
    if (city && suggestions.length > 0) {
      return (
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
    }
    return null;
  };

  const handleDistrictChange = async (text) => {
    setDistrict(text);
    try {
      const apiKey = '1fd297cf-9586-4d48-a5f7-09e009761c15';
      const response = await fetch(
        `https://atlas.mapmyindia.com/api/places/search/json?query=${text}&types=district&withDist=false&withPincode=false&withSTD=false&refLocation=${location.latitude},${location.longitude}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const data = await response.json();
      console.log('data', data)
      setDistrictSuggestions(data.suggestedLocations || []);
    } catch (error) {
      console.error('Error fetching district suggestions:', error);
    }
  };
  const handleDistrictSelect = async (selectedDistrict) => {
    try {
      setCity(selectedDistrict.placeName);
      const apiKey = '1fd297cf-9586-4d48-a5f7-09e009761c15';
      const geocodeResponse = await fetch(
        `https://atlas.mapmyindia.com/api/places/geocode?address=${selectedDistrict.placeName}&itemCount=5`,
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
      // console.log(geocodeData.copResults,'<<===')
      setDistrict(geocodeData.copResults.district);
      setPincode(geocodeData.copResults.pincode);
      setState(geocodeData.copResults.state);
      await fetchData();
    } catch (error) {
      console.error('Error fetching geocode data for selected city:', error);
    }

    setDistrictSuggestions([]);
  };


  const renderDistrictSuggestions = () => (
    <FlatList
      data={districtSuggestions}
      keyExtractor={(item) =>
        item.placeId ? item.placeId.toString() : item.placeName
      }
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleDistrictSelect(item)}>
          <Text style={styles.suggestionText}>{item.placeName}</Text>
        </TouchableOpacity>
      )}
    />
  );

 
  const generateToken = async () => {
    try {
      const storedToken = '1fd297cf-9586-4d48-a5f7-09e009761c15'

      // if (storedToken) {
      //   // Check if the stored token is still valid (not expired)
      //   const tokenData = JSON.parse(storedToken.split('.')[1]); // Decode JWT payload
      //   const currentTimestamp = Math.floor(Date.now() / 1000);

      //   if (tokenData.exp > currentTimestamp) {
      //     console.log('Using stored token');
      //     return storedToken;
      //   }
      // }

      // // If the stored token is not available or expired, generate a new one
      // // ======my credentials======
      // const clientId = '96dHZVzsAut0qQrlc_W7HqmMZQAf0pBPO3dl_uXUnv_A8aZFC0D0IMRCQMms9tl6wMBCWI-oDjXLQYpTECLR_g==';
      // const clientSecret = 'lrFxI-iSEg8phf4EHrj0255fM0f_KMrKjdv_7AWrKvrPGWdJrMOyQFmo-dv3MYoxO82xo9HhAZd7Ib-nri1LTEpzxUpjfQYA';

      // // ======Sandhya's credentials======
      const clientId = '96dHZVzsAuvlOQ-317cJmfIKRfLxEDJf452Hm2XGbSyu2nNPZkc-u4oliUcTutbx7lmgykfEaAACZqol1y7CNvZ-lFn7r7-V';
      const clientSecret = 'lrFxI-iSEg_3Ch-rAkr7zYVigsWzs3qhck_fZ4bFmaRx1sLmkjpb8gvjBbbXsd9DGnxcRbDY5icqU7xokE6iDbN7chCS5rHJLEOv2bOQdmI=';

      const response = await axios.post(
        'https://outpost.mapmyindia.com/api/security/oauth/token',
        `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
      );

      const newToken = response.data.access_token;
      const newTokenString = JSON.stringify(newToken);
      console.log('Generated new token:', newToken);

      // Save the new token to AsyncStorage

      try {
        await AsyncStorage.setItem('mapleToken', newTokenString);
        // const token= await AsyncStorage.getItem('mapleToken')
        // console.log('Token stored successfully!',token);
      } catch (error) {
        console.error('Error storing token:', error);
      }


      return newToken;
    } catch (error) {
      console.error('Error generating token:', error);
      throw error;
    }
  };

  const handlePincodeChange = async (text) => {
    setPincode(text);
    try {
      const apiKey = '1fd297cf-9586-4d48-a5f7-09e009761c15';
      const response = await fetch(
        `https://atlas.mapmyindia.com/api/places/search/json?query=${text}&types=postal_code&refLocation=${location.latitude},${location.longitude}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const data = await response.json();
      setPlaceName(data)
      if (data.suggestedLocations && data.suggestedLocations.length > 0) {
        const pincodeData = data.suggestedLocations[0];
        setDistrict(pincodeData.district);
        setCity(pincodeData.city);
        setState(pincodeData.state);
        setCountry(pincodeData.country);
      }
    } catch (error) {
      console.error('Error fetching pincode suggestions:', error);
    }
  };
  
  const handleStateChange = async (text) => {
    setState(text);
    try {
      const apiKey = '1fd297cf-9586-4d48-a5f7-09e009761c15';
      const response = await fetch(
        `https://atlas.mapmyindia.com/api/places/search/json?query=${text}&types=state&withDist=false&withPincode=false&withSTD=false&refLocation=28.6139,77.2090`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const data = await response.json();
  
      if (data.suggestedLocations && data.suggestedLocations.length > 0) {
        setCountry(data.suggestedLocations[0].country);
      }
    } catch (error) {
      console.error('Error fetching state suggestions:', error);
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
          {/* {suggestions.length > 0 && renderSuggestions()} */}
          {renderSuggestions()}
          {districtSuggestions.length > 0 && renderDistrictSuggestions()}
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
                onChangeText={handlePincodeChange}
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