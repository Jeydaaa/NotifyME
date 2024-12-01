import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const categoriesData = [
    { id: '1', name: 'Work', count: 0 },
    { id: '2', name: 'Birthday', count: 0 },
    { id: '3', name: 'Occasion', count: 0 },
    { id: '4', name: 'Birthday', count: 0 }, // Duplicate entry
];

const CategoriesScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>← See All Categories</Text>
            <Text style={styles.title}>Categories</Text>
            <FlatList
                data={categoriesData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.categoryItem}>
                        <Text style={styles.categoryName}>{item.name}</Text>
                        <Text style={styles.categoryCount}>{item.count}</Text>
                    </View>
                )}
            />
            <Button title="Create new" onPress={() => {/* Handle create new category */}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0F7FA',
        padding: 20,
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    categoryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    categoryName: {
        fontSize: 18,
    },
    categoryCount: {
        fontSize: 18,
    },
});

export default CategoriesScreen;
