import React from 'react';
import { View, StyleSheet } from 'react-native';
// Import Header and Footer components if created

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {/* <Header /> Optional */}
      {children}
      {/* <Footer /> Optional */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;
