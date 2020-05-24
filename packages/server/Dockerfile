FROM node:lts as server
ARG WORKDIR=/home/node/server

RUN mkdir $WORKDIR && chown node:node $WORKDIR
USER node
WORKDIR $WORKDIR
COPY --from=builder --chown=node:node /home/node/root/packages/server .
EXPOSE 3000