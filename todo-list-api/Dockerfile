
FROM node:16-alpine

WORKDIR /app/back

COPY package.json /app/back

RUN npm install

COPY . /app/back

EXPOSE 8080 
# QUANDO VIRAR UM CONTAINER

CMD ["npm", "run", "dev"]