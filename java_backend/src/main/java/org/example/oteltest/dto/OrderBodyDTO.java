package org.example.oteltest.dto;

public record OrderBodyDTO(
	String item_name, Integer quantity
) {}
