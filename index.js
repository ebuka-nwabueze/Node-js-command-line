#!/usr/bin/env node

// const fs = require('fs');
import fs from 'fs';
import chalk from 'chalk';
import path from 'path';

const {lstat} = fs.promises

// looks to see if the file is called with directory or it defaults to the cwd
const targetDir = process.argv[2] || process.cwd()

fs.readdir(targetDir, async (err,filenames)=>{

    if(err){
        console.log(err);
        return
    }

    // statPromises is a new list created after the callback has been applied on each element of filenames list.
    // each returned element is a promise.
    const statPromises = filenames.map((filename)=>{ 
        return lstat(path.join(targetDir,filename))
    });
    //resolved list of all promises above
    const allStats = await Promise.all(statPromises);

    // loop over allStat to print the values
    for(let stat of allStats){
        const index = allStats.indexOf(stat);

        if (stat.isFile()){
            console.log(chalk.green(filenames[index]))
        }else{
            console.log(chalk.bold.yellow(filenames[index])) // work on this chalk module
        }
    }

}); //end of readdir
