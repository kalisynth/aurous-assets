import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { TabletModelData } from '../../data/tablet-model-data';
import { TabletListComponent } from '../../components/tablet-list/tablet-list.component';

@Component({
  selector: 'app-tablet-details',
  templateUrl: './tablet-details.component.html',
  styleUrls: ['./tablet-details.component.css'],
})
export class TabletDetailsComponent implements OnInit {
  id: string;
  tabletData: TabletModelData;

  constructor(private route: ActivatedRoute, private router: Router, private api:ApiService) { }

  ngOnInit(): void {
    this.loadPokemonData();
  }

  loadPokemonData(){
    this.id = this.route.snapshot.params['id'];
    this.tabletData = this.api.getTabletById(this.id);
  }

  list(){
    this.router.navigate(['tablets']);
  }

  editPokemon(){
    this.router.navigate(['update', `${this.id}`]);
  }

  deletePokemon(){
    var pokemon = this.api.getTabletById(this.id);
    if(pokemon != null){
      this.api.deleteTablet(pokemon.id);
    }
  }

  sendToClient(){
    this.router.navigate(['sending', `${this.id}`]);
  }

  returnedFromClient(){
    var tablet = this.api.getTabletById(this.id);
    if(tablet != null){
      tablet.sentToClient = false;
      tablet.clientProgram = '';
      tablet.clientProvider = '';
      tablet.lastSetup = new Date();
      tablet.dateSent = null;
      tablet.status = "Returned from Client";
      this.api.updateTablet(tablet);
      this.loadPokemonData();
    }
  }

  setFactoryReset(){
    var tablet = this.api.getTabletById(this.id);
    if(tablet != null){
      tablet.status = "Needs Setup";
      tablet.lastSetup = new Date();
      this.api.updateTablet(tablet);
      this.loadPokemonData();
    }
  }
}
