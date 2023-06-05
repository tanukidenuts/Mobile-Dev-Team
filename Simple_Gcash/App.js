import { StatusBar } from 'expo-status-bar';
import {StyleSheet, 
        Text, 
        View, 
        Image,
        Platform,
        SafeAreaView, TouchableOpacity
       } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style = {{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: 'column',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeigt : 0,
    }}>
      <View style = {{backgroundColor: 'dodgerblue', flex: .15,}}>
        <View style = {{flexDirection: 'row', paddingTop: 40, justifyContent: 'center'}}>
        <Image source={require('./assets/GCASH-Logo.png')}
             style={{width: 40, height: 40}}
      />
      
      <Text style = {styles.gcash}>GCash</Text>
        </View>
        <View style = {{flexDirection: 'row', paddingTop: 40, justifyContent: 'center', left: 150, bottom: 85}}>
        <TouchableOpacity>
        <Image source ={require("./assets/user.png")}/>
      </TouchableOpacity>
      </View>
      <View style = {{flexDirection: 'row', paddingTop: 40, justifyContent: 'center', right: 150, bottom: 160}}>
        <TouchableOpacity>
        <Image source ={require("./assets/menu.png")}/>
      </TouchableOpacity>
      </View>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '50%',
    height: '5%',
  },
  gcash: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    marginLeft: 10
  },
  
 
});
