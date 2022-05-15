FROM node:16.15-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5002

CMD [ "npm", "start" ]