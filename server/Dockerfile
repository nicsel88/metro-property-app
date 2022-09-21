# Specify base image that we want to base our application's docker image on:

FROM node:16.17.0-alpine

# Specify the working direction - dictates where our apps code and susequent commands run in the dockerfile will run within this directory.
RUN mkdir /app
WORKDIR /app

# Copy package.json into the app directory
COPY package.json .
COPY package-lock.json .

# Docker is clever in the way it handles the building of our images.
# If we write it like this, we can cache these steps, so that everytime we make a change and rebuild our application and dockerfile, we don't have to run through these steps again.

RUN npm install
# Once all dependencies are installed, we want to copy all our
COPY . .

EXPOSE 3000

# To kick start our server:
CMD [ "npm", "start" ]