#!/usr/bin/env node

const fs = require('fs');
const util = require('util');

const {lstat} = fs.promises

fs.readdir(process.cwd(), async (err,filenames)=>{

    if(err){
        console.log(err);
        return
    }

    // statPromises is a new list created after the callback has been applied on each element of filenames list.
    // each returned element is a promise.
    const statPromises = filenames.map((filename)=>{ 
        return lstat(filename)
    });
    //resolved list of all promises above
    const allStats = await Promise.all(statPromises);

    // loop over allStat to print the values
    for(let stat of allStats){
        const index = allStats.indexOf(stat);

        console.log(filenames[index], stat.isFile())
    }

}); //end of readdir
