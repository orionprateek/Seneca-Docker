FROM mhart/alpine-node-auto

RUN apk update \
   	&& apk add python \
    && apk add build-base


RUN mkdir -p /app/sum
WORKDIR /app/sum

COPY package.json .
RUN npm install --production

COPY . .

CMD ["node", "sum-microservice.js"]