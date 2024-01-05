import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Profile = ({ navigation }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const profiles = [
    {value: 'Male', pic:require('../assets/faces/b3.png')},
    {value: 'Female', pic:require('../assets/faces/g4.png')}
  ];

  const renderProfile = ({ item }) => {
    const isSelected = item.pic === selectedProfile;

    return (
      <View style={{flexDirection: 'column',height:250}}>
        <TouchableOpacity
          style={[
            styles.box,
            isSelected && { borderColor: 'green', borderWidth: 3, }
          ]}
          onPress={() => setSelectedProfile(item.pic)}
        >
          <Image source={item.pic} style={styles.image2} resizeMode='contain' />
          <Text style={styles.text3}>{item.value}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleContinue = () => {
    if (selectedProfile === profiles[0].pic) {
      navigation.navigate('MaleProfile');
    } else if (selectedProfile === profiles[1].pic) {
      navigation.navigate('FemaleProfile');
    }
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#4CBB17']}
      style={styles.linearGradient}
      start={{ x: 0.4, y: 0.4 }}
    >
      <View style={{ flexDirection: 'row', padding: 15, marginTop: 40, justifyContent: 'space-between' }}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
        >
          <Image source={require('../assets/img/boy1.png')} style={styles.image} />
          <Text style={styles.text}>Hi</Text><Text style={styles.text1}>Charlie</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
          >
            <Image source={require('../assets/img/bars.png')} style={styles.image1} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: 1, width: '100%', backgroundColor: 'rgba(0, 54, 159, 0.25)' }}></View>
      <Container>
        <View style={styles.boxContainer}>
          <FlatList
            data={profiles}
            renderItem={renderProfile}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            // contentContainerStyle={{ marginTop: 30 }}
          />
        </View>
      </Container>
      <TouchableOpacity
        style={styles.button}
        onPress={handleContinue}
      >
        <Text style={styles.text2}>Continue</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Profile;

const Container = styled.View`

  width:100%
  padding-left: ${responsiveWidth(1)}px;
  padding-right: ${responsiveWidth(1)}px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${responsiveHeight(3)}px;
  padding-top: 5px;
`;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  image: {
    height: 40,
    width: 40,
    backgroundColor: '#000',
    borderRadius: 20,
    marginRight: 10
  },
  text: {
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center'
  },
  image1: {
    height: 30,
    width: 30,
    marginTop: 5,
    alignContent: 'flex-end'
  },
  text1: {
    fontSize: 22,
    color: '#000',
    fontWeight: '900',
    alignSelf: 'center'
  },
  boxContainer: {
    alignItems: 'center',
    marginVertical: 150,
    justifyContent: 'space-between'
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: '#000',
    borderRadius: 100,
    // margin: 10
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image2: {
    height: 120,
    width: 105,
    alignSelf: 'center',
    marginVertical: 5,
  },
  button: {
    height: 40,
    width: 335,
    backgroundColor: '#000',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: -220
  },
  text2: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700'
  },
  text3: {
    fontSize: 24,
    color: '#000',
    fontWeight: '700',
    marginTop: 50,
    textAlign: 'center'
  },
});