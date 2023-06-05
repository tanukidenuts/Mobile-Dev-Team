import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }}>
      <View style={{ backgroundColor: 'dodgerblue', flex: 0.35 }}>
        <View style={styles.header}>
          <Image
            source={require('./assets/GCASH-Logo.png')}
            style={styles.logo}
          />
          <Text style={styles.gcash}>GCash</Text>
        </View>

        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Image source={require('./assets/user.png')} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('./assets/menu.png')} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('./assets/Send.png')} />
          </TouchableOpacity>
        </View>

        <Text style={styles.balance}>Balance</Text>
        <Text style={styles.balanceNumber}>₱ 200,000.69</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  gcash: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    marginLeft: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    paddingTop: 40,
    justifyContent: 'center',
  },
  balance: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    position: 'absolute',
    bottom: 220,
    left: '50%',
    transform: [{ translateX: -40 }],
  },
  balanceNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    position: 'absolute',
    bottom: 170,
    left: '50%',
    transform: [{ translateX: -110 }],
  },
});
