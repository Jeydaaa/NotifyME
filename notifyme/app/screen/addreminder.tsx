import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Animated, Modal, FlatList, Image } from 'react-native';
import styles from '../styles/addreminderstyles';
import { MaterialIcons } from '@expo/vector-icons';

interface AddReminderProps {
  isExpanded: boolean;
  setIsExpanded: (value: boolean) => void;
}

const AddReminder = ({ isExpanded, setIsExpanded }: AddReminderProps) => {
  const [slideAnim] = useState(new Animated.Value(0));
  const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isCreateCategoryModalVisible, setIsCreateCategoryModalVisible] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');

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

  const toggleCreateCategoryModal = () => {
    setIsCreateCategoryModalVisible(!isCreateCategoryModalVisible);
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
    <>
      {isExpanded && <View style={styles.overlay} />}
      
      <Animated.View
        style={[
          styles.reminderCard,
          {
            transform: [
              {
                translateY: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [500, 0],
                }),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={toggleReminder}
        >
          <MaterialIcons name="close" size={24} color="#333" />
        </TouchableOpacity>

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
            <MaterialIcons name="calendar-today" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </Animated.View>

      <Modal
        visible={isCategoryModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleCategoryModal}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={toggleCategoryModal}
        >
          <TouchableOpacity 
            activeOpacity={1} 
            onPress={(e) => e.stopPropagation()}
            style={[styles.modalContent, { backgroundColor: '#E0F4F4' }]}
          >
            <FlatList
              data={categories}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ padding: 10 }}
              ListFooterComponent={
                <TouchableOpacity 
                  style={[styles.createNewButton, { flexDirection: 'row', alignItems: 'center' }]}
                  onPress={toggleCreateCategoryModal}
                >
                  <Text style={[styles.createNewButtonText, { color: '#333' }]}>+ Create new</Text>
                </TouchableOpacity>
              }
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

      <Modal
        visible={isCreateCategoryModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleCreateCategoryModal}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={toggleCreateCategoryModal}
        >
          <TouchableOpacity 
            activeOpacity={1}
            onPress={(e) => e.stopPropagation()}
            style={[styles.createCategoryModalContent, { backgroundColor: '#fff' }]}
          >
            <TouchableOpacity 
              style={styles.closeButtonContainer}
              onPress={toggleCreateCategoryModal}
            >
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>

            <Text style={styles.createCategoryTitle}>Create new Category</Text>
            
            <TextInput
              style={styles.categoryInput}
              value={newCategoryName}
              onChangeText={setNewCategoryName}
              placeholder="Enter category name"
            />
            
            <TouchableOpacity 
              style={styles.saveButton}
              onPress={() => {
                console.log('Saving category:', newCategoryName);
                setNewCategoryName('');
                toggleCreateCategoryModal();
              }}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

      {!isExpanded && (
        <>
         
          <TouchableOpacity 
            style={styles.addButton}
            onPress={toggleReminder}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </>
      )}
    </>
  );
};

export default AddReminder; 