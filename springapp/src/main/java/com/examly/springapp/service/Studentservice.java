package com.examly.springapp.service;

import com.examly.springapp.model.Student;
import com.examly.springapp.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Studentservice {

    @Autowired
    private StudentRepo repo;

    public boolean addStudent(Student student) {
        try {
            repo.save(student); // Ensure id is not manually set
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    public List <Student> getAllStudents()
    {
        return repo.findAll();
    }

    public Optional<Student> getById(int id)
    {
        return repo.findById(id);
    }
    public boolean deleteStudent(int id) {
        Optional<Student> studentToDelete = repo.findById(id);
        if (studentToDelete.isPresent()) {
            repo.delete(studentToDelete.get());
            return true;
        } else {
            return false;
        }
    }
    public Student updateStudent(int id, Student student) {
        if (repo.existsById(id)) {
            student.setId(id);
            return repo.save(student);
        }
        return null;
    }
}
