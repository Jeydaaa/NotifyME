// ProfileScreen.tsx
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Link } from 'expo-router';
import styles from '../styles/profilestyles';

const ProfileScreen = () => {
    
  return (
    <View style={styles.container}>
      {/* User Profile Section */}
      <View style={styles.profileSection}>
        <Image 
          source={require('../screen/images/avatar.png')} 
          style={styles.avatar}
        />
        <Text style={styles.username}>Username</Text>
      </View>

      {/* Reminder Categories Filter */}
      <View style={styles.filterSection}>
        <Text style={styles.filterLabel}>Pending reminders in categories</Text>
        <View style={styles.filterOptions}>
          <Text style={styles.filterOption}>All</Text>
          <Text style={styles.filterOption}>1 week</Text>
          <Text style={styles.filterOption}>1 month</Text>
        </View>
      </View>

      {/* Reminder Overview Section */}
      <Text style={styles.sectionTitle}>Reminder Overview</Text>
      <View style={styles.overviewContainer}>
        <View style={styles.overviewBox}>
          <Text style={styles.overviewNumber}>0</Text>
          <Text style={styles.overviewLabel}>Completed</Text>
        </View>
        <View style={styles.overviewBox}>
          <Text style={styles.overviewNumber}>0</Text>
          <Text style={styles.overviewLabel}>Pending</Text>
        </View>
      </View>

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

export default ProfileScreen;
