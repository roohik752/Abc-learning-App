import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animals, { Animal } from 'src/data/animals';
import styled from 'styled-components/native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const AnimalsName = ({ route, navigation }) => {

    const [showOuter, setShowOuter] = useState(false); // State to manage visibility
    const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  
    const handleAnimalClick = (animal: Animal) => {
      setShowOuter(!showOuter);
      setSelectedAnimal(animal);
      navigation.navigate('AnimalsNameWithImage', { selectedAnimal: animal });
    };
  
    const renderAnimalItem = ({ item }: { item: Animal }) => (
      <View style={styles.box}>
        <TouchableOpacity onPress={() => handleAnimalClick(item)} >
          <Text style={styles.text1} >{item.id+1}&nbsp;&nbsp;&nbsp;{item.name}</Text>
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
            onPress={() => navigation.goBack()}
            style={{ flexDirection: 'row' }}
          >
            <Image source={require('../../assets/img/Arrow.png')} style={styles.image1} />
            <Image source={require('../../assets/img/bar1.png')} style={styles.image2} />
            <Image source={require('../../assets/img/bar1.png')} style={styles.image2} />
          </TouchableOpacity>
          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.text}>Animals</Text>
          </View>
        </View>
        <Container>
        <View style={styles.boxContainer}>
            <FlatList
              data={Animals}
              renderItem={renderAnimalItem}
              keyExtractor={(item) => item.id.toString()}
              // numColumns={2}
            />
          </View>
        </Container>
      </ScrollView>
    </LinearGradient>
  );
};

export default AnimalsName;


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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -15,
    padding: 15,
  },
  box: {
    justifyContent: 'space-between',
  },
  // image3: {
  //   height: 180,
  //   width: 166
  // },
  text1: {
    fontSize: 25,
    color: '#000',
    fontWeight: '700'
  },
})