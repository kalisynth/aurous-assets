import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { TabletModelData } from '../../data/tablet-model-data';
import { GeneralData } from '../../data/general-data';

@Component({
  selector: 'app-add-tablet',
  templateUrl: './add-tablet.component.html',
  styleUrls: ['./add-tablet.component.css'],
  providers: [GeneralData]
})
export class AddTabletComponent implements OnInit {
  tablet: TabletModelData = new TabletModelData();
  submitted = false;
  listOfTabletStatus;

  constructor(private api: ApiService, private router: Router, private data: GeneralData) { }

  ngOnInit(): void {
    this.listOfTabletStatus = this.data.tabletStatus;
  }

  newTablet(): void{
    this.submitted = false;
    this.tablet = new TabletModelData();
  }

  save(){
    var newPin = this.api.randomIntFromInterval(1000, 9999);
    this.tablet.lastSetup = new Date();
    this.tablet.sentToClient = false;
    this.tablet.pinCode = newPin;
    this.api.addTablet(this.tablet);
    this.tablet = new TabletModelData();
    this.goToList();
  }

  setAsToday(){

  }

  goToList(){
    this.router.navigate(['tablets']);
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }
}
