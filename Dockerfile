FROM docker/compose:latest

RUN apk update && apk add --no-cache curl

WORKDIR /app

COPY . .

EXPOSE 3000

VOLUME /var/run/docker.sock

CMD ["docker-compose", "up"]
