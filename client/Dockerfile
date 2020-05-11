FROM node:12 as build
WORKDIR /app
COPY . .
RUN npm i
RUN npm i -g @quasar/cli
RUN quasar build

FROM node:12-alpine
WORKDIR /dist
RUN npm i -g @quasar/cli
COPY --from=build /app/dist/spa .
EXPOSE 4000
CMD ["quasar", "serve", "/dist", "--history"]