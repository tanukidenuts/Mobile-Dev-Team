import { StatusBar } from 'expo-status-bar';
import {StyleSheet, 
        Text, 
        View, 
        Image,
        Platform,
        SafeAreaView,
       } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style = {{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: 'column',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeigt : 0,
    }}>
      <View style = {{backgroundColor: 'dodgerblue', flex: .2,}}>
        <View style = {{flexDirection: 'row', paddingTop: 40, justifyContent: 'center'}}>
        <Image source={require('./assets/GCASH-Logo.png')}
             style={{width: 40, height: 40}}
      />
      <Text style = {styles.gcash}>GCash</Text>
        </View>
      
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '50%',
    height: '10%',
  },
  gcash: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40
  },
  
 
});
