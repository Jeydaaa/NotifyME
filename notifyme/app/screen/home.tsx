import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import styles from '../styles/homestyles';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [hasReminders, setHasReminders] = useState(false);
  const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(true);

  const categories = [
    { name: 'All', count: 0 },
    { name: 'Work', count: 0 },
    { name: 'B-day', count: 0 },
    { name: 'Occasion', count: 0 },
    { name: 'Special', count: 0 },
  ];
  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const renderContent = () => {
    if (!hasReminders) {
      return (
        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyStateText}>
            No reminder in this category{'\n'}
            click "+" to create your task.
          </Text>
        </View>
      );
    }
    return null; // Return your reminder list here when there are reminders
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
        <TouchableOpacity style={styles.menuButton} onPress={toggleSidebar}>
          <Image source={require('./images/menu-burger.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.tabScrollView}
          contentContainerStyle={styles.tabScrollContent}
        >
          {['All', 'Work', 'B-day', 'Occasion', 'Special'].map((tab) => (
            <TouchableOpacity 
              key={tab} 
              style={[
                styles.tabButton,
                activeTab === tab && styles.activeTab
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText
              ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.moreOptionsButton}>
          <Image source={require('../screen/images/menu-vertical.png')} style={styles.moreOptionsIcon} />
        </TouchableOpacity>
      </View>

      {/* Reminders Section */}
      <View style={styles.remindersContainer}>
        <View style={styles.reminderHeader}>
          <Text style={styles.remindersText}>Reminders</Text>
          <Image 
            source={require('./images/arrow-down.png')} 
            style={styles.arrowIcon} 
          />
        </View>
        {renderContent()}
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
          <ScrollView style={styles.sidebarScrollView}>
            {/* Logo and Close Button */}
            <View style={styles.sidebarHeader}>
              <Image source={require('./images/logo.png')} style={styles.sidebarLogo} />
              <TouchableOpacity onPress={toggleSidebar}>
                <Image source={require('./images/menu-burger.png')} style={styles.sidebarmenuIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.dividerLine} />

            {/* Categories Section */}
            <TouchableOpacity 
              style={styles.sidebarSection}
              onPress={() => setIsCategoriesExpanded(!isCategoriesExpanded)}
            >
              <View style={styles.sectionHeader}>
                <Image source={require('./images/grid.png')} style={styles.sidebarIcon} />
                <Text style={styles.sectionTitle}>Categories</Text>
                <Image 
                  source={require('./images/arrow-down.png')} 
                  style={[
                    styles.arrowIcon,
                    isCategoriesExpanded && styles.arrowUp
                  ]} 
                />
              </View>
            </TouchableOpacity>

            {isCategoriesExpanded && (
              <View style={styles.categoriesList}>
                {categories.map((category) => (
                  <TouchableOpacity 
                    key={category.name}
                    style={styles.categoryItem}
                  >
                    <Image source={require('./images/list.png')} style={styles.categoryIcon} />
                    <Text style={styles.categoryText}>{category.name}</Text>
                    <Text style={styles.categoryCount}>{category.count}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Create New Button */}
            <TouchableOpacity style={styles.sidebarButton}>
              <Image source={require('./images/plus.png')} style={styles.sidebarIcon} />
              <Text style={styles.sidebarButtonText}>Create New</Text>
            </TouchableOpacity>

            {/* Star Reminder Button */}
            <TouchableOpacity style={styles.sidebarButton}>
              <Image source={require('./images/star.png')} style={styles.sidebarIcon} />
              <Text style={styles.sidebarButtonText}>Star Reminder</Text>
            </TouchableOpacity>

            {/* Themes Button */}
            <TouchableOpacity style={styles.sidebarButton}>
              <Image source={require('./images/palette.png')} style={styles.sidebarIcon} />
              <Text style={styles.sidebarButtonText}>Themes</Text>
            </TouchableOpacity>

            {/* FAQ Button */}
            <TouchableOpacity style={styles.sidebarButton}>
              <Image source={require('./images/help.png')} style={styles.sidebarIcon} />
              <Text style={styles.sidebarButtonText}>FAQ</Text>
            </TouchableOpacity>

            {/* Settings */}
            <TouchableOpacity style={styles.sidebarButton}>
              <Image source={require('./images/settings.png')} style={styles.sidebarIcon} />
              <Text style ={styles.sidebarButtonText}>Settings</Text>
            </TouchableOpacity>

          </ScrollView>
        </Animated.View>
      )}
    </View>
  );
};

export default HomeScreen;
