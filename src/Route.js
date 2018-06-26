import React, { Component } from 'react';
import {Router, Stack, Scene,Tabs} from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View
  } from 'react-native';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Search from './pages/Search';
import Add from './pages/Add';
import Notification from './pages/Notification';
import Profile from './pages/Profile';

import Icon from 'react-native-vector-icons/MaterialIcons';
class TabIcon extends Component {
    render() {
        return (
                <Icon
                    name={this.props.title}
                    color={this.props.focused ? '#00a1ad4D' : '#00a1ad'}
                    size={30}
                />
        )
    }
  }


export default class Route extends Component<{}> {
	render() {
		return(
			<Router>

			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="signup" component={Signup} title="Signup"/>
			      <Scene key="home" component={Home} title="Home"/>
			      <Scene key="tabbar" tabs={true} tabBarStyle={{backgroundColor: '#ffffff'}} type='reset' tabBarPosition="bottom" showLabel={false} swipeEnabled={false}>
			      	<Scene key="home" component={Home} icon={TabIcon} title="home" initial={true} hideNavBar={true} />
			      	<Scene key="search" component={Search} title="search" icon={TabIcon} hideNavBar={true}/>
			      	<Scene key="add" component={Add} title="add" icon={TabIcon} hideNavBar={true}/>
			      	<Scene key="notification" component={Notification}  title="notifications" icon={TabIcon} hideNavBar={true}/>
			      	<Scene key="profile" component={Profile} title="verified-user" icon={TabIcon} hideNavBar={true}/>


			      </Scene>
			    </Stack>
			 </Router>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#ffffff',
    flex: 1,
    justifyContent :'center'
  }


});
