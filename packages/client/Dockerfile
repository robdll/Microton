FROM node:lts as client
ENV PROJECT_ROOT=/home/node/microton

RUN mkdir $PROJECT_ROOT && chown node:node $PROJECT_ROOT
USER node
WORKDIR $PROJECT_ROOT
COPY --from=builder $PROJECT_ROOT .
WORKDIR $PROJECT_ROOT/packages/client
EXPOSE 8080

