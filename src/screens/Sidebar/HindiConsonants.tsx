import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { HindiConsonant, Alphabet } from '../../data/alphabets'; // Replace with the correct path
import styled from 'styled-components/native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const HindiConsonants = ({ navigation }) => {

  const [showOuter, setShowOuter] = useState(false); // State to manage visibility
  const [selectedAlphabet, setSelectedAlphabet] = useState<Alphabet | null>(null);

  const handleAlphabetClick = (alphabet: Alphabet) => {
    setShowOuter(!showOuter);
    setSelectedAlphabet(alphabet);
    navigation.navigate('HindiProductWithImage', { selectedAlphabet: alphabet });
  };

  const renderAlphabetItem = ({ item }: { item: Alphabet }) => (
    <View style={styles.box}>
      <TouchableOpacity onPress={() => handleAlphabetClick(item)}>
        <ImageBackground source={require('../../assets/img/Group.png')} style={styles.itemContainer}>
          {/* <Image source={item.img1} style={styles.image3} /> */}
          <Text style={styles.text2}>{item.text1}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );

  return (
    <LinearGradient
      colors={['#FFFFFF', '#4CBB17']}
      style={styles.linearGradient}
      start={{ x: 0.4, y: 0.4 }}
    >
      <View style={{ flexDirection: 'row', padding: 15, marginTop: 40 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack('Hindi')}
            style={{ flexDirection: 'row' }}
          >
            <Image source={require('../../assets/img/Arrow.png')} style={styles.image1} />
            <Image source={require('../../assets/img/bar1.png')} style={styles.image2} />
            <Image source={require('../../assets/img/bar1.png')} style={styles.image2} />
          </TouchableOpacity>
          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.text}>वर्णमाला</Text>
          </View>
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <View style={styles.boxContainer}>
            <FlatList
              data={HindiConsonant}
              renderItem={renderAlphabetItem}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
            />
          </View>
        </Container>
      </ScrollView>
    </LinearGradient>
  );
};

export default HindiConsonants;


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
  image1: {
    height: 20,
    width: 25,
    marginRight: 1,
    marginLeft: 10,
  },
  itemContainer: {
    height: 180,
    width: 166,
    overflow: 'hidden',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image2: {
    height: 10,
    width: 5,
    marginRight: 1,
    marginTop: 5.3,
  },
  text: {
    fontSize: 32,
    color: '#000',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: -7.4,
    marginLeft: 70
  },
  boxContainer: {
    // justifyContent: 'space-around',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -15,
    padding: 15,
  },
  box: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image3: {
    height: 180,
    width: 166
  },
  text2: {
    fontSize: 110,
    color: '#000',
    // position: 'relative',
    // top: 30,
    // right: 45,
    // textAlign: 'center',
    marginRight: 8,
    justifyContent: 'center'
  },
})
