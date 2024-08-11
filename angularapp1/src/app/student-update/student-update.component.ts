import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from 'src/models/student.model';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  updateForm!: FormGroup;
  studentId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.studentId = +id;
        this.updateForm = this.formBuilder.group({
          name: ['', Validators.required],
          department: ['', Validators.required],
          phonenumber: ['', Validators.required]
        });

        this.studentService.getStudentById(this.studentId).subscribe(
          student => {
            this.updateForm.patchValue(student);
          },
          error => {
            console.error('Error fetching student details', error);
          }
        );
      } else {
        console.error('Student ID is missing');
        // Redirect to an error page or handle the case in a different way
      }
    });
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      this.studentService.updateStudent(this.studentId, this.updateForm.value).subscribe(
        () => this.router.navigate(['/']),
        error => {
          console.error('Update failed', error);
        }
      );
    }
  }
}