FROM mhart/alpine-node-auto

RUN apk update \
   	&& apk add python \
    && apk add build-base

RUN mkdir -p /app/monitor

WORKDIR /app/monitor

COPY package.json .

RUN npm install --production

COPY . .

CMD ["node", "monitor-service.js"]