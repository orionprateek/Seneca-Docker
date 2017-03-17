FROM mhart/alpine-node-auto

RUN apk update \
   	&& apk add python \
    && apk add build-base


RUN mkdir -p /app/product
WORKDIR /app/product

COPY package.json .
RUN npm install --production

COPY . .

CMD ["node", "product-microservice.js"]