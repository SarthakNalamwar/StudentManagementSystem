import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {
  studentId!: number;
  studentName!: string;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.studentId = +params.get('id')!;
      this.studentService.getStudentById(this.studentId).subscribe(
        student => {
          this.studentName = student.name;
        },
        error => {
          console.error('Error fetching student details', error);
        }
      );
    });
  }

  deleteStudent(): void {
    this.studentService.deleteStudent(this.studentId).subscribe(
      () => {
        console.log(`Student ${this.studentName} deleted successfully`);
        this.router.navigate(['/']);
      },
      error => {
        console.error('Error deleting student', error);
      }
    );
  }
}