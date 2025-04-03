FROM node:18.19-alpine3.19
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm prune --production
EXPOSE 5000
CMD ["npm", "start"]
