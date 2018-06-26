import React, { Component } from 'react';
import utf8 from 'utf8';
import base64 from 'base-64';
import {
  StyleSheet,
  AsyncStorage,
  Alert,
  Dimensions,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';


export default class Card extends Component<{}> {

constructor(){
  super()
}


render(){
  return(
    <View>
    <View style={styles.containerHeader}>
    <Image style={styles.avatarImage}
           source={{uri:this.props.avatar}}
         />
      <Text style={styles.usernameText}>
      {this.props.username}'s{" "}
      </Text>
      <Text style={styles.journeyText}>
       {this.props.journey} journey
      </Text>
      </View>

      <View style={styles.containerBody}>
      <Image style={styles.mediaImage} source={{uri:this.props.media}}/>
      <Text style={styles.footerText}>footer</Text>
      </View>
      </View>


  );
}

}

const styles = StyleSheet.create({
  containerHeader : {
    flexGrow: 1,
    flexDirection: 'row',


  },
  usernameText:{
  color:'rgba(0,0,0,0.6)',
  fontFamily: "Helvetica",
  fontSize:12


},
  containerBody : {
    flexGrow: 1,


  },
avatarImage:{
  width: 36,
  height: 36,
  margin: 12,
  borderRadius: 18,
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: 'lightgray'

},
mediaImage:{
  width: Dimensions.get('window').width * 0.95,
  height: Dimensions.get('window').height * 0.7,
  margin: 12,
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: 'lightgray',


},
journeyText:{
color:'rgba(0,0,0,0.6)',
fontFamily: "Helvetica",
fontSize:12
},
footerText:{
color:'rgba(0,0,0,0.6)',
fontFamily: "Helvetica",
fontSize:12
},
});
