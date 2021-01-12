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

### Node

I used node to initialize package.json. After the initialization, I added mysql, express.  Also used node to make a connection with the data base.   

### NPM

I used npm to install the dependency express that did most of the heavy lifting for this application. I also installed uuid to help with creating ids. 

#### MYSQL

I use mysql to make a connections to the data base by running it through node. I made several queries to get specific data in each time.  In certain instance I used a for loop and others I used map to display data to the CLI. I also used console.table to display certain sets of data or the response.

#### Express

Express made coding this application much easier. I made use of the express function through a variable named app.  It helped to reduce the amount of code needed to make requests and responses.  

I built routes and stored them in the routes files. One to deal with apis and the second to deal with html. I used the express router function to make it easier to set up the requests.  In the html routes mainly made get requests to grab the two different html pages that were stored in the views folder. Index is setup so that any file extension put in will take you the index. The other route will take you to the notes html that will take in user input.  I also used router in the api routes that I setup. In the api file I used more than the get requests. I made use of post to get data and resend the incoming data and us the response to put it back on the html page with the help of our file system node application.  I did the same thing with the delete 

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

## License

MIT License

Copyright (c) 2020 David Wylie

## Contact

* [David Wylie Github](https://github.com/wyliedavid1984)