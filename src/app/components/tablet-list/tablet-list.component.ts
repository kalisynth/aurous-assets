import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { TabletModelData } from '../../data/tablet-model-data';
import { EditTabletComponent } from '../edit-tablet/edit-tablet.component';
import { TabletDetailsComponent } from '../tablet-details/tablet-details.component';


@Component({
  selector: 'app-tablet-list',
  templateUrl: './tablet-list.component.html',
  styleUrls: ['./tablet-list.component.css']
})
export class TabletListComponent implements OnInit {
  listOfTablets: TabletModelData[];
  searchText;
  numOfTablets;
  numOfReadyTablets = 0;
  numOfSentTablets = 0;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.listOfTablets = this.api.getTablets();
    this.numOfTablets = this.listOfTablets.length;
    for(let i=0; i<this.listOfTablets.length; i++){
      if(this.listOfTablets[i].status == 'Ready to be sent to client'){
        this.numOfReadyTablets = this.numOfReadyTablets + 1;
      } else if(this.listOfTablets[i].sentToClient){
        this.numOfSentTablets = this.numOfSentTablets + 1;
      }
    }
  }

  deletePokemon(id: string){
    var pokemon = this.api.getTabletById(id);
    if(pokemon != null){
      this.api.deleteTablet(pokemon.id);
    }
  }

  editPokemon(id: string){
    this.router.navigate(['details', `${id}`]);
  }
}
