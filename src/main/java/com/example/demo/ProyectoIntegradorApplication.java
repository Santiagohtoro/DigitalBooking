package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.cors.*;
import org.springframework.web.servlet.config.CorsBeanDefinitionParser;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @ComponentScan(basePackages = {"com.example.demo.Service"})
@SpringBootApplication
public class ProyectoIntegradorApplication {
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry
						.addMapping("/**")
						.allowedOrigins(CorsConfiguration.ALL)
						.allowedMethods(CorsConfiguration.ALL)
						.allowedHeaders(CorsConfiguration.ALL)
						.exposedHeaders(CorsConfiguration.ALL);
			}
		};
	}

	public static void main(String[] args) {
		SpringApplication.run(ProyectoIntegradorApplication.class, args);

		}


		}


