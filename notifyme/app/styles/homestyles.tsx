import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8D8E4', // Background color
    alignItems: 'center',
    paddingTop: 20,
  },
  calendarContainer: {
    backgroundColor: '#A8D8E4',
    borderRadius: 8,
    padding:  16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200, 
    height: 100, 
    marginRight: 200,
    marginTop: -10,
    marginBottom: 20,
  },
  menuTabs: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10, // Space between tabs
    marginTop: -50
  },
  menuIcon: {
    width: 24, // Adjust icon size
    height: 24, // Adjust icon size
  },
  tabText: {
    color: '#000',
  },
  remindersContainer: {
    marginBottom: 20,
  },
  remindersText: {
    fontSize: 24,
    fontWeight: 'bold',
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
  reminderbottomTabText: {
    color:'#FFFFFF'
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
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 70,
    backgroundColor: '#0B6477',
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabText: {
    color: '#black',
    fontSize: 40,
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
