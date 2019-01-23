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


 
console.log(chalk.blue.bgWhite(figlet.textSync('HackerMan', {
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
                    if(error.response.status ===404){
                        
                        console.log("You're safe");

                    }
                    else if (error.response.status === 423){

                        console.log("You have made to many request")

                    }
                    else{

                        console.log("something went wrong");

                    }
                
            })
            
            
         
}else{
    console.log("le mail n'est pas valide");
} 