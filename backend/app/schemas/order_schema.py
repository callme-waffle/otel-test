from pydantic import BaseModel

class OrderCreateRequest(BaseModel):
    item_name: str
    quantity: int

class OrderCreateResponse(BaseModel):
    order_id: str
    item_name: str
    quantity: int
    status: str
    created_at: str

class OrderStatusResponse(BaseModel):
    order_id: str
    item_name: str
    quantity: int
    status: str
    created_at: str
