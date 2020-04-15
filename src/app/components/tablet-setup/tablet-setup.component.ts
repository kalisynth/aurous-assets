import { Component, OnInit } from '@angular/core';
import { GeneralData } from '../../data/general-data';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { TabletModelData } from 'src/app/data/tablet-model-data';

interface TabletSelectionOptions{
  id: string;
  viewValue: string;
}

@Component({
  selector: 'app-tablet-setup',
  templateUrl: './tablet-setup.component.html',
  styleUrls: ['./tablet-setup.component.css'],
  providers: [GeneralData]
})
export class TabletSetupComponent implements OnInit {
  tabletsList : TabletSelectionOptions[];
  selectedTabletId : string;

  constructor(private api: ApiService,private router: Router, private data: GeneralData) { }

  ngOnInit(): void {
    var tablets = this.api.getTablets;
    for(let i=0; i<tablets.length; i++){
      var tabletSelect : TabletSelectionOptions = {id: tablets[i].id, viewValue: tablets[i].name};
      this.tabletsList.push(tabletSelect);
      console.log("tablet added");
    }
  }

  openStep(evt, stepName, stepLinks) {
    // Declare all variables
    var i, tabcontent, tablinks, linkcontent;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    linkcontent = document.getElementsByClassName("linkcontent");
    for (i = 0; i < linkcontent.length; i++) {
      linkcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(stepName).style.display = "block";
    document.getElementById(stepLinks).style.display = "block";
    evt.currentTarget.className += " active";
  }

  //TODO get tablet list for 'i've set this tablet -> edit page
  onSubmit(){
    this.editPokemon();
  }

  editPokemon(){
    this.router.navigate(['details', `${this.selectedTabletId}`]);
  }
}
