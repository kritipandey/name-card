import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data } from './data.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})

export class DataFormComponent implements OnInit {
  @ViewChild('f') cardForm: NgForm;
  inputData: Data[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {}

  onCreate(data: Data){
    this.inputData.push(data);
    this.dataService.saveData(data.image, data.title, data.description);
    this.cardForm.reset();
    console.log(this.inputData);
    return this.inputData;
  }

  onX(index: number){
    this.inputData.splice(index, 1);
  }

  onFetch(){
    this.dataService.fetchData().subscribe(
      data => {
        this.inputData = data;
      }
    );
  }

  onDelete() {
    this.dataService.deleteData().subscribe(() => {
        this.inputData = [];
      }
    );
  }
}
