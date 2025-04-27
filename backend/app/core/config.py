# app/core/config.py

from pydantic_settings import BaseSettings  # 수정된 import

class Settings(BaseSettings):
    PROJECT_NAME: str = "Order API"
    VERSION: str = "1.0.0"

    # DB 연결 정보
    DB_HOST: str
    DB_PORT: int
    DB_USER: str
    DB_PASSWORD: str
    DB_NAME: str

    # 서버 포트 정보
    BACKEND_PORT: int = 8000

    class Config:
        env_file = ".env.development"  # env 파일 지정

settings = Settings()
