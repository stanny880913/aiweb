FROM node:lts-alpine

# install simple http server for serving static content
# RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies leaving out dev dependencies
RUN npm install --production

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY ./node_modules ./node_modules
COPY ./src ./src
COPY ./babel.config.js ./babel.config.js

# build app for production with minification
# RUN npm run build

EXPOSE 8080
CMD ["npm", "run" ,"serve"]