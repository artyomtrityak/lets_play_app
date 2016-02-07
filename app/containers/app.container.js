/*@flow*/
'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';


export default class AppContainer extends Component {
  render(): ReactElement {
    return (
     <TabBarIOS
        tintColor="white"
        barTintColor="black">
        <Icon.TabBarItem
          badge={1}
          title="Dashboard"
          iconName="th-list"
          selectedIconName="th-list"
          selected={true}
          onPress={() => {
            this.selectTab('dashboard');
            DashboardComponent.refresh(true);
          }}>

          <View><Text>Hello</Text></View>

        </Icon.TabBarItem>

        <Icon.TabBarItem
          title="Friends"
          iconName="users"
          selectedIconName="users"
          badge={12}
          selected={false}>

          <View><Text>Hello2</Text></View>

        </Icon.TabBarItem>

        <Icon.TabBarItem
          title="Profile"
          iconName="gear"
          selectedIconName="gear"
          selected={false}>

          <View><Text>Hello2</Text></View>

        </Icon.TabBarItem>

      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
