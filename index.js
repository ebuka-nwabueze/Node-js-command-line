#!/usr/bin/env node

const fs = require('fs');

fs.readdir(process.cwd(),(err,filenames)=>{

    if(err){
        console.log(err);
        return
    }

    const allStats = Array(filenames.length).fill(null) // create an empty array with the same number of files
    
    for(let filename of filenames){
        fs.lstat(filename,(err,stats) => {

        const index = filenames.indexOf(filename) // get the index of the current iteration
        

        if (err){
            console.log(err)
        }

        allStats[index] = stats; // store the value of the returned stats value using the same index position in the new allStats array
        
         const ready = allStats.every((el)=>{
            return el;

        }); //evaluates to true there are no more null values in the allStats array 
        // on every loop ready function is evaluating the all stats to ensure there are no more fallsy values

        if (ready){
            allStats.forEach((stats, index)=>{
                console.log(filenames[index],stats.isFile())
            });
        }
    }); //end of lstat

    }; //end of for loop in the directory.
}); //end of readdir
