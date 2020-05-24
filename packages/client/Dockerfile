FROM node:lts as client
ARG PROJECT_ROOT=/home/node/microton

RUN mkdir $PROJECT_ROOT && chown node:node $PROJECT_ROOT
USER node
WORKDIR $PROJECT_ROOT
COPY --from=builder --chown=node:node $PROJECT_ROOT .
WORKDIR $PROJECT_ROOT/packages/client
EXPOSE 8080

