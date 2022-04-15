FROM node as build
WORKDIR /app
RUN rm -rf ./*
RUN npm install -g npm@8.6.0
COPY ./client/front-end/package.json .
RUN npm install --force
COPY ./client/front-end ./

FROM build AS client_build
RUN npm run build

FROM nginx
RUN rm -rf /usr/share/nginx/html/*
COPY ./client/nginx/default.conf /etc/nginx/conf.d/default.conf
WORKDIR /app/out
COPY --from=client_build /app/out ./
EXPOSE 3000