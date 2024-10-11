# Base idea of the challenge

This is the base idea for the layout:

[Project Idea](./src/img/base-image.png)

The first three inputs are to look for an existent episode on the database.
The buutton is to handle that search.

The logo created for the challenge was:

[Logo Idea](./src/img/movie.logo.png)

The next step is to create the form to create a new episode if none were found

[Create Idea](./src/img/create-image.png)

The inputs should be the ones needed from the graphql side to create a new episode

<div align="center" style="border: 2px solid black; padding: 20px; width: 200px; margin: 0 auto;">
  <p><strong>ID</strong></p>
  <p><strong>series</strong></p>
  <p><strong>title</strong></p>
  <p><strong>Season</strong></p>
  <p><strong>Episode</strong></p>
</div>

Then the focus should be on the update/delete form:

[Update Idea](./src/img/update-image.png)

Using the same type of inputs created previously but adding an extra button, one should be to handle the update, the other to delete.

Finally, there will be a little form to check the OMDB:

[OMDB Idea](./src/img/OMDB-form-image.png)

There should only be two inputs, so the search can focus on looking by name and/or year of the movie.

[OMDB Search Idea](./src/img/OMDB-search-image.png)

the information received should be displayed on a tabled, where the image should be the main focus and the information received on the table field.

The git project should work on both GraphQL and Locally (the main branch was developed to work with both API and GraphQL requested and to see how it's working in local mode the branch to do so is localTesting).

<div align="center" style="border: 2px solid black; padding: 20px; width: 200px; margin: 0 auto;">
  <p><strong>THANK YOU SO MUCH FOR THE OPPORTUNITY AND HOPE TO TALK SOON</strong></p>
    <p><strong>NADIA DIAS</strong></p>
</div>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
