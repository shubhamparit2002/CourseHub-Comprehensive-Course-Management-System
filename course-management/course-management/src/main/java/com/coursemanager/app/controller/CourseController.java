package com.coursemanager.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.coursemanager.app.entities.Course;
import com.coursemanager.app.services.CourseServices;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class CourseController {

	  @Autowired
	    private CourseServices courseService;
	
	
	@GetMapping("/courses")
	public List<Course> getAllCourses(){
		return courseService.getallCourses();
	}
	
	@GetMapping("/courses/{id}")
	public Course getCourseById(@PathVariable Integer id) {
		return courseService.getCourseById(id);
	}
	
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course) {
		return courseService.addCourse(course);
	}
	
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course) {
		return courseService.updateCourse(course);
	}
	
	@DeleteMapping("/courses/{id}")
	public void deleteCourseById(@PathVariable Integer id) {
		courseService.deleteCourse(id);
	}
	
}
