# Specify base image that we want to base our application's image on:

FROM node:16.17.0-alpine

# Specify the working directory - dictates where our apps code and subsequent commands run in the dockerfile will run within this directory.
RUN mkdir /app
WORKDIR /app

# Copy package.json into the app directory (WORKDIR)
COPY package.json .
# This adds "package.json" to `WORKDIR`/relativeDir/
# This is equivalent to "COPY package.json /app"  --> adds "package.json" to /absoluteDir/
# This is also equivalent to "COPY ./package.json ./" --> the slashes don't affect anything.
COPY package-lock.json .


# Docker is clever in the way it handles the building of our images.
# If we write it like this, we can cache these steps, so that everytime we make a change and rebuild our application and dockerfile, we don't have to run through these steps again.

RUN npm install
# Once all dependencies are installed, we want to copy all our
COPY . .
# This is equivalent to:
# COPY . /app
# 

EXPOSE 8000

# To kick start our application:
CMD ["npm", "start"]