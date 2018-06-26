import React, { Component } from 'react';
import utf8 from 'utf8'
import base64 from 'base-64'
import {
  StyleSheet,
  AsyncStorage,
  Alert,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Form extends Component<{}> {

constructor(){
  super()
}

  state = {
  username: '',
  password: '',
  error: 'Welcome'
}

	render(){
		return(

			<View style={styles.container}>

          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Email, Mobile number or Username"
              placeholderTextColor = "#777777"
              keyboardType="email-address"
              selectionColor='#00a1ad'
              onChangeText={username => this.setState({username})}
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              secureTextEntry={true}
              selectionColor='#00a1ad'
              placeholderTextColor = "#777777"
              onChangeText={password => this.setState({password})}
              ref={(input) => this.password = input}
              />
           <TouchableOpacity onPress={this._submitForm} style={styles.button}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>
           <Text style={styles.errorText}>{this.state.error}</Text>
  		</View>
			)
	}
  _submitForm = () => {
    const { username, password } = this.state
    if (username=='' || password==''){
      alert('Please fill the form fields');
    }
    else{

    var url='https://google.com';

  fetch(url, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: base64.encode(utf8.encode(username)),
    password: base64.encode(utf8.encode(password)),
    thirdParam: base64.encode(utf8.encode(this.props.type)),
  }),
});

    Actions.tabbar();

    }


    // do some stuff here…
  };
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(250,250,250,1)',
    /*borderRadius: 25,*/
    paddingHorizontal:16,
    fontSize:16,
    fontFamily: "Helvetica",
    color:'#000000',
    marginVertical: 10,
    borderColor: '#000000',
    borderWidth: 0.7
  },
  button: {
    width:300,
    backgroundColor:'#00a1ad',
     /*borderRadius: 25,*/
      marginVertical: 10,
      paddingVertical: 7
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    fontFamily: "Helvetica",
    color:'#ffffff',
    textAlign:'center'
  },
  errorText: {
    fontSize:16,
    fontWeight:'500',
    fontFamily: "Helvetica",
    color:'#cc0000',
    textAlign:'center',
    marginVertical: 15
  }
});
