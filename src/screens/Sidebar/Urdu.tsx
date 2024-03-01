import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Urdu = ({ navigation }) => {

  return (
    <LinearGradient
      colors={['#FFFFFF', '#4CBB17']}
      style={styles.linearGradient}
      start={{ x: 0.4, y: 0.4 }}
    >
      <View style={{ flexDirection: 'row', padding: 15, marginTop: 40 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack('Home')}
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <View style={styles.outer}>
            <TouchableOpacity onPress={() => navigation.navigate('UrduAlphabets')} >
              <View style={styles.box1}>
                <Text style={styles.text1}>Urdu</Text>
                <Text style={styles.text1}>Alphabets</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UrduNumbers')} >
              <View style={styles.box2}>
                <Text style={styles.text1}>Urdu</Text>
                <Text style={styles.text1}>Numbers</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Container>
      </ScrollView>
    </LinearGradient>
  );
};

export default Urdu;


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
    marginTop: -8,
    // marginLeft: 80
    marginHorizontal: 90
  },
  outer: {
    flexDirection: 'column',
    width: '93%',
    justifyContent: 'space-between'
  },
  box1: {
    height: 300,
    backgroundColor: '#000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 10,
    paddingVertical: 85,
  },
  box2: {
    height: 300,
    backgroundColor: '#000',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 10,
    paddingVertical: 85,
  },
  text1: {
    fontSize: 50,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    // lineHeight: 300,
  },
})