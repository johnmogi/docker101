https://www.skillshare.com/classes/Docker-and-Docker-Compose-Project-Deployment-From-Scratch/

0. setup:
   touch docker-composse.yml
   -# create a folder for each service
   mkdir api auth frontend
   touch api/Dockerfile auth/Dockerfile frontend/Dockerfile
   -# google dockerfile
   FROM node:13

1. api Dockerfile:
   version: "3"
   services:
   api:
   build: ./api

2. [sudo] docker-compose build

3. cd api ; npm init -y;
   npm i express
   cd .. ; touch .gitignore;
   echo 'node_modules' >> .gitignore

4. cd api ; mkdir src ; touch index.js;
   sed "start":"nodemon index.js" | package.json

5. index.js:
   const express = require("express");
   const app = express();
   const PORT = process.env.PORT;
   const HOST = process.env.HOST;
   app.get("/test", (req, res) => {
   res.send("all correct");
   });
   app.listen(PORT);
   console.log(`started at http://localhost:${PORT}, destination: ${HOST}`);

6. docker images:
   https://www.skillshare.com/classes/Docker-and-Docker-Compose-Project-Deployment-From-Scratch/377054641/projects?via=search-layout-grid

7. FROM node:13.12.0-alpine
   WORKDIR /usr/src/app
   COPY package\*.json ./
   RUN npm install
   COPY . .
   <!-- EXPOSE 3000
   CMD ["node", "run start"] -->

8. docker-compose build

9. check running: docker images
dc.yml:
command: npm run start
ports: /n- [__]"3000:3000"
 <!-- <host>:<container> -->

10. dc build | dc up

11. docker hub --official image -- slim image \*alpine - smaller size
12. compose file:
    restart: unless-stopped
    https://docs.docker.com/compose/compose-file/

13. environment in dc:
    [.]api:
    [. ]environment:
    [ -] PORT= 3000
    environment: - PORT=3000 - HOST=http://johnmogi.com

14. api> npm i mongoose
    https://mongoosejs.com/docs/api.html
    https://mongoosejs.com/docs/connections.html

15. issues with indentation:
    installed vscode extention YAML + indent rainbow
    current dc version--
    version: "3"
    services:
    api:
    build: ./api
    command: npm run start
    restart: unless-stopped
    ports: - "3000:3000"
    environment: - PORT=3000 - HOST=http://johnmogi.com
    depends_on: - mongo_db //this chaines up the hirerchy
    mongo_db:
    image: mongo:latest // pulled from https://hub.docker.com/ - use tags - look for official, alpine etc.

16.
