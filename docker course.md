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

5. docker images:
   https://www.skillshare.com/classes/Docker-and-Docker-Compose-Project-Deployment-From-Scratch/377054641/projects?via=search-layout-grid

6. FROM node:13
   WORKDIR /usr/src/app
   COPY package\*.json ./
   RUN npm install
   COPY . .
   <!-- EXPOSE 3000
   CMD ["node", "run start"] -->

7. docker-compose build

8. check running: docker images
dc.yml:
command: npm run start
ports: /n- [__]"3000:3000"
 <!-- <host>:<container> -->

9.
