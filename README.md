# Lab Docker

Lab Docker is created for learning and practicing purpose of working with Docker.

## Getting Started

### Installing Docker
  - Install [Docker](https://docs.docker.com/get-docker/)
  - Install Docker by executing [this script](https://github.com/rhexa/dockerExercise21-8-1/blob/main/apt/docker.sh) on Debian base Operating System
  - Check if Docker has been succesfully installed by running `docker -v` on terminal

### Running Docker
- Create a new directory for Docker project
```
mkdir <docker-project-directory>
cd <docker-project-directory>
```
- Browse the desired docker image to run on [Docker Repository](https://hub.docker.com/). 
- Run the image by executing `docker run <repo/image-name>` command.

## Working with Dockerfile
Docker file is a docker config file to define and build a custom image.

### Specifying the base image
In this example we are using node JS image [Node JS image](https://hub.docker.com/_/node)
```
# FROM <image>:<tag-name>
FROM node:14.17-alpine
```
### Available commands
The available commands can be found on [Docker docs](https://docs.docker.com/engine/reference/builder/)

Frequently used commands:
- `RUN <command>` to run shell command
- `COPY <source> <destination>` copy files from host to the container
- `WORKDIR <path>` change the working directory
- `EXPOSE <port-number>` expose the port (only notification)
- `CMD ["<command>","<arguments>"]` starting point command

## Creating an image from a newly created Dockerfile
In this example the docker file is inside the current working directory.

Run this command to build the image
```
docker build
```