from fastapi import APIRouter, HTTPException
import uuid
import datetime as dt
import logging

from app.schemas import order_schema

router = APIRouter()

# 임시 메모리 저장소
fake_order_db = {}

@router.post("", response_model=order_schema.OrderCreateResponse, status_code=201)
def create_order(order: order_schema.OrderCreateRequest):
    order_id = str(uuid.uuid4())
    fake_order_db[order_id] = {
        "order_id": order_id,
        "item_name": order.item_name,
        "quantity": order.quantity,
        "status": "PENDING",
        "created_at": str(dt.datetime.now())
    }
    logging.info(f"Order Created: {order_id}")
    return fake_order_db[order_id]

@router.get("/status", response_model=order_schema.OrderStatusResponse)
def get_order_status(order_id: str):
    order = fake_order_db.get(order_id)
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    logging.info(f"Order Loaded: {order_id}")
    return order
