#!/usr/bin/env node


var validator = require("email-validator");
var axios = require("axios");
var figlet = require('figlet');
const ora = require('ora');
const chalk = require('chalk');

var result = process.argv ;

/* console.log(validator.validate(result[2])); */
/* console.log(result); */

let uri = "https://haveibeenpwned.com/api/v2/breachedaccount/"+result[2];


 
console.log(chalk.blue.bgWhite(figlet.textSync('HacerMan', {
    font: "Arrows",
    horizontalLayout: 'default',
    verticalLayout: 'default'
})));


 
// Send a POST request
if(validator.validate(result[2])) {
          
        const spinner = ora('Loading unicorns ');
        spinner.color = 'yellow';
        spinner.text = 'Loading rainbows';
        spinner.start();

    axios({
                method: 'get',
                url: uri,
                headers:{
                    "user-agent" : "fwned",
                }
            })

            .then(function(response){
                spinner.stop();
                response.data.forEach(function(response) {
                    console.log(response.Name)
                                        
                });
                
                    
            })
            .catch(function (error){
                spinner.stop();
                    if(error === 404){
                        console.log("Tout va bien ma caille");
                    }else{
                        console.log("mert' ");
                    }
                
            })
            
            
         
}else{
    console.log("le mail n'est pas valide");
} 