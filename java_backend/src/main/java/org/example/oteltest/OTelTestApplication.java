package org.example.oteltest;

import org.example.oteltest.controller.TestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OTelTestApplication {

	public static void main(String[] args) {
		SpringApplication.run(OTelTestApplication.class, args);
	}

}
