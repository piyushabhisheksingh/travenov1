import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class Home extends Component<{}> {

	render() {
		return(
			<View style={styles.container}>
					<Text style={styles.signupText}>Home</Text>
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
