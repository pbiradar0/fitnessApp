import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from 'src/app/_models/exercise.model';
import { TrainingService } from 'src/app/_services/training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  excercises: Exercise[] = [];
  constructor(private trainingService : TrainingService) { }

  ngOnInit() {
    this.excercises = this.trainingService.getAvailableExercises();
  }

  onStartTraining(ngForm: NgForm) {
    this.trainingService.startExercise(ngForm.value.exercise)
  }

}
