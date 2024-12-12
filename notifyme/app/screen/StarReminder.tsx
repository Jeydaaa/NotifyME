import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StarReminderScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Starred Reminder</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Title</Text>
        <Text style={styles.tableHeaderText}>Category</Text>
        <Text style={styles.tableHeaderText}>Date & Time</Text>
      </View>
      <ScrollView>
        {/* Example reminder item */}
        <View style={styles.reminderRow}>
          <Text style={styles.reminderText}>Example Reminder Title</Text>
          <Text style={styles.reminderText}>Work</Text>
          <Text style={styles.reminderText}>2023-10-01 10:00 AM</Text>
        </View>
        {/* Add more reminder rows as needed */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#A0D3E8',
    alignItems: 'stretch',
  },
  backButton: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: 'transparent',
  },
  backButtonText: {
    fontSize: 50,
    color: '#000',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#7FB3D5',
    padding: 10,
    width: '100%',
  },
  tableHeaderText: {
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  reminderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  reminderText: {
    flex: 1,
    textAlign: 'center',
  },
});

export default StarReminderScreen;