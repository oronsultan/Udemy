import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  grades: Array<number>;
  warningMsg: string;
  @ViewChild("txtGrade") gradeField: ElementRef;
  grade: number;
  constructor() { 
    this.grade = 120;
    this.warningMsg = '';
    this.grades = new Array<number>();
  }

  ngOnInit() {
    this.eventKeuUp();
  }
  addGrade(){
    if (this.grade >= 0 && this.grade <= 100) {
      this.warningMsg = '';
      this.grades.push(this.grade);
      this.grade = null; 
      this.gradeField.nativeElement.focus();
    }
    else{
      this.warningMsg = "Grade must be between 0 and 100";
    }
  }
  eventHandler(keyCode) {
    if (keyCode == 13) {
     this.addGrade(); 
      }
    }
    eventKeuUp(){
      console.log(this.grade);
      if (this.grade > 100) {
        this.warningMsg = "Grade must be between 0 and 100";
      }
      else{
        this.warningMsg = '';
      }
    }
}
