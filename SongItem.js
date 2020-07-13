import React from 'react';

import { Text, View,StyleSheet,Image,ActivityIndicator,TouchableHighlight } from 'react-native';

export default function SongItem(props){
    return(
        <TouchableHighlight onPress={props.onClick}>
        <View style={{padding:10,display:"flex",flexDirection:"row",borderBottomWidth:1,borderBottomColor:'grey'}}>
                    <Image
                    style={{width:100,height:100}}
                    source={{
                        uri:props.album
                    }}
                    
                    />
                    <View style={{marginLeft:15,display:"flex",justifyContent:"center"}}>
                        <Text style={{fontSize:20,fontWeight:"bold",marginBottom:5}}>{props.trackName}</Text>
                        <Text style={{fontSize:18,color:"gray"}}>{props.collectionName}</Text>
                        <Text style={{fontSize:18,color:"grey"}}>{props.artistName}</Text>
                    </View>
                </View>
                </TouchableHighlight>
    )
}