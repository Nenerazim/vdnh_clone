###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:20-slim As development

WORKDIR /usr/src/app

COPY --chown=node:node package.json ./

COPY --chown=node:node .npmrc ./

RUN npm i -g pnpm

RUN pnpm i

COPY --chown=node:node . .

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:20-slim As build

ARG PUBLIC_API_URL
ARG PUBLIC_APP_URL

WORKDIR /usr/src/app

COPY --chown=node:node package.json ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm i -g pnpm

RUN pnpm i pinia -f

RUN pnpm run build

USER node

###################
# PRODUCTION
###################

FROM node:20-slim As production

COPY --chown=node:node --from=build /usr/src/app/.output ./.output

CMD [ "node", ".output/server/index.mjs" ]