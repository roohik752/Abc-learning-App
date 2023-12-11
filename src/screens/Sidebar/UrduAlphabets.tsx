import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { UrduAlphabet, Alphabet } from '../../data/alphabets'; // Replace with the correct path
import styled from 'styled-components/native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const UrduAlphabets = ({ navigation }) => {
  const [showOuter, setShowOuter] = useState(false); // State to manage visibility
  const [selectedAlphabet, setSelectedAlphabet] = useState<Alphabet | null>(null);

  const handleAlphabetClick = (alphabet: Alphabet) => {
    setShowOuter(!showOuter);
    setSelectedAlphabet(alphabet);
    navigation.navigate('UrduProductWithImage', { selectedAlphabet: alphabet });
  };

  const renderAlphabetItem = ({ item }: { item: Alphabet }) => (
    <View style={styles.box}>
      <TouchableOpacity onPress={() => handleAlphabetClick(item)}>
        <ImageBackground source={require('../../assets/img/Group.png')} style={styles.itemContainer}>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', padding: 15, marginTop: 40 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack('Urdu')}
            style={{ flexDirection: 'row' }}
          >
            <Image source={require('../../assets/img/Arrow.png')} style={styles.image1} />
            <Image source={require('../../assets/img/bar1.png')} style={styles.image2} />
            <Image source={require('../../assets/img/bar1.png')} style={styles.image2} />
          </TouchableOpacity>
          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.text}>Urdu</Text>
          </View>
        </View>
        <Container>
          <View style={styles.boxContainer}>
            <FlatList
              data={UrduAlphabet}
              renderItem={renderAlphabetItem}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              // style={styles.boxImage}
            />
          </View>
        </Container>
      </ScrollView>
    </LinearGradient>
  );
};

export default UrduAlphabets;


const Container = styled.View`

  width:100%
  padding-left: ${responsiveWidth(1)}px;
  padding-right: ${responsiveWidth(1)}px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${responsiveHeight(3)}px;
  padding-top: 5px;
  font-family: NotoNastaliqUrdu-Regular;
`;


const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  itemContainer: {
    height: 180,
    width: 166,
    overflow: 'hidden',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image1: {
    height: 20,
    width: 25,
    marginRight: 1,
    marginLeft: 10,
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
    marginTop: -8,
    // marginLeft: 80
    marginHorizontal: 90
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
  boxImage: {
    height: 180,
    width: 166,
  },
  text2: {
    fontSize: 110,
    color: '#000',
    marginRight: 8,
    justifyContent: 'center'
  },
})
