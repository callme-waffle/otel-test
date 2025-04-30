# Build stage
FROM bellsoft/liberica-openjdk-alpine:17 AS builder

WORKDIR /app
COPY . .

RUN ./gradlew clean build -x test


# Run stage
FROM bellsoft/liberica-openjdk-alpine:17

WORKDIR /app
COPY --from=builder /app/build/libs/*.jar app.jar
COPY ./opentelemetry-javaagent.jar opentelemetry-javaagent.jar

ENV JAVA_TOOL_OPTIONS="-javaagent:./opentelemetry-javaagent.jar"

ENV OTEL_TRACES_EXPORTER=logging
ENV OTEL_LOGS_EXPORTER=logging
ENV OTEL_METRICS_EXPORTER=logging
ENV OTEL_METRIC_EXPORT_INTERVAL=15000

ENV OTEL_SERVICE_NAME=otel-test-java-be-service
ENV OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf
ENV OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4318/

EXPOSE 8080

ENTRYPOINT ["java","-jar","app.jar"]
