import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})

export class CreateCardComponent implements OnInit {
  @ViewChild('f') createForm: NgForm;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {}

  onCreate(data: Data){
    this.dataService.inputData.push(data);
    this.dataService.saveData(data.image, data.title, data.description);
    this.router.navigate(['./all-cards']);
    this.createForm.reset();
    console.log(this.dataService.inputData);
    return this.dataService.inputData;
  }
}