import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import { Link } from 'expo-router';
import styles from '../styles/homestyles';

const HomeScreen = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <View style={styles.container}>
      {/* Dim Background Overlay */}
      {isSidebarVisible && <View style={styles.overlay} />}

      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image source={require('./images/logo.png')} style={styles.logo} />
      </View>

      {/* Menu Tabs */}
      <View style={styles.menuTabs}>
        <TouchableOpacity style={styles.tabButton} onPress={toggleSidebar}>
          <Image source={require('./images/menu-burger.png')} style={styles.menuIcon} />
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
            <Image source={require('./images/whitebell.png')} style={styles.bottomTabIcon} />
            <Text style={styles.bottomTabText}>Reminders</Text>
          </View>
        </Link>
        <Link href="/screen/calendar" style={styles.bottomTabButtonCenter}>
          <View style={styles.iconContainer}>
            <Image source={require('./images/calendar-day.png')} style={styles.bottomTabIcon} />
            <Text style={styles.bottomTabText}>Calendar</Text>
          </View>
        </Link>
        <Link href="/screen/profile" style={styles.bottomTabButtonRight}>
          <View style={styles.iconContainer}>
            <Image source={require('./images/user.png')} style={styles.bottomTabIcon} />
            <Text style={styles.bottomTabText}>Profile</Text>
          </View>
        </Link>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      {/* Sidebar */}
      {isSidebarVisible && (
  <Animated.View style={styles.sidebar}>
    {/* Top Section (20% of Sidebar Height) */}
    <View style={styles.sidebarTop}>
      <View style={styles.sidebarHeader}>
        <Image source={require('./images/logo.png')} style={styles.sidebarLogo} />
        <TouchableOpacity onPress={toggleSidebar}>
          <Image source={require('./images/menu-burger.png')} style={styles.sidebarmenuIcon} />
        </TouchableOpacity>
      </View>
    </View>

    {/* Divider Line */}
    <View style={styles.dividerLine} />

    {/* Main Content (80% of Sidebar Height) */}
    <View style={styles.sidebarContent}>
      <Text style={styles.sidebarText}>Sidebar Content</Text>
    </View>
  </Animated.View>
      )}
    </View>
  );
};

export default HomeScreen;
