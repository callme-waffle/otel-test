import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Typography, Box, CircularProgress, TextField } from '@mui/material';
import { createOrder } from '../services/api';

const OrderForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleCreateOrder = async () => {
    if (!itemName || quantity <= 0) {
      alert("상품명과 수량을 모두 입력해 주세요.");
      return;
    }
    try {
      setLoading(true);
      const order = await createOrder(itemName, quantity);
      navigate(`/status/${order.order_id}`);
    } catch (error) {
      console.error('주문 생성 중 오류 발생:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          새로운 주문
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          주문을 생성하려면 아래 항목을 입력하고 버튼을 클릭하세요.
        </Typography>

        <TextField
          label="상품명"
          variant="outlined"
          fullWidth
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          label="수량"
          variant="outlined"
          type="number"
          fullWidth
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          sx={{ mb: 2 }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            variant="contained"
            onClick={handleCreateOrder}
            disabled={loading}
            sx={{ minWidth: 200 }}
          >
            {loading ? <CircularProgress size={24} /> : '주문 생성'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderForm;