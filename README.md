# React - Gallery of My Life

Before you get started make sure to look through the code that has been provided. Server side code to retrieve data (`GET`) and like a photo (`PUT`) have been provided for you. For practice, we recommend testing out these routes in Postman. You should not need to modify these routes for base mode.

### Setup

There is no database component to base mode. All data is stored in an array on the server. Before you get started, add a few images to the `public/images` folder and modify the `server/modules/data.js` to include an `id`, `title`, `description` and `path for` each of your images. Each `id` should be a unique number (e.g. 1, 2, 3...).

Running the server code requires `nodemon`. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

Between the server and client, you'll need two terminal tabs! Because we're using `nodemon`, both our client side and server side will automatically spin back up when changes are made!

## Git Branching
For each `feature` of your application, you will need to make a branch, work on the branch, and then merge it into master with `git merge --no-ff`. In the Base Mode section, each of the tasks has an associated branch name. These are suggested branches and order. Feel free to work on the features in any order you like. You should be making branches for whatever feature you are working on.


## BASE MODE

- X`feature-get-gallery` 
    - Use `axios` to retrieve (`GET`) data from to `/gallery` and store it in `App.js`.
- X`feature-component-gallery-list` 
    - Create a new **component** for the `GalleryList` and pass it the gallery data stored in `App` via `props`.
    - Break apart the list of gallery data
- X`feature-component-gallery-item` 
    - Create a new **component** called `GalleryItem.js` and pass it the individual gallery item via `props`. 
    - Display all of the images on the screen.
- X`feature-image-swap` 
    - Swap the image with the description on click. Research [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
- X`feature-like-counter` 
    - Display the number likes for each item and include a like button.
    - When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
    - Update the gallery each time a like button is clicked.

### Wireframes

> NOTE: Images don't need to be 100px x 100px but it will be easier if the are all the same dimensions.

![mockup one](wireframes/first-mockup.png)

![mockup two](wireframes/second-mockup.png)

## STRETCH GOALS

**Do not start on stretch goals until ALL of base mode is complete. Some of these will require additional research.**


- X Move the data into a database (postgresql)
- X Add a form (new **component**) that allows a user to POST a new gallery item
  -X Client side form (use absolute URL for images)
  - X Server side route for posting an image
- X Ability to delete a gallery item
- X Add styling with Material-UI [https://material-ui.com/](https://material-ui.com/)
- Implement [uppy](https://uppy.io/) for image upload 

> NOTE: The above stretch goals are intended to be completed in order.
