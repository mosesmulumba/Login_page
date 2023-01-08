FROM node:19.4.0

WORKDIR /app

COPY . /app

RUN npm install -g create-react-app && npm install

EXPOSE 8000

CMD ["npm","start"]
