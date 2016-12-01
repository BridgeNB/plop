##Plop README##

### Synopsis ###
The purpose of Plop is to plop any questions students have directly on professor's slides during lecture.

### Router description ###

1.
  - server: listen to clients, receive plops and show plops on the plop client
  - send-client: send plop.  controller - send.js
  - show-client: show plop.  controller - show.js

```
  |--------------|       |------------------|   |--------------|
  | sent-client  |       |    server        |   | show-client  |
  |--------------|       |------------------|   |--------------|

          |<----connect--->|           |<----connect----->|


          |<----plop send-->|        
                                       |<----show plop--->|
```

2. put send.js and show.js into the /routes folder

### create client in view side ###

1. add views/index.jade, css file stylesheets/index.css, javascipts/index.js

2. This is static effect


  




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
