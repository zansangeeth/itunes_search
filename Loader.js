import React from 'react'

var FetchSongs =()=> new Promise(function(resolve, reject) {
    fetch('https://itunes.apple.com/search?term=jack+johnson', {
        method: 'GET'
        }).then(res=>resolve(res.json())).catch(err=>{
            return reject("error")
        });


}) 



export default FetchSongs;
  