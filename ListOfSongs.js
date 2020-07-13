import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SongItem} from './SongItem';
import FetchSongs from './Loader';

import React from 'react';
import { Text, View,StyleSheet,Image,ActivityIndicator,TouchableHighlight } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { divide, set } from 'react-native-reanimated';
import SearchSongs from './SearchSong';

class ListOfSongs extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            search:"",
            isLoading:true,
            songs:[]
        }
       
        this.loadSongs =this.loadSongs.bind(this);
        this.searchSongs = this.searchSongs.bind(this);

    }

    componentDidMount(){
        this.loadSongs();
        
    }

    loadSongs(){
        this.setState({
            isLoading:true
        });
        FetchSongs().then(res=>{
            console.log("========================================================================================================")
            console.log(res.results);
            console.log("============================================================================================================")
            console.log(typeof res);
            this.setState({
                isLoading:false,
                songs:res.results
            });
        });
        
        
    
    }


    style =  StyleSheet.create({
        searchBar:{
            elevation:1,
            padding:23,
            margin:0,
        }
    });



    searchSongs(){
        this.setState({
            isLoading:true
        });
        SearchSongs().then((res)=>{

        })
                    
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
                            return <SongItem onClick={()=>{
                               this.props.navigation.navigate('SongView', { data: props })
                            }} album={item.artworkUrl100} trackName={item.trackName} collectionName={item.collectionName} artistName={item.artistName} price={item.trackPrice} releaseDate={item.releaseDate} />
                        }):""}
                    </ScrollView>
                </View>
            )
        }
    }


    
}


export default ListOfSongs;