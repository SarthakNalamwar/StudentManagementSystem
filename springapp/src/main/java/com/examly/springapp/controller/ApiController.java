package com.examly.springapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.Student;
import com.examly.springapp.service.Studentservice;

@RestController
@CrossOrigin(origins = "http://localhost:4200")  // Global CORS configuration
public class ApiController {

    @Autowired
    private Studentservice service;

    @PostMapping("/addStudent")
    public ResponseEntity<String> addStudent(@RequestBody Student student) {
        boolean isAdded = service.addStudent(student);
        if (isAdded) {
            return new ResponseEntity<>("Student added successfully", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Failed to add student", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getAllStudent")
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = service.getAllStudents();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<Student> getById(@PathVariable int id) {
        Optional<Student> student = service.getById(id);
        if (student.isPresent()) {
            return new ResponseEntity<>(student.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/updateStudent/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable int id, @RequestBody Student student) {
        Student updatedStudent = service.updateStudent(id, student);
        if (updatedStudent != null) {
            return ResponseEntity.ok(updatedStudent);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/deleteStudent/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable int id) {
        boolean isDeleted = service.deleteStudent(id);
        if (isDeleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
