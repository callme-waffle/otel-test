package org.example.oteltest.dto;

import java.time.LocalDateTime;

import org.example.oteltest.domain.Order;
import org.example.oteltest.domain.OrderStatus;

import lombok.Builder;

public class OrderResDTO {
	private String order_id;
	private String item_name;
	private int quantity;
	private OrderStatus status;
	private LocalDateTime created_at;

	public OrderResDTO(Order order) {
		this.order_id = order.getOrderId();
		this.item_name = order.getItemName();
		this.quantity = order.getQuantity();
		this.status = order.getStatus();
		this.created_at = order.getCreatedAt();
	}
}
