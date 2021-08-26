FROM node:latest
RUN apt-get update && apt-get install -y postgresql postgresql-contrib
WORKDIR /usr/src/app
VOLUME ["/usr/src/app"]
CMD npm install -g yarn
CMD yarn install
CMD make db-reset
CMD make backend-webpack
CMD make frontend-webpack
CMD make start