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
  calendarText: {
    color: 'black'
  },
});

export default styles;