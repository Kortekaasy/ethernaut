FROM node:dubnium-stretch-slim
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run compile:contracts
EXPOSE 3000
CMD [ "npm", "start" ]