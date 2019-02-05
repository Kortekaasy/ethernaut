FROM node:8.12.0-jessie
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm i -g npx
RUN npx truffle compile
EXPOSE 3000
CMD [ "npm", "start" ]