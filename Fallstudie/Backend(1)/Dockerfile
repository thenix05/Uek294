FROM gradle:8.4-jdk21 AS builder

WORKDIR /app

COPY build.gradle settings.gradle ./
COPY src ./src

# Pre-download dependencies to cache them
RUN gradle --no-daemon dependencies

# Build the application
RUN gradle --no-daemon bootJar

# Use a minimal runtime image
FROM openjdk:21-jdk-slim

WORKDIR /app

# Create a non-root user for security
RUN groupadd -r spring && useradd -r -g spring spring

USER spring:spring

# Copy the built JAR from the builder stage
COPY --from=builder /app/build/libs/*.jar app.jar

# Expose the application's port
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]