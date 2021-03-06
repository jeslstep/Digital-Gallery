# Digital - Gallery

Digital Gallery allows users to add a picture url or a file from their computer and a description. Once a submitted, the picture appears on a card with the options to delete or add likes. The description of the picture appears when the picture is clicked; the picture returns when the description is clicked. 

A potential specific use for this application is car shopping. A user could add their preferred car options picture url, create descriptions for each, and determine how many likes to give each car. This will allow the user to determine which car is their favorite.

# Website
Not deployed to heroku. Steps for heroku deployment below

# Built With
* Node.js
* Express
* React.js
* PostgreSQL
* Google Firebase
* sweetalert
* Material UI

# Setup

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

Running the server code requires `nodemon`. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`. 
Between the server and client, you'll need two terminal tabs because we're using `nodemon`, both our client side and server side will automatically spin back up when changes are made!

## Steps to Get the Development Environment Running

1. Download this project.
2. open in editor (I use VS code)
3. open a terminal window (control ~)
4. npm install
5. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`.
Running the server code requires `nodemon`. 
6. In seperate terminal windows (open a new termainal tab with `cmd + t` ):
    npm run server
    npm run client

# Steps to Deploy on Heroku

## Heroku (one time)
Sign up for an account at https://signup.heroku.com/
You may have to give them a credit card, but you shouldn't need to pay for anything
Install Heroku CLI by typing `brew install heroku` in Terminal
Authenticate by typing heroku login in Terminal
Note: Your project also needs to have a git repository.

## Heroku Setup (every time)
1. In terminal, navigate to the project folder and type `heroku create`
2. Login in if prompted
3. Type `git remote -v` to ensure it added successfully
4. Make sure your PORT is configured correctly as: `const PORT = process.env.PORT || 5000;`


1. Remove the build/ line from your .gitignore 
2. start script in your package.json starts your node server and not React (Heroku won't need to build the React app)
    a. "start": "node server/server.js",
3. Make sure your package.json contains a build script:
    a. "build": "react-scripts build"
4. `npm run build`
5. `git commit`
6. `git add .` 
7. `git commit -m "YOUR COMMIT MESSAGE"`
8. `git Push`
9. Push to heroku `git push heroku master`

# Completed Features

Feature addCards -- allow users to add a picture url and a description
Feature storedInPostgreSQL -- picture url and description stored in PostgreSQL database table
Feature addLikes -- add likes 
Feature deleteCard -- deletes card 
Feature firebaseFileUpload -- allows users to upload an image from their computer

# Next Steps

Feature editCards -- allow users to edit description and number of likes






