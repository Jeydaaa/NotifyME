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

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    zIndex: 5, // Ensure overlay is above the main screen content
  },
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '75%', // Covers 3/4 of the screen width
    backgroundColor: '#C5DEE3',
    zIndex: 10, // Ensures it appears above other components
  },
  sidebarTop: {
    height: '20%', // Takes up 20% of the sidebar's height
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C5DEE3', // Background color for top section
  },
  sidebarContent: {
    height: '80%', // Takes up the remaining 80%
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidebarLogo: {
    width: 100, // Adjust logo size as needed
    height: 100,
    resizeMode: 'contain',
  },
  sidebarmenuIcon: {
    width: 24,
    height: 24,
  },

  dividerLine: {
    height: 1,          // Thickness of the line
    backgroundColor: '#ccc', // Color of the line, adjust as needed
    width: '100%',      // Full width of the sidebar
  },

  sidebarHeader: {
    flexDirection: 'row',       // Align items horizontally
    justifyContent: 'space-between', // Space logo and button to opposite ends
    alignItems: 'center',       // Center items vertically
    paddingHorizontal: 10,
  },

  sidebarText: {
    width: 30,
    height: 30
  }

});

export default styles;
