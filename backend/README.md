# Order API

간단한 주문(Order) 생성 및 상태 조회 기능을 제공하는 API입니다.

## 실행 방법

1. 가상환경 생성 및 활성화
```bash
python3 -m venv venv
source venv/bin/activate
```

2. 의존성 설치
```bash
pip install -r requirements.txt
```

3. 서버 실행
```bash
uvicorn main:app --reload
```

## API 목록

- POST /order : 주문 생성
- GET /order/status?order_id= : 주문 상태 조회
