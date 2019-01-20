# Digital - Gallery

Digital Gallery allows users to add a picture url and a description. Once a submitted, the picture appears on a card with the options to delete or add likes. The description of the picture appears when the picture is clicked; the picture returns when the description is clicked. 

A potential specific use for this application is car shopping. A user could add their preferred car options picture url, create descriptions for each, and determine how many likes to give each car. This will allow the user to determine which car is their favorite.

# Built With

React.js
PostgreSQL
Node.js

# Setup

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

Running the server code requires `nodemon`. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`. 
Between the server and client, you'll need two terminal tabs because we're using `nodemon`, both our client side and server side will automatically spin back up when changes are made!

## Steps to Get the Development Environment Running

Download this project.
open in editor (I use VS code)
open a terminal window (control ~)
npm install
In seperate terminal windows (open a new termainal tab with `cmd + t` ):
    npm run server
    npm run client

# Completed Features

Feature addCards -- allow users to add a picture url and a description
Feature storedInPostgreSQL -- picture url and description stored in PostgreSQL database table
Feature addLikes -- add likes 
Feature deleteCard -- deletes card 
Feature firebaseFileUpload -- allows users to upload an image from their computer

# Next Steps

Feature editCards -- allow users to edit description and number of likes






