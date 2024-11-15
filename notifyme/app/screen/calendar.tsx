// ProfileScreen.tsx
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Animated, Modal, FlatList } from 'react-native';
import { Link } from 'expo-router';
import { Calendar } from 'react-native-calendars';
import styles from '../styles/calendarstyles';

const CalendarScreen = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [slideAnim] = useState(new Animated.Value(0));
  const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Sample categories - you can replace with your actual categories from a database
  const categories = [
    { id: '1', name: 'Work' },
    { id: '2', name: 'B-day' },
    { id: '3', name: 'Occasion' },
    { id: '4', name: 'Special' },
  ];

  const toggleReminder = () => {
    const toValue = isExpanded ? 0 : 1;
    
    Animated.spring(slideAnim, {
      toValue,
      useNativeDriver: true,
      friction: 8,
    }).start();
    
    setIsExpanded(!isExpanded);
  };

  const toggleCategoryModal = () => {
    setIsCategoryModalVisible(!isCategoryModalVisible);
  };

  const handleCategorySelect = (category: { id: string, name: string }) => {
    setSelectedCategory(category.name);
    setIsCategoryModalVisible(false);
  };

  const renderCategoryItem = ({ item }: { item: { id: string, name: string } }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => handleCategorySelect(item)}
    >
      <Text style={styles.categoryItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        theme={{
          calendarBackground: '#A8D8E4',
          textSectionTitleColor: '#000',
          dayTextColor: '#000',
          todayTextColor: '#000',
          selectedDayTextColor: '#fff',
          monthTextColor: '#000',
          textDisabledColor: '#666',
          arrowColor: '#000',
        }}
      />

      {/* Category Selection Modal */}
      <Modal
        visible={isCategoryModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleCategoryModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={categories}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              ListFooterComponent={
                <TouchableOpacity 
                  style={styles.createNewButton}
                  onPress={() => {
                    // Handle creating new category
                    console.log('Create new category');
                  }}
                >
                  <Text style={styles.createNewButtonText}>+ Create new</Text>
                </TouchableOpacity>
              }
            />
          </View>
        </View>
      </Modal>

      {/* Animated Reminder Input Card */}
      <Animated.View
        style={[
          styles.reminderCard,
          {
            transform: [
              {
                translateY: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [500, 0], // Slides up from bottom
                }),
              },
            ],
          },
        ]}
      >
        <TextInput
          style={styles.reminderInput}
          placeholder="Input new reminder here"
          placeholderTextColor="#666"
        />
        <View style={styles.categoryRow}>
          <TouchableOpacity 
            style={styles.categoryButton}
            onPress={toggleCategoryModal}
          >
            <Text style={styles.categoryButtonText}>
              {selectedCategory || 'category'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calendarButton}>
            <Image 
              source={require('../screen/images/calendar-day.png')} 
              style={styles.categoryIcon}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* No Reminder Text - Only show when not expanded */}
      {!isExpanded && (
        <Text style={styles.noReminderText}>
          No reminder for the{'\n'}click "+" to create your task.
        </Text>
      )}

      {/* Toggle Button */}
      <TouchableOpacity 
        style={styles.addButton}
        onPress={toggleReminder}
      >
        <Text style={styles.addButtonText}>{isExpanded ? '-' : '+'}</Text>
      </TouchableOpacity>

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
