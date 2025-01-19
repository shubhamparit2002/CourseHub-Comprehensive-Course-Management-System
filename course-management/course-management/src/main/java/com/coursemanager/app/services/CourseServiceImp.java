package com.coursemanager.app.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coursemanager.app.dao.CourseDao;
import com.coursemanager.app.entities.Course;

import jakarta.persistence.EntityNotFoundException;

@Service
public class CourseServiceImp implements CourseServices {
	
	@Autowired
	private CourseDao courseDao;


	@Override
	public List<Course> getallCourses() {
		return courseDao.findAll();
	}
	@Override
	public Course getCourseById(long id) {
	    return courseDao.findById(id).orElseThrow(() -> new EntityNotFoundException("Course not found with id: " + id));
	}

	@Override
	public Course addCourse(Course course) {
		// TODO Auto-generated method stub
		courseDao.save(course);
		
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
		// TODO Auto-generated method stub
		courseDao.save(course);
		 return course;
		 
	}
	@Override
	public void deleteCourse(long id) {
	    if (courseDao.existsById(id)) {
	    	courseDao.deleteById(id);
	    } else {
	        throw new EntityNotFoundException("Course not found with id: " + id);
	    }
	}

	

}
