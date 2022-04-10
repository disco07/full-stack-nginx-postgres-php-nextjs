FROM node:latest as build
WORKDIR /app
RUN rm -rf /app/*
COPY package*.json .
CMD npm install
COPY . .
RUN npm run build
RUN npx next export

FROM nginx
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 3000