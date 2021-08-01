# specify the node base image with your desired version node:<version>
FROM node:14.17-alpine

# replace this with your application's default port
# EXPOSE 8888

# copy the web files to docker
RUN mkdir -p /home/app
WORKDIR /home/app
RUN npm install

CMD ["npm", "start"]
