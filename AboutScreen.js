import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  const [easterEgg, setEasterEgg] = useState(false);
  const currentDate = new Date().toDateString();

  const showEasterEgg = () => {
    setEasterEgg(true);
    Alert.alert("Easter Egg", "You found the hidden message!");
  };

  return (
    <MainLayout>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        <Text>Name of the App</Text>
        <TouchableOpacity onPress={showEasterEgg}>
          <Text>Your Name</Text>
        </TouchableOpacity>
        <Text>{currentDate}</Text>
        {easterEgg && <Text>Hidden Message Here!</Text>}
      </View>
    </MainLayout>
  );
}

export default AboutScreen;
