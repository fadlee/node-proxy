# Use the official Node.js image as the base image
FROM node:14

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

COPY proxy.js .

# Expose the port the app runs on
EXPOSE 8000

# Set default environment variables (optional)
ENV TARGET_URL=https://www.google.com
ENV PORT=8000

# Command to run the application
CMD ["node", "proxy.js"]

