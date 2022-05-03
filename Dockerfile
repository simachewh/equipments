FROM node:16

# Create app directory
WORKDIR /opt/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# building for production
RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3300
CMD [ "node", "index.js" ]