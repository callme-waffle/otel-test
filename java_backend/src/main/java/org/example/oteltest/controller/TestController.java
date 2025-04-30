package org.example.oteltest.controller;

import java.util.HashMap;

import org.example.oteltest.domain.Order;
import org.example.oteltest.dto.OrderBodyDTO;
import org.example.oteltest.dto.OrderResDTO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
public class TestController {

	HashMap<String, Order> orders = new HashMap<>();
	private static final Logger logger = LoggerFactory.getLogger(TestController.class);

	@PostMapping("/")
	public OrderResDTO basicHandler(
		@RequestParam OrderBodyDTO body
	) {
		Order order = new Order(body.item_name(), body.quantity());
		logger.info(String.format("[basicHandler] Order Created: %s", order.getOrderId()));
		orders.put(order.getOrderId(), order);
		return new OrderResDTO(order);
	}

	@GetMapping("/status/{orderId}")
	public OrderResDTO getOrder(
		@PathVariable String orderId
	) {
		logger.info(String.format("[getOrder] Order Loaded: %s", orderId));
		Order order = orders.get(orderId);
		if (order == null) return null;

		return new OrderResDTO(order);
	}
}
