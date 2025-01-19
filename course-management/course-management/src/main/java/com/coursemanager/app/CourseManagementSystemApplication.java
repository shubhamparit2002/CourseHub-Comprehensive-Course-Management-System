package com.coursemanager.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CourseManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(CourseManagementSystemApplication.class, args);
		System.out.println("Application Started");
	}

}
