import React from 'react';
import { StyleSheet, Text, Image, ImageBackground, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Profile = ({ navigation }) => {

  return (
    <LinearGradient
      colors={['#FFFFFF', '#4CBB17']}
      style={styles.linearGradient}
      start={{ x: 0.4, y: 0.4 }}
    >
      <View style={{ flexDirection: 'row', padding: 15, marginTop: 40, justifyContent: 'space-between' }}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          // onPress={() => navigation.navigate('Profile')}
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
      <View style={{ height: 1, width: '100%', backgroundColor: '#808080' }}></View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 190 }}>
        <TouchableOpacity
          style={styles.box}
        >
          <Image source={require('../assets/faces/b3.png')} style={styles.image2} resizeMode='contain' />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
        >
          <Image source={require('../assets/faces/g4.png')} style={styles.image2} resizeMode='contain' />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MaleProfile')}
      >
        <Text style={styles.text2}>Continue</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default Profile;

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
  box: {
    height: 150,
    width: 150,
    backgroundColor: '#000',
    borderRadius: 100,
  },
  image2: {
    height: 120,
    width: 120,
    position: 'relative',
    top: 16,
    alignSelf: 'center'
  },
  button: {
    height: 40,
    width: 335,
    backgroundColor: '#000',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  text2: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700'
  },
});