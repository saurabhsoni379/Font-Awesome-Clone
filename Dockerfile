FROM node:18-alpine as node
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
RUN npm install 
COPY . /app/
RUN npm run build 

From nginx:latest
COPY --from=node /app/build/   /usr/share/nginx/html
EXPOSE 80

