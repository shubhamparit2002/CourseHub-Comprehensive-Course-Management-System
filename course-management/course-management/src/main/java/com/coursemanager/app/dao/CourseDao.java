package com.coursemanager.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.coursemanager.app.entities.Course;

@Repository
public interface CourseDao extends JpaRepository<Course, Long>{

}
