import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  grades: Array<number>;
  @ViewChild("txtGrade") gradeField: ElementRef;
  grade: number;
  constructor() { 
    this.grades = new Array<number>();
  }

  ngOnInit() {
  }
  addGrade(){
    if (this.grade != null && this.grade <= 100) {
      this.grades.push(this.grade);
      this.grade = null; 
      this.gradeField.nativeElement.focus();
    }
  }
  eventHandler(keyCode) {
    if (keyCode == 13) {
     this.addGrade(); 
    }
 } 
}
