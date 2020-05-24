FROM node:lts as builder
ARG WORKDIR=/home/node/root

RUN mkdir $WORKDIR && chown node:node $WORKDIR
USER node
WORKDIR $WORKDIR
COPY --chown=node:node . .
RUN yarn && yarn build