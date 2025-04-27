import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Box, CircularProgress, Chip } from '@mui/material';
import { getOrderStatus } from '../services/api';

const OrderStatus: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrderStatus = async () => {
      try {
        if (!orderId) return;
        const orderData = await getOrderStatus(orderId);
        setOrder(orderData);
      } catch (err) {
        setError('주문 상태를 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrderStatus();
  }, [orderId]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Card sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
        <CardContent>
          <Typography color="error">{error}</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          주문 상태
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" gutterBottom>
            주문 ID: {order?.order_id}
          </Typography>
          <Typography variant="body1" gutterBottom>
            생성 시간: {new Date(order?.created_at).toLocaleString()}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Chip
              label={order?.status}
              color={
                order?.status === 'COMPLETED'
                  ? 'success'
                  : order?.status === 'PENDING'
                  ? 'warning'
                  : 'error'
              }
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderStatus; 