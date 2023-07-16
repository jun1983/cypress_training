FROM cypress/base:18.16.0

WORKDIR /app
ADD . /app

RUN npm install
CMD ["npx", "cypress", "run"]