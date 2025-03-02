FROM node:20.18-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["yarn", "start:dev", "--host", "0.0.0.0"]



