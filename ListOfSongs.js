import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { Text, View,StyleSheet,Image,ActivityIndicator,TouchableHighlight } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { divide, set } from 'react-native-reanimated';

class ListOfSongs extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            search:"",
            isLoading:true,
            songs:[]
        }
        this.songItem = this.songItem.bind(this);
        this.loadSongs =this.loadSongs.bind(this);
        this.searchSongs = this.searchSongs.bind(this);

    }

    componentDidMount(){
        this.loadSongs();
    }

    style =  StyleSheet.create({
        searchBar:{
            elevation:1,
            padding:23,
            margin:0,
        }
    });

    loadSongs(){
        this.setState({
            isLoading:true
        });
        fetch('https://itunes.apple.com/search?term=jack+johnson', {
            method: 'GET'
            }).then((res)=>res.json()).then(data=>{
                this.setState({
                    isLoading:false,
                    songs:data.results
                });
                
            });
    }

    searchSongs(){
        this.setState({
            isLoading:true
        });
        fetch(`https://itunes.apple.com/search?term=${this.state.search}`, {
            method: 'GET'
            }).then((res)=>res.json()).then(data=>{
                this.setState({
                    isLoading:false,
                    songs:data.results
                });
            });
    }
    loader(){
        return(
            <View style={{display:"flex",justifyContent:"center",alignItems:"center",flex:1}}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }
    render(){
        if(this.state.isLoading){
            return this.loader()
        }else{
            return (
                <View>
                    <TextInput style={this.style.searchBar} placeholder="Search Artist" onChangeText={(val)=>{
                        this.setState({
                            search:val
                        })
                    }}
                    onSubmitEditing={this.searchSongs}
                    />
                    <ScrollView>
                        {this.state.songs.length!==0?this.state.songs.slice(0,26).map((item)=>{
                            return <this.songItem album={item.artworkUrl100} trackName={item.trackName} collectionName={item.collectionName} artistName={item.artistName} price={item.trackPrice} releaseDate={item.releaseDate} />
                        }):""}
                    </ScrollView>
                </View>
            )
        }
    }
    songItem(props){
        return(
            <TouchableHighlight onPress={()=>{
                this.props.navigation.navigate('SongView', { data: props })
            }}>
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
}


export default ListOfSongs;