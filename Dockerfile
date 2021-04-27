FROM nginx:stable-alpine
LABEL maintainer="sun oct-month@qq.com"

COPY ./dist /usr/share/nginx/html
