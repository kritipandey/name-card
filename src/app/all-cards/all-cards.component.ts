import { Component, OnInit} from '@angular/core';
import { Data } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent implements OnInit {

  get saveData():Data[]{
    return this.dataService.inputData;
  }

  set saveData(value: Data[]){
    this.dataService.inputData = value;
  }
  
  constructor(private dataService: DataService) { }

  ngOnInit(){}

  onX(index: number){
    this.dataService.inputData.splice(index, 1);
  }

  onFetch(){
    this.dataService.fetchData().subscribe(
      data => {
        this.dataService.inputData = data;
      }
    );
  }

  onDelete() {
    this.dataService.deleteData().subscribe(() => {
        this.dataService.inputData = [];
      }
    );
  }
}