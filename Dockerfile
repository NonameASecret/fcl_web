# Use the official lightweight Node.js 21 image.
# https://hub.docker.com/_/node
FROM node:21-alpine

# Set the working directory
WORKDIR /app

# environment variables
ENV NODE_ENV=production

# Copy package.json, package-lock.json, and prisma/schema.prisma
COPY package*.json ./
COPY prisma ./prisma/
COPY next.config.js ./
COPY public ./public

# Copy your local code to the container
COPY . .

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Build the app (ensure this is done after copying your code)
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]