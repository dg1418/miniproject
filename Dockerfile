FROM node:20-alpine
WORKDIR /app
COPY ./app/package*.json ./
RUN npm install
COPY ./app ./
CMD ["node","bin/www.js"]
