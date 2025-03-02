FROM node:20.18-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 5173


CMD ["yarn", "run", "dev", "--host", "0.0.0.0"]

