import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class Notification extends Component<{}> {

	render() {
		return(
			<View style={styles.container}>
					<Text style={styles.signupText}>Notification</Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#ffffff',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupText: {
  	color:'rgba(0,0,0,0.6)',
    fontFamily: "Helvetica",
  	fontSize:16
  }
});
