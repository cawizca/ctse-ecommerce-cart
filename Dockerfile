# Import node image from Dockerhub
FROM node:16.15-alpine

# Configure the docker working directory
WORKDIR /app

# Copy files inside to Docker working directory
COPY package.json ./

# Install node packages
RUN npm install

# Copy installed files to Docker working directory
COPY . .

# Expose the running port
EXPOSE 5002

# Run the application
CMD [ "npm", "start" ]