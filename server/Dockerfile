FROM node:18.19-alpine3.19
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install --package-lock-only
COPY . .
RUN npm run build
RUN npm prune --production
EXPOSE 5000
CMD ["npm", "start"]
