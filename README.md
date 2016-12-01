##Plop README##

### Synopsis ###
The purpose of Plop is to plop any questions students have directly on professor's slides during lecture.

### Router description ###

1.
  - Server: listen to clients, receive plops and show plops on the plop client
  - Send-client: send plop.  controller - send.js
  - Show-client: show plop.  controller - show.js

```
  |--------------|       |------------------|   |--------------|
  | sent-client  |       |    server        |   | show-client  |
  |--------------|       |------------------|   |--------------|

          |<----connect--->|           |<----connect----->|


          |<----plop send-->|        
                                       |<----show plop--->|
```

2. Put send.js and show.js into the /routes folder

### Create show client ###

1. Add views/index.jade, css file stylesheets/index.css, javascipts/index.js

2. Only static effect works in this case.

3. **router/index.js** shows the html file **views/index.jade**

4. Polish needed!!!!!

### Server Side ###

1. Use socket.io in index.js

2. Now Dynamic part works

### Create send client ###

1. add config.JSON including modes, fond, animation

2. **router/send.js** shows the html file **views/send.jage**

3. **login page** needed
   **router/login.js** shows the login page **views/login.jage**

4. Polish needed!!!!

### Deployment Steps ###

#####Bluemix Command#####

1. connect to IBM Bluemix

```
bluemix api https://api.ng.bluemix.net
```

2. log in to Bluemix

```
bluemix login -u username
```

3. push to Bluemix repository

```
cf push "app_name"
```

4. Access app in your browser

```
host.mybluemix.net
```

2. Powerpoint for javascript and HTML5

http://devzum.com/2014/11/10-best-javascript-and-html5-presentation-frameworks/

#####Work Distribution#####
1. Front End - Logan
  - Login Page
  - Web Based Ppt
  - Page Polish
  - Maintenance

2. Back End & Front End - Yangqiao
  - Client
    - Client plop page
    - Client plop showing page
  - Server
  - Maintenance

3. DataBase - Sophie
  - Client & Server Database
  - Maintenance


##### npm steps #####

1. Install express application generator

```
npm install express-generator -g
```

2. create an express app named plop

```
express plop
```

3. install dependencies

```
cd plop
npm install
```

4. run the app

```
npm start
```
