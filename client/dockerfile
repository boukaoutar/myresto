# Use an existing Node.js base image 
FROM node
# Set the working directory in the container to /app 
WORKDIR /app 
# Copy the package.json file to the container 
COPY package.json . 
# Install the app's dependencies in the container 
RUN npm install 
# Copy the rest of the app's files to the container 
COPY . .
#PORT
EXPOSE 3000
# Specify the command to run the app when the container starts 
CMD [ "npm", "start" ]
