import { StyleSheet } from 'react-native';
import Colors from '../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  searchBar: {
  	zIndex: 9999999999,
  	width: "100%",
  	height: 'inherit'
  }
});

export default styles;
