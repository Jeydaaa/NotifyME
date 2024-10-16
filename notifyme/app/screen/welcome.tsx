import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Link } from 'expo-router';

export default function WelcomePage() {
  return (
    <>
      {/* Hide the status bar */}
      <StatusBar hidden={false} />

      {/* Fullscreen Background with solid color */}
      <View style={styles.background}>
        {/* NotifyME logo */}
        <Image
          source={require('../screen/images/logo.png')} // Correct relative path to logo image
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Welcome Text below the logo */}


        {/* Daily Reminder */}
        <Text style={styles.dailyReminderTitle}>Daily Reminder</Text>
        <Text style={styles.dailyReminderText}>
          "It doesn't matter how slow you go so long as you don't stop."
        </Text>

        {/* Get Started with Arrow on the right side */}
        <View style={styles.getStartedContainer}>
          <Link href="/screen/login"> 
            <Text style={styles.getStartedText}>
              Get Started <Text style={styles.arrow}>→</Text>
            </Text>
          </Link>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Fullscreen
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Ensure full width
    height: '100%', // Ensure full height
    backgroundColor: '#a3d8e7', // Set the solid color for background
  },
  logo: {
    width: 200, 
    height: 200, 
    marginBottom: 30, 
    marginTop: -50
},
 
  dailyReminderTitle: {
    fontSize: 24,
    color: '#black',
    fontWeight: '600',
    marginBottom: -10,
  },
  dailyReminderText: {
    fontSize: 16,
    color: '#black',
    textAlign: 'center',
    fontStyle: 'italic',
    marginVertical: 20,
    paddingHorizontal: 40,
  },
  getStartedContainer: {
    marginTop: 70, 
    alignSelf: 'flex-end', 
    paddingRight: 30,
  },
  getStartedText: {
    fontSize: 18,
    color: '#black',
    textAlign: 'right', 
  },
  arrow: {
    fontSize: 24,
    color: '#black', 
  },
});
