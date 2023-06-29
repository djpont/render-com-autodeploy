FROM docker/compose:latest

WORKDIR /app

COPY . .

EXPOSE 3000

CMD ["docker-compose", "up"]
