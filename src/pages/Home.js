import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import Card from '../components/Card';


export default class Home extends Component<{}> {

	render() {
		return(
					<Card username="Piyush" avatar="https://unsplash.it/100?image=550" journey="life" media="https://github.com/saitoxu/InstaClone/raw/master/contents/images/town.jpg"/>
			)
	}
}
