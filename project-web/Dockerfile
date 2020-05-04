# Install node
FROM node:10.16

WORKDIR /js/project-web

COPY package.json /js/project-web/package.json

RUN rm -rf /js/project-web/node_modules
RUN npm install

COPY . /js/project-web

CMD ["npm","run","dev"]
