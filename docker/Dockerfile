FROM node:12.20.1-alpine as build
LABEL name="nmb/racefi-landing"

WORKDIR /app
RUN apk add yarn
RUN npm install react-scripts -g --silent

COPY ./package.json ./
RUN yarn install --silent

COPY . .
RUN yarn run build
EXPOSE 3000
CMD yarn run start
