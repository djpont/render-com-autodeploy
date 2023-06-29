FROM docker/compose:latest

RUN apk update && apk add --no-cache curl

WORKDIR /app

COPY . .

EXPOSE 3000

VOLUME /var/run/docker.sock

ENV DOCKER_HOST=unix:///var/run/docker.sock
ENV DOCKER_TLS_CERTDIR=""

CMD ["docker-compose", "up"]
