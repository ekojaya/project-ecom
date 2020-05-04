# Strapi + Next + Mongo Starter

## Prequisites

* Docker & docker-compose
* Nodejs LTS

## How To Run

* Stop all docker instance

```sh
docker stop $(docker ps -a -q)
```
* Run docker using docker-compose

```sh
docker-compose up
```

* Frontend web will run on :3000, cms on :1337 and database (mongodb) on :27017
* Reverse proxy will serve on :8080

## Todo
* Add component Will Update and other lifecycle
* Add Reducer example

## Structure

* project-web/layouts/Web/Header.js
  Put all pre-loaded styles, title and meta inside <Head> and put navbar, and header after Head Tag