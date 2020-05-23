FROM node:lts as start_img

# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
RUN mkdir /server && chown node:node /server
USER node
WORKDIR /server


