import { Component, OnInit } from '@angular/core';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private mainService: MainService ) { }

  ngOnInit(): void {
    this.mainService.getWeatherData().subscribe(res => {
      console.log(res)
    })
  }

}
