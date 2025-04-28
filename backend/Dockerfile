# Python 3.11 slim 버전 베이스 이미지 사용
FROM python:3.11-slim

# 작업 디렉토리 생성 및 설정
WORKDIR /app

# requirements.txt 복사
COPY requirements.txt .

# 필요한 Python 패키지 설치
RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# 애플리케이션 소스코드 전체 복사
COPY . .

# 환경변수 기본 설정 (선택사항, 실제 실행은 .env로 주입)
ENV BACKEND_PORT=8080
ENV OTEL_PYTHON_LOGGING_AUTO_INSTRUMENTATION_ENABLED=true
ENV OTEL_SERVICE_NAME=default-service
ENV OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4318

# FastAPI 앱 실행 (uvicorn 사용)
CMD ["opentelemetry-instrument", "--traces_exporter", "otlp", "--metrices_exporter", "otlp", "--logs_exporter", "otlp", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
