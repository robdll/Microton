FROM node:lts as local
ARG WORKDIR=/home/node/server

RUN mkdir $WORKDIR && chown node:node $WORKDIR
USER node
WORKDIR $WORKDIR
COPY --chown=node:node . .
RUN yarn