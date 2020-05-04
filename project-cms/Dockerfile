# Install node
FROM node:10.16

WORKDIR /js/project-cms

COPY package.json /js/project-cms/package.json

RUN npm install -g strapi@beta
RUN rm -rf /js/project-cms/node_modules
RUN npm install


COPY . /js/project-cms

CMD ["npm","run","develop"]
