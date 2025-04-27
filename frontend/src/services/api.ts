import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://otel_test.aoldacloud.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Order {
  order_id: string;
  status: string;
  created_at: string;
}

// 주문 생성
export const createOrder = async (itemName: string, quantity: number): Promise<Order> => {
  const response = await api.post<Order>('/order', {
    item_name: itemName,
    quantity: quantity
  });
  return response.data;
};

// 주문 상태 조회
export const getOrderStatus = async (orderId: string): Promise<Order> => {
  const response = await api.get<Order>(`/order/status`, { params: { order_id: orderId } });
  return response.data;
};
