package com.coursemanager.app.services;

import java.util.List;

import com.coursemanager.app.entities.Course;

public interface CourseServices {
	
public List<Course> getallCourses() ;
	
	public Course getCourseById(long id);
	
	public Course addCourse(Course course);
	
	public Course updateCourse(Course course);
	
	public void deleteCourse(long id);

}
