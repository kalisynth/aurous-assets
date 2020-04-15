import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { TabletModelData } from '../../data/tablet-model-data';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralData } from '../../data/general-data';

@Component({
  selector: 'app-edit-tablet',
  templateUrl: './edit-tablet.component.html',
  styleUrls: ['./edit-tablet.component.css'],
  providers: [GeneralData]
})
export class EditTabletComponent implements OnInit {
  id: string;
  tablet: TabletModelData;
  submitted = false;
  listOfTabletStatus;

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService, private data: GeneralData) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.listOfTabletStatus = this.data.tabletStatus;

    this.tablet = this.api.getTabletById(this.id);

    console.log("tablet id:",this.id);
  }

  updatePokemon(){
    console.log('pokemon updated');
    this.api.updateTablet(this.tablet);
    this.tablet = new TabletModelData();
    this.goToList();
  }

  deletePokemon(){
    var pokemon = this.api.getTabletById(this.id);
    if(pokemon != null){
      this.api.deleteTablet(pokemon.id);
    }
  }

  onSubmit(){
    this.updatePokemon();
  }
  
  goToList(){
    this.router.navigate(['/tablets']);
  }

}
