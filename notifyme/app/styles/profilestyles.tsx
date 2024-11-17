import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8D8E4', // Background color
    alignItems: 'center',
    paddingTop: 20,
  },
  bottomTabBar: {
    flexDirection: 'row',
    backgroundColor: '#A8D8E4',
    paddingVertical: 23,
    width: '100%',
    position: 'absolute',
    bottom: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
  bottomTabButtonLeft: {
    position: 'absolute',
    left: 20, // Position the "Reminders" icon on the left side
    alignItems: 'center',
  },
  bottomTabButtonCenter: {
    position: 'absolute',
    left: '47%', // Center the "Calendar" icon on the screen
    alignItems: 'center',
  },
  bottomTabButtonRight: {
    position: 'absolute',
    right: 20, // Position the "Profile" icon on the right side
    alignItems: 'center',
  },
  bottomTabText: {
    color: '#000',
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
  iconContainer: {
    alignItems: 'center', // Centers icons and text vertically
  },
  profileText: {
    color: 'black'
  },
    profileSection: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      paddingHorizontal: 20,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#5CD3C8',
      marginRight: 200,
    },
    username: {
      fontSize: 16,
      color: '#000',
    },
    filterSection: {
      width: '90%',
      height: 250,
      alignSelf: 'center',
      backgroundColor: '#C5DEE3',
      padding: 15,
      borderRadius: 10,
      marginVertical: 10,
      position: 'relative',
    },
    filterContainer: {
      backgroundColor: '#C5DEE3',
      borderRadius: 8,
      marginTop: 5,
      overflow: 'hidden',
    },
    
    picker: {
      height: 40,
      width: '100%',
    },

    filterLabel: {
      fontSize: 16,
      color: '#000',
    },
    filterOptions: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 10,
    },
    filterOption: {
      marginLeft: 10,
      padding: 5,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: 5,
    },
    sectionTitle: {
      fontSize: 18,
      marginTop: 20,
      marginBottom: 10,
      alignSelf: 'flex-start',
      marginLeft: 30,
    },
    overviewContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
      gap: 60,
    },
    overviewBox: {
      backgroundColor: '#C5DEE3',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      width: '40%',
    },
    overviewNumber: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    overviewLabel: {
      marginTop: 5,
    },
  
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },

  dropdownIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },

  dropdownContent: {
    position: 'absolute',
    top: 40, // Adjusted to position below the icon
    right: 15,
    backgroundColor: '#0B6477',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1000,
  },

  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    width: 100,
  },

});


export default styles;