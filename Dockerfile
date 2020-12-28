FROM node:15.5.0-alpine3.10

RUN mkdir /opt/pulsar

COPY . /opt/pulsar
WORKDIR /opt/pulsar

RUN yarn
RUN yarn build

CMD ["yarn", "start"]
