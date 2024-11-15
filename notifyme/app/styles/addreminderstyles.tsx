import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  reminderCard: {
    position: 'absolute',
    bottom: 120,
    left: 20,
    right: 20,
    backgroundColor: '#7FCDCD',
    borderRadius: 25,
    padding: 25,
    paddingTop: 35,
    height: 200,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  reminderInput: {
    fontSize: 16,
    marginBottom: 30,
    backgroundColor: '#9ED8D8',
    borderRadius: 15,
    padding: 15,
    color: '#333',
    height: 50,
    marginTop: 5,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  categoryButton: {
    backgroundColor: '#9ED8D8',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  categoryButtonText: {
    color: '#333',
  },
  calendarButton: {
    backgroundColor: '#9ED8D8',
    padding: 8,
    borderRadius: 8,
  },
  addButton: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0B6477',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  addButtonText: {
    fontSize: 30,
    color: '#000',
  },
  
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#C5DEE3',
    borderRadius: 15,
    padding: 20,
    width: '50%',
    position: 'absolute',
    top: '40%',
    left: '25%',
  },
  categoryItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categoryItemText: {
    fontSize: 16,
    color: '#333',
  },
  createNewButton: {
    paddingVertical: 10,
    marginTop: 10,
  },
  createNewButtonText: {
    color: '#A8D8E4',
    fontSize: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    padding: 8,
    zIndex: 1,
  },
  closeIcon: {
    width: 20,
    height: 20,
    tintColor: '#333',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  createCategoryModalContent: {
    backgroundColor: '#C5DEE3',
    borderRadius: 15,
    padding: 20,
    width: '80%',
    position: 'absolute',
    top: '40%',
    left: '10%',
  },
  closeButtonContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 1,
    padding: 5,  // Makes the touch target larger
  },
  modalCloseButton: {  // Renamed to avoid duplicate property name
    fontSize: 20,
    color: '#666',
  },
  createCategoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },
  categoryInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  saveButton: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  saveButtonText: {
    color: '#000',
    fontSize: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity here
  },
});


export default styles; 