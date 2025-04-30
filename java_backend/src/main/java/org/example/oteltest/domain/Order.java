package org.example.oteltest.domain;

import java.time.LocalDateTime;
import java.util.UUID;

import lombok.Getter;
import lombok.Setter;

public class Order {

	private String order_id;

	private String item_name;

	@Getter @Setter
	private int quantity;

	@Getter @Setter
	private OrderStatus status;

	private LocalDateTime created_at;

	public Order(String item_name, int quantity) {
		this.order_id = UUID.randomUUID().toString();
		this.item_name = item_name;
		this.quantity = quantity;
		this.status = OrderStatus.PENDING;
		this.created_at = LocalDateTime.now();
	}

	public String getOrderId() {
		return order_id;
	}

	public LocalDateTime getCreatedAt() {
		return created_at;
	}

	public String getItemName() {
		return item_name;
	}
}
