import React from 'react'

const SearchSongs =(keyword)=> new Promise(function(resolve, reject) {
    fetch(`https://itunes.apple.com/search?term=${keyword}`, {
        method: 'GET'
        }).then(res=>{
            return resolve(res.body)
        }
            ,(err)=>{
            return reject("error")
        });


}) 



export default SearchSongs;
  