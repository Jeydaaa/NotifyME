import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import styles from '../styles/homestyles'; // Ensure to create your own styles

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image source={require('../screen/images/logo.png')} style={styles.logo} />
      </View>

      {/* Menu Tabs */}
      <View style={styles.menuTabs}>
        <TouchableOpacity style={styles.tabButton}>
          <Image source={require('../screen/images/menu-burger.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        {['All', 'Work', 'B-day', 'Occasion', 'Special'].map((tab) => (
          <TouchableOpacity key={tab} style={styles.tabButton}>
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Reminders Section */}
      <View style={styles.remindersContainer}>
        <Text style={styles.remindersText}>Reminders</Text>
      </View>

      {/* Bottom Tab Bar */}
      <View style={styles.bottomTabBar}>
        <Link href="/screen/home" style={styles.bottomTabButtonLeft}>
          <View style={styles.iconContainer}>
            <Image source={require('../screen/images/bell.png')} style={styles.bottomTabIcon} />
            <Text style={styles.bottomTabText}>Reminders</Text>
          </View>
        </Link>
        <Link href="/screen/calendar" style={styles.bottomTabButtonLeft}>
          <View style={styles.iconContainer}>
            <Image source={require('../screen/images/calendar-day.png')} style={styles.bottomTabIcon} />
            <Text style={styles.bottomTabText}>Calendar</Text>
          </View>
        </Link>
        <Link href="/screen/profile" style={styles.bottomTabButtonLeft}>
          <View style={styles.iconContainer}>
            <Image source={require('../screen/images/user.png')} style={styles.bottomTabIcon} />
            <Text style={styles.bottomTabText}>Profile</Text>
          </View>
        </Link>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
