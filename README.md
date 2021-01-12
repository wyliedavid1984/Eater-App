# Eater-App
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/><img src="https://img.shields.io/badge/mysql-%2300f.svg?&style=for-the-badge&logo=mysql&logoColor=white"/>

[Git Hub repo](https://github.com/wyliedavid1984/EmployeeSystemManagement)

## Description 

I created an interface that makes it easier for non-developers to view and interact with information stored in database. Often these interfaces are known as **C**ontent **M**anagement **S**ystems. So I architect and built a solution for managing a company's employees using node, inquirer, and MySQL.

### Table Of Contents

-[Description](#Description)

-[Technologies](#Technologies)
   
-[Usages](#Usages)

-[Visuals](#Visuals)

-[Credits](#Credits)

-[License](#License) 

## Technologies

<details>
<summary>Expand to see technologies used</summary>

## Javascript

I use the MVC model to put together this project. It starts with orm Object Relational Mapping. This makes use of sql language to query the data base, and also passes in parameters and callback function. From there, I made a javascript file that sets up functions from orm to pull data from the burger table. Then lastly, moving into controller folder that file is where all the routes are setup. 

### JQuery

I used jquery to help grab the data that the user input. It also gets other elements on the page, so that they can be manipulated. Each function that created has a corresponding route on the backend to help with the manipulation of the data being selected by the jQuery.

### Node

I used node to initialize package.json. After the initialization, I added mysql, express, express-handlebars.  Also used node to make a connection with the data base.  We also use it to spin up a server instance. 

### NPM

I used npm to install the following dependencies mysql, express-handlebars, and express. 

#### MYSQL

I use mysql to make a connections to the data base by running it through node. I made several queries to get specific data through separate functions. I also used helper functions to help with the readability of the data and also to help with passing multiple parameters.

#### Express

Express made coding this application much easier. I made use of the express function through a variable named route.  It helped to reduce the amount of code needed to make requests and responses.  

I built routes and stored them in the routes files. 

I used the express router function to make it easier to set up the requests.  In the html routes mainly made get requests to grab the html page that is stored in the views folder. Index is setup as the starting html. Other routes were created to handle user input.  I also used router was use to setup api routes and transfer user data to the database. I made use of post to get data and resend the incoming data and us the response to put it back on the html page with the help of our file system node application.  I did the same thing with the delete function.


### HTML

#### Handle Bars - express

I used two files to put together the html layouts and view. Main, that is located in layouts folder, is there to setup the reference to handlebars. So the rest of the html views will be injected to the main html. Index hbs is where I dynamically add the rest of our content for the page. 

### CSS

I used some basic css to setup the layout of the page and add a little color to the page.

</details>

## Usages

For users that need to keep track of an employee data base, 

### Visuals

<details>
<summary>Screen Shots and Gif with Video link</summary>

![Start of the application](./assets/images/start.png)

![View Employee](./assets/images/employee.png)

![View Roles](./assets/images/roles.png)

![View Dept](./assets/images/dept.png) 

![Add Employee](./assets/images/addEmployee.png)


Click on the gif to be linked to the video

[![Gif of video](./assets/images/employeeTracker.gif)](https://drive.google.com/file/d/14KsK9Nu5ExY4cmreyg2_-70CqWG5MimC/view)


</details>

## Credits

* [Node Documents](https://nodejs.org/api/index.html)
* [npm Documents](https://www.npmjs.com/)
* [Express.js](https://expressjs.com/)
* [Stack Overflow](https://stackoverflow.com/)
* [W3Schools](https://www.w3schools.com/sql/default.asp)
* [Stack Overflow create checker background](https://stackoverflow.com/questions/27277641/create-a-checkered-background-using-css)

## License

MIT License

Copyright (c) 2020 David Wylie

## Contact

* [David Wylie Github](https://github.com/wyliedavid1984)