FROM node:16-alpine

# Create app directory
WORKDIR /demo-docker

# Bundle app source
COPY . .

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

CMD [ "npm", "run", "start:dev"]