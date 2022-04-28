import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Exercise } from 'src/app/_models/exercise.model';
import { TrainingService } from 'src/app/_services/training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();
  excercises: Exercise[] = [];
  constructor(private trainingService : TrainingService) { }

  ngOnInit() {
    this.excercises = this.trainingService.getAvailableExercises();
  }

  onStartTraining() {
    this.trainingStart.emit();
  }

}
