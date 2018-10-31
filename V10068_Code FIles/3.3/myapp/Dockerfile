FROM node:carbon
ARG author

WORKDIR /app
EXPOSE 3000

COPY package* ./

RUN npm install

COPY . .

ENV DEBUG=*
LABEL author=${author}
CMD [ "npm", "start"]
