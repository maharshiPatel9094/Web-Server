# Web Server
 Here I would create a simple web server code 

step-1 
create a folder my app or my server anything..
after that create folders:-
public--> it contains static data or files such as css,js files things that we need to serve directly to the client 
views--> it stores templates or views that define the structure or layout of the web site 
servr.js--> contains requests and response data 

step-2 
after creating that write npm init to install the package.json file 
then install the express--> npm i express
once you run this commandd it will install the dependencies for express and create a new file callled package-lock-json
The purpose of package-lock.json is to ensure that the same dependencies are installed consistently across different environments, such as development and production environments. It also helps to prevent issues with installing different package versions, which can lead to conflicts and errors.

step-3
write the server.js 
after writing that code our server will be running on the port 8000 but will not show any files as we have not added any routes so add routes to server.js 
route-1 
/ -> home route and display hello world in it so now you refresh and will show the data 
route-2
/about -> displaying details about the company 
so this is how we can create as many routes

Here we will now learn to add files and show files when we render
just add the files home.html and about.html in the views folder 
then add path require in the server.js 
then sendFile as a res i the routes 
