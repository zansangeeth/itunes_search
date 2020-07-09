import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { Text, View, Image } from 'react-native';
import moment from 'moment';


const Stack = createStackNavigator();

const SongView = ({ route, navigation }) => {

    const { data } = route.params;

      return (
    <View>
        <Image style={{width:"100%",height:250}}
        source={{
            uri:data.album
        }}
        />
        <View style={{padding:20}}>
            <Text style={{fontSize:18,marginBottom:5}}>Track Name : {data.trackName} </Text>
            <Text  style={{fontSize:18,marginBottom:5}}>Collection Name : {data.collectionName} </Text>
            <Text style={{fontSize:18,marginBottom:5}}>Artist Name : {data.artistName}</Text>
            <Text style={{fontSize:18,marginBottom:5}}>Price : USD {data.price} </Text>
            <Text style={{fontSize:18,marginBottom:5}}>Release Date : {moment(data.releaseDate).format("DD/MM/yyyy HH:mm")}</Text>
        </View>
    </View>
  );
}

export default SongView;