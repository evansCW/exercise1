exercise1
=========

First AngularJS exercise - Displaying a simple list with search, sort and limit capabilities

As a review of what we did in our first exercise for building AngularJS applications we did the following things to build a simple Angular application that displayed a list of contact information.

Before you do any of the steps below, make sure that you have NodeJS and yeoman installed.

1. We visited http://www.generatedata.com/ to build a list of data (in the form of json} to use for our exercise.
2. We created a directory to contain our project source.  mkdir exercise1
3. In the exercise1 directory we used "yo angular" to scaffold a Angular application.  Say no to sass and yes to Bootstrap and you can accept all of the other options.
4. We installed ExpressJS in our project directory using "npm install express".  Make sure you are in the project directory when you issue this command.
5. At this point we have a basic Angular, Node, Express application framework minus a Node server application to serve up our application content.  During our class time I created a very basic server to serve this purpose.  This is the server.js file included in the excercise code posted here.  If you are recreating the exercise just use the server.js file from the posted source code.

At this point we modified the code to build our working application.  Check out the changes made to app/views/main.html, app/scripts/controllers/employeeListController.js and app/index.html.

With the code in place, start node on our server.js file.  This can be done from a command prompt "node server.js" or from within WebStorm, if you are using that.  Then open http://localhost:3000 in your web browser.
