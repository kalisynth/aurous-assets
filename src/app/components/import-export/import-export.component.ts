import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.css']
})
export class ImportExportComponent implements OnInit {
  saveString: string;
  submitted = false;
  private tabletsDbKey: string = 'tabletsDB';
  downloadJsonHref;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.loadJsonString();
  }

  loadJsonString(){
    this.saveString = localStorage.getItem(this.tabletsDbKey);
  }

  saveJsonString(){
    localStorage.setItem(this.tabletsDbKey, this.saveString);
  }

  saveToFile(){
    this.downloadJsonHref = this.api.generateJsonDownload(this.saveString);
  }

  onSubmit(){
    this.saveJsonString();
  }

}
