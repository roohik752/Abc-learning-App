import React from 'react';
import {
    View,
    Text,
    Linking,
    TouchableOpacity,
    Image,
    Share,
} from 'react-native';


const Sidebar = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', height: 150, flexDirection: 'row', alignItems: 'center', backgroundColor: '#131324' }}>
                <Text style={{ fontSize: 23, fontStyle: 'italic', fontWeight: 'bold', color: 'white', textAlign: 'center', padding: '17%'  }}>Menu</Text>
            </View>
            <View style={{padding:20,paddingLeft:25,borderBottomWidth:0.5}}>
                <TouchableOpacity>
                    <Text style={{color: '#131324',fontSize:20,marginLeft: 25,}}>Alphabet A B C</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Sidebar;
