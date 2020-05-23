FROM node:lts as builder
RUN mkdir /server && chown node:node /server
USER node
WORKDIR /server
COPY --chown=node:node . .
RUN yarn

FROM node:alpine as image
COPY --from=builder /server .
USER node
EXPOSE 3000