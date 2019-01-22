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

figlet.text('HackerMan', {
    font: "Arrows",
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.blue.bgWhite(data));
});
 
const spinner = ora('Loading unicorns \n');


 
// Send a POST request
if(validator.validate(result[2])) {
    setTimeout(() => {
        spinner.color = 'yellow';
        spinner.text = 'Loading rainbows';
        spinner.start();
    axios({
                method: 'get',
                url: uri,
                headers:{
                    "user-agent" : "nodejs_cli",
                }
            })

            .then(function(response){
                
                /* console.log(response); */
                response.data.forEach(function(response) {
                    console.log(response.Name)
                                        
                });
                
                    
            })
            .catch(function (error){
                    if(error === 404){
                        console.log("Tout va bien ma caille");
                    }else{
                        console.log("mert' ");
                    }
                
            })
            
            spinner.stop();
        }, 1000);   
}else{
    console.log("le mail n'est pas valide");
} 