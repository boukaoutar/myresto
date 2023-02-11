# Use an openjdk image as the base image
FROM openjdk:19

# Set the working directory
WORKDIR /src

# Copy the myresto jar file to the app directory
COPY target/myresto-0.0.1-SNAPSHOT.jar /src/myresto.jar

# Expose port 8080 for the application to listen on
EXPOSE 8080

# Run the myresto jar file
CMD ["java", "-jar", "myresto.jar"]