
Task 2:-

Feature - Login to website using gmail/facebook or
Allow users to sign-up to a website using gmail or facebook credential by one click login.
1. Create a main page with two buttons.
2. On clicking them, it should authenticate with Fb/ gmail and move to the next page.
3. Use bootstrap to get started with this task.
4. Move the final code to your github account and put a link to the Heroku page where the changes can be tested.
5. Create a readme file and add good documentation on how to run the code


So, let me brief the readers of my code a bit about it.
I was asked to design a login page which would authenticate the user either through Facebook or through Google. It would then after authentication, redirect the user
to the next page. Well, lets just say I did all that but also added a lot of cool functionality as a bonus.

So let me walk you through my mindset as I was building my site. I personally love ReactJs so there's no other framework I would prefer for building a cool task like
this. So i went in and created a react app using `create-react-app <app-name>`. It then installed all the required dependencies, created the package files and had me
get started in a matter of under 2 minutes. (Another cool feature of React). 

Going into the src folder, I deleted ALL files in there. I then made an `index.html` which would contain my basic html markup,a `style.css` which would be my main 
stylesheet and an `index.js` file which would be rendering the main App component of my web app. The next file was `App.js` which would be rendering all my components
that I include in my app. As a React developer, I like to break down a web application into smaller components through React, which makes development and debugging 
a LOT easier. 

So I made a separate component for my Login Page that would contain all my authentication logic(Google and Facebook), two separate components for when a user logs in through
Facebook, and the other if user logs in through Google. I coded my app in a way that, it would display the name, and the profile picture of the user when they have logged in
through Google. For the Facebook login however, I kept things simple, and just displayed a message saying "You have successfully logged in through Facebook" when the user is
able to authenticate successfully.

I have used [react-google-login](https://www.npmjs.com/package/react-google-login) and [react-facebook-login](https://www.npmjs.com/package/react-facebook-login) packages 
for building the authentication logic. 

Now I built the logic so as to let the user get redirected when they log in. Well, this calls for some cool functionality to be added, and that is the concept of 
Protected Routes. I cant let the user manipulate their browser url of my site to go into the routes meant for after logging in, without logging in first. However,
I made things a bit simpler by building logic such that even if they went into that route without logging in, they wont be able to see anything as well as they 
would be prompted back to the login page by displaying a message `You are not logged in! You can log in` [here](and a link to that login route).

Well I also added logout buttons for both google and facebook authentications to make it cooler. I have added some visually soothing CSS styling.
However, I havent used Bootstrap since I like to do my styling myself.

I also added an error page which the app will return if it cant find the route that the user typed in as the url.

Hope that I have been able to explain how my code works in a lucid and clear way. 
If you face any problems while running the code, you can contact me [here](diptangsu.burd@gmail.com)






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
