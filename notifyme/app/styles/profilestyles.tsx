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
      alignItems: 'center',
      marginTop: 20,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#00FF9D',
    },
    username: {
      fontSize: 18,
      marginTop: 10,
    },
    filterSection: {
      marginTop: 20,
      padding: 15,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 10,
    },
    filterLabel: {
      fontSize: 16,
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
    },
    overviewContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
    },
    overviewBox: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      width: '45%',
    },
    overviewNumber: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    overviewLabel: {
      marginTop: 5,
    },
  

});


export default styles;