FROM node:22.13.0-alpine
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENV NODE_ENV=production
RUN npm run build
CMD ["npm", "start"]