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

I used node to initialize package.json. After the initialization, I added inquirer, mysql, lodash, console.table, chalk and figlet via NPM.  Also used node to make a connection with the data base.   

### NPM

I used npm to install the dependency express that did most of the heavy lifting for this application. I also installed uuid to help with creating ids. 

#### MYSQL

I use mysql to make a connections to the data base by running it through node. I made several queries to get specific data in each time.  In certain instance I used a for loop and others I used map to display data to the CLI. I also used console.table to display certain sets of data or the response.

#### Inquirer

I used inquirer for all the prompts to the user. I use several types of question to prompt users. I used input, list, and raw list to get number value.

#### Chalk, Figlet

I used these two dependencies to style the start of of the application

#### Console.table

The dependency displays object and other data sets in a cleaner form. I used it specifically for that purpose.

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