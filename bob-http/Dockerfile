FROM mhart/alpine-node-auto

RUN apk update \
   	&& apk add python \
    && apk add build-base


RUN mkdir -p /app/bob-http

WORKDIR /app/bob-http

COPY package.json .

RUN npm install --production

COPY . .

CMD ["node", "app.js"]