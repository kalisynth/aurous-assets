import { Injectable } from '@angular/core';
import { formatDate } from "@angular/common";
import { HttpClient } from '@angular/common/http';
import {TabletModelData} from '../data/tablet-model-data';
import {TabletDb} from '../data/tablet-db';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private tabletsDbKey: string = 'tabletsDB';
  private tabletDailyBackupString: string = 'tabletDailyBackUpDB';
  private tabletBackupStrings: string[] = [
    'tabletDBBckupOne',
    'tabletDBBckupTwo',
    'tabletDBBckupThree'
  ];
  private lastBckup: number = 0;
  private lastBckupDate: Date;
  private downloadJsonHref;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  getTablets(): TabletModelData[]{
    var tabletListString = JSON.parse(localStorage.getItem(this.tabletsDbKey));
    if(tabletListString == null){
      return [];
    } else {
      const tabletDb = new TabletDb().deserialize(tabletListString);
      return tabletDb.tablets;
    }
  }

  getTabletById(_id: string){
    var tabletList = this.getTablets();
    return tabletList.find(x => x.id === _id);
  }

  addTablet(tabletModelData: TabletModelData): Boolean{
    var tabletlist = this.getTablets();
    var preList : number = tabletlist.length;
    var currentDate = new Date();
    const cValue = formatDate(currentDate, 'MM-dd h-mm', 'en-US');
    tabletModelData.id = `${cValue}${tabletModelData.name}`;
    tabletModelData.initSetup = currentDate;
    tabletlist.push(tabletModelData);
    var postList : number = tabletlist.length;
    var success : Boolean = postList > preList;
    if(success){
      console.log("Tablet Added");
      localStorage.setItem(this.tabletsDbKey, JSON.stringify(tabletlist));
      return true;
    } else {
      console.log('Failed to Add Tablet');
      return false;
    }
  }

  updateTablet(tabletModelData: TabletModelData){
    var tabletlist = this.getTablets();
    var currentDate = new Date();
    for(let i=0; i<tabletlist.length; i++){
      if(tabletlist[i].id == tabletModelData.id){
        tabletModelData.lastSetup = currentDate;
        tabletlist[i] = tabletModelData;
        i = tabletlist.length;
      }
    }
    localStorage.setItem(this.tabletsDbKey, JSON.stringify(tabletlist));
  }

  deleteTablet(_id: string){
    var tabletList = this.getTablets();
    for(var i=0; i<tabletList.length; i++){
      if(tabletList[i].id == _id){
        tabletList.splice(i,1);
        i = tabletList.length;
      }
    }
    localStorage.setItem(this.tabletsDbKey, JSON.stringify(tabletList));
  }
  
  backupDBJson(){
    var tabletlist = this.getTablets();
    switch(this.lastBckup){
      case 0:{ 
        localStorage.setItem(this.tabletBackupStrings[0], JSON.stringify(tabletlist));
        this.lastBckup = 1;
        break;
      }
      case 1:{
        localStorage.setItem(this.tabletBackupStrings[1], JSON.stringify(tabletlist));
        this.lastBckup = 2;
        break;
      }
      case 2:{
        localStorage.setItem(this.tabletBackupStrings[2], JSON.stringify(tabletlist));
        this.lastBckup = 0;
        break;
      }
    }
  }

  restoreBackupJson(slot: number){
    var bckupString : string;
    switch(slot){
      case 1:{
        bckupString = localStorage.getItem(this.tabletBackupStrings[0]);
        localStorage.setItem(this.tabletsDbKey, bckupString);
        break;
      }
      case 2:{
        bckupString = localStorage.getItem(this.tabletBackupStrings[1]);
        localStorage.setItem(this.tabletsDbKey, bckupString);
        break;
      }
      case 3:{
        bckupString = localStorage.getItem(this.tabletBackupStrings[2]);
        localStorage.setItem(this.tabletsDbKey, bckupString);
        break;
      }
      default:{
        bckupString = localStorage.getItem(this.tabletDailyBackupString);
        localStorage.setItem(this.tabletsDbKey, bckupString);
        break;
      }
    }
  }

  randomIntFromInterval(min : number, max : number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  generateJsonDownload(toSaveJson : string) : string{
    var theJSON = JSON.stringify(toSaveJson);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
    return this.downloadJsonHref;
  }
}
