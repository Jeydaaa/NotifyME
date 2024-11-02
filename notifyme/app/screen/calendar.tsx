// ProfileScreen.tsx
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Link } from 'expo-router';
import styles from '../styles/calendarstyles';

const CalendarScreen = () => {
    
  return (
    <View style={styles.container}>
      <Text style={styles.calendarText}>Calendar Screen</Text>
      {/* Add more profile content here */}

      {/* Bottom Tab Bar */}
      <View style={styles.bottomTabBar}>
        <Link href="/screen/home" style={styles.bottomTabButtonLeft}>
          <View style={styles.iconContainer}>
            <Image source={require('../screen/images/bell.png')} style={styles.bottomTabIcon} />
            <Text style={styles.bottomTabText}>Reminders</Text>
          </View>
        </Link>
        <Link href="/screen/calendar" style={styles.bottomTabButtonCenter}>
          <View style={styles.iconContainer}>
            <Image source={require('../screen/images/whitecalendar.png')} style={styles.bottomTabIcon} />
            <Text style={styles.bottomTabText}>Calendar</Text>
          </View>
        </Link>
        <Link href="/screen/profile" style={styles.bottomTabButtonRight}>
          <View style={styles.iconContainer}>
            <Image source={require('../screen/images/user.png')} style={styles.bottomTabIcon} />
            <Text style={styles.bottomTabText}>Profile</Text>
          </View>
        </Link>
      </View>
    </View>
  );
};

export default CalendarScreen;
