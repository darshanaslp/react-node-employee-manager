#  Employee Manager App

This repository contain fullstack app for the employee manager app

#  React Frontend

## Project structure

-public

-src

 --component

 ---footer
 
 ---header
 
 ---pages

  -app

  -test
  
  -index


## Tech used

- React-strap (Bootstrap) CSS framework for styling
- React
- Redux
- Eslint

## How to run locally

Clone or download project go to the Front-end
Inside Front-end open node console

Then type  `npm install`
 Run `npm start` if you have node installed locally.
 
Open your browse to `localhost:3000`



#  Node Back-end

## Project structure

-node_module

---config	

 ----controller
 
 ----model
 
 ----route
 
 ----test
 
 ----PlaceDetails
 
  -app
  
  -index


## Tech used

- Node Express
- Jest
- Swagger api


## How to run locally

Clone or download project go to the Back-end
Inside Back-end open node console
Then type  `npm install`
 Run `npm start` if you have node installed locally.
App gonna be run `localhost:5000`

### Mysql credential

Inside config -> database.js edit this regarding to mqsal database information 
 
const db = new Sequelize('crud_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

## Rest api structure

Methods | Urls | Action	
--- | --- | ---
**GET** | `/api/users` |  List All Employees 
**GET**| `/api/users/:id` |  List single Employee 
**POST** | `/api/users` | Create New Employee 
**PUT** | `/api/users/:id` | Edit Employee 
**DELETE** | `/api/users/:id` |  delete Employee 


{
        "first_name": "Test First",
		
        "last_name": "Test Last",
		
        "email": "test@gmail.com",
		
        "phone": "094771277218",
		
        "gender": "M",
		
        "id": "1",
		
        "picture": "https://randomuser.me/api/portraits/men/92.jpg"
    },


## How to run api documentation

This project api documented by using swagger

To run ‘npm start’ in brower’ 

localhost:5000/api-docs’


## Tests 

Open React-restaurant-finder-foursquare Project

Open node console run `npm test` to have jest start and watch the tests.







