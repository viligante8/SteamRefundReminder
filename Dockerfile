# Name the node stage "builder"
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /dist

# Copy our node package specification
COPY package.json package.json
COPY package-lock.json package-lock.json

# install production dependencies
RUN npm install

# Copy all files from current directory to working dir in image
# Except the ones defined in '.dockerignore'
COPY . .

# Build the app
RUN npm run vite:build


# Choose NGINX as our base Docker image
FROM nginx:alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf *

# Copy static assets from builder stage
COPY --from=builder /dist/dist .

# Entry point when Docker container has started
ENTRYPOINT ["nginx", "-g", "daemon off;"]