from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import order
from app.core.config import settings
import uvicorn

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION
)

# ✅ CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 모든 Origin 허용 (개발용)
    allow_credentials=True,
    allow_methods=["*"],  # 모든 HTTP 메소드 허용
    allow_headers=["*"],  # 모든 HTTP 헤더 허용
)

# 주문 관련 API 라우터 등록
app.include_router(order.router, prefix="/order")

# 서버 시작 시 로그 출력
@app.on_event("startup")
async def startup_event():
    print(f"🚀 {settings.PROJECT_NAME} is starting...")
    print(f"📦 Connected DB: {settings.DB_HOST}:{settings.DB_PORT} (DB: {settings.DB_NAME})")
    print(f"🌐 Backend will run on port: {settings.BACKEND_PORT}")

# main으로 실행될 때 서버 스타트
if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=settings.BACKEND_PORT,
        reload=True
    )
