FROM node:18-alpine as builder
# Set the working directory to /app inside the container
WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install
# Copy app files
COPY . .

RUN yarn build

# Bundle static assets with nginx
FROM nginx:1.23.2-alpine as production

ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]