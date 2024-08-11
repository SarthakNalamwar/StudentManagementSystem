import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student: any;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    const studentIdString = this.route.snapshot.paramMap.get('id');
    
    if (studentIdString) {
      const studentId = +studentIdString;  // Convert to number
      this.studentService.getStudentById(studentId).subscribe(data => {
        this.student = data;
      });
    } else {
      console.error('Student ID is not available in route parameters.');
    }
  }
}

