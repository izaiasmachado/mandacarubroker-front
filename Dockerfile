FROM node:20 as build

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* ./
RUN yarn

COPY . .
RUN yarn build

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["yarn", "start"]