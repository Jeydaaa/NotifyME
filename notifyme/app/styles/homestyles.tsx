import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8D8E4', // Background color
    alignItems: 'center',
    paddingTop: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200, 
    height: 100, 
    marginRight: 200,
    marginTop: 30,
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
    backgroundColor: '#FFF',
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
    justifyContent: 'space-between', // Adjusted for spacing
    backgroundColor: '#FFF',
    paddingVertical: 10,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center', // Center icons vertically
  },
  bottomTabButtonLeft: {
    flex: 1, // Takes the available space
    alignItems: 'center',
  },
  bottomTabButtonCenter: {
    flex: 1, // Center button, takes the available space
    alignItems: 'center',
  },
  bottomTabButtonRight: {
    flex: 1, // Takes the available space
    alignItems: 'center',
  },
  bottomTabText: {
    color: '#000',
  },
  bottomTabIcon: {
    width: 24, // Adjust icon size
    height: 24, // Adjust icon size
  },
  iconContainer: {
    alignItems: 'center', // Centers icons and text vertically
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    backgroundColor: '#1E90FF',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabText: {
    color: '#FFF',
    fontSize: 30,
  },
});

export default styles;
