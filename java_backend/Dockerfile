# Build stage
FROM bellsoft/liberica-openjdk-alpine:17 AS builder

WORKDIR /app
COPY . .

RUN ./gradlew clean build -x test


# Run stage
FROM bellsoft/liberica-openjdk-alpine:17

WORKDIR /app
COPY --from=builder /app/build/libs/*.jar app.jar

# OpenTelemetry 환경변수 설정
ENV OTEL_SERVICE_NAME=oteltest-service
ENV OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317
ENV OTEL_EXPORTER_OTLP_PROTOCOL=grpc
ENV OTEL_EXPORTER_OTLP_TIMEOUT=10000
ENV OTEL_LOGS_BATCH_MAX_QUEUE_SIZE=512
ENV OTEL_LOGS_BATCH_MAX_EXPORT_BATCH_SIZE=512
ENV OTEL_LOGS_BATCH_SCHEDULE_DELAY=5000
ENV LOG_LEVEL=INFO
ENV OTEL_LOG_LEVEL=INFO

EXPOSE 8080

ENTRYPOINT ["java","-jar","app.jar"]
