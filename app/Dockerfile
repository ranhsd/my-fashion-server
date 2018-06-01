FROM node:carbon

MAINTAINER Ran Hassid <ran.hassid@gmail.com>


RUN mkdir -p /my-sample-server

RUN npm install nodemon -g

WORKDIR /my-sample-server


COPY package.json /my-sample-server
RUN npm install 

COPY . /my-sample-server

EXPOSE 1337
EXPOSE 5858
EXPOSE 9229

CMD ["npm","start"]