#!/usr/bin/env node

const fs = require('fs');
// const chalk = require('chalk')

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

        if (stat.isFile()){
            console.log(filenames[index])
        }else{
            // console.log(chalk.bold(filenames[index])) // work on this chalk module
        }
    }

}); //end of readdir
