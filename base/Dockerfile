FROM mhart/alpine-node-auto

RUN apk update \
   	&& apk add python \
    && apk add build-base


RUN mkdir -p /app/base
WORKDIR /app/base

COPY package.json .

RUN npm install --production

COPY . .

CMD ["node", "base-service.js"]