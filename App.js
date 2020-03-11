import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [showHello, setShowHello] = useState(false);
  const [showWorld, setShowWorld] = useState(false);
  return (
    <View style={styles.container}>
      <Text testID="welcome">Welcome</Text>
      {showHello ? <Text>Hello!!!</Text> : null}
      {showWorld ? <Text>World!!!</Text> : null}
      <TouchableOpacity
        onPress={() => setShowHello(s => !s)}
        testID="hello_button"
      >
        <Text>Toggle Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setShowWorld(s => !s)}
        testID="world_button"
      >
        <Text>Toggle World</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
