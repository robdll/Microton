# Scheleton

It's a scheleton microservices architecture.  
Currently composed by: 

- node server
- redis
- React client (not yet a microservice)


## Prerequisites

    - [Node](https://nodejs.org/en/)
    - [Docker](https://www.docker.com/)
    - [Yarn](https://yarnpkg.com/)
    - [Git](https://git-scm.com/)

Clone the repository by running `git clone git@github.com:koop4/microservice_movie_manager.git`

## Getting started with the Architecture

0. Move to the repository folder `cd microservice_movie_manager`
1. Install dependencies `yarn`
2. Start containers with `docker-compose up`

## Getting started with the Client

0. Move to the _movie-manager_ folder `cd movie-manager`
1. Install dependencies `yarn`
2. Start the project with `yarn start`
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Client tests

1. Run `yarn test` within the client folder

## Client build 

1. Run `yarn build` within the client folder
