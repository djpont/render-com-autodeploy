FROM docker/compose:latest

RUN apk update && apk add --no-cache curl

RUN curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh

WORKDIR /app

COPY . .

EXPOSE 3000

CMD dockerd && docker-compose up
