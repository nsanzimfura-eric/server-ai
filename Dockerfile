# Use an 
FROM node:20-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current 
COPY . .

# Install the app dependencies
RUN npm install

# Install additional 
RUN apt-get update && apt-get install -y \
    wget unzip fontconfig locales gconf-service libasound2 \
    libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
    libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 \
    libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 \
    libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
    libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 \
    libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation \
    libappindicator1 libnss3 lsb-release xdg-utils && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN npm uninstall puppeteer

RUN npm i puppeteer

# Define the command to run the app
CMD ["node", "index.js"]