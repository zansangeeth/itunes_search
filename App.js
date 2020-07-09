import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { Text, View } from 'react-native';
import ListOfSongs from './ListOfSongs';
import SongView from './SongView';

const Stack = createStackNavigator();

const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ListOfSongs"
          component={ListOfSongs}
          options={{title:"Search Songs"}}
        />
        <Stack.Screen name="SongView" component={SongView} options={{title:"Song"}} />
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}

export default YourApp;