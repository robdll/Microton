FROM node:lts as client
ARG WORKDIR=/home/node/client

RUN mkdir $WORKDIR && chown node:node $WORKDIR
USER node
WORKDIR $WORKDIR
COPY --from=builder --chown=node:node /home/node/root/packages/client .
EXPOSE 8080

