import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balance}>Balance</Text>
        <Text style={styles.balanceNumber}>₱69</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceContainer: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  balance: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  balanceNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
  },
});
