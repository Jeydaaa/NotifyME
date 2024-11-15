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
    paddingVertical: 10,
    width: '100%',
  },
  
  menuButton: {
    padding: 8,
    marginLeft: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  menuIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  
  tabScrollView: {
    flex: 1,
  },
  
  tabScrollContent: {
    paddingHorizontal: 10,
  },
  
  tabButton: {
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  
  activeTab: {
    backgroundColor: '#0B6477',
  },
  
  tabText: {
    fontSize: 14,
    color: '#666666',
  },
  
  activeTabText: {
    color: '#000000',
    fontWeight: '500',
  },
  
  moreOptionsButton: {
    padding: 8,
    marginRight: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  moreOptionsIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  reminderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  
  arrowIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150, // Adjust this value as needed
  },
  
  emptyStateText: {
    textAlign: 'center',
    color: '#666666',
    fontSize: 16,
    lineHeight: 24,
  },
  
  remindersText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: -50,
  },

  remindersContainer: {
    marginBottom: 20,
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
    bottom: 100,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0B6477',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  fabText: {
    fontSize: 30,
    color: '#000',
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

  sidebarScrollView: {
    flex: 1,
  },
  
  sidebarSection: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
    flex: 1,
  },
  
  sidebarIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  
  
  arrowUp: {
    transform: [{ rotate: '180deg' }],
  },
  
  categoriesList: {
    paddingLeft: 20,
  },
  
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  
  categoryIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 10,
  },
  
  categoryText: {
    flex: 1,
    fontSize: 14,
  },
  
  categoryCount: {
    fontSize: 14,
    color: '#666666',
  },
  
  sidebarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  
  sidebarButtonText: {
    marginLeft: 10,
    fontSize: 14,
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
