FROM node as build
WORKDIR /app
COPY ./client/package.json ./
RUN npm install
COPY ./client ./

#FROM build AS client_build
#RUN npm run build

FROM nginx
RUN rm -rf /usr/share/nginx/html/*
COPY ./client/nginx/default.conf /etc/nginx/conf.d/default.conf
WORKDIR /app/out
COPY --from=build /app/out ./
EXPOSE 3000