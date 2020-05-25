FROM node:lts as builder
ARG PROJECT_ROOT=/home/node/microton

RUN mkdir $PROJECT_ROOT && chown node:node $PROJECT_ROOT
USER node
WORKDIR $PROJECT_ROOT
COPY --chown=node:node . .
RUN yarn && yarn build