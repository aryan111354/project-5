import React from 'react';
import { View, Text, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout'; // Update the path as necessary

function HomeScreen({ navigation }) {
  return (
    <MainLayout>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
        {/* Add other components for your to-do list and form here */}
      </View>
    </MainLayout>
  );
}

export default HomeScreen;
