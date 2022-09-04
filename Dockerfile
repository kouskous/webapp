### STAGE 1:BUILD ###
FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build


### STAGE 2:RUN ###
FROM nginx:latest AS ngi
COPY --from=build /usr/local/app/dist/webapp /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
