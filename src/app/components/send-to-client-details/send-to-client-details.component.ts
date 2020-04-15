import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { TabletModelData } from '../../data/tablet-model-data';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralData } from '../../data/general-data';

@Component({
  selector: 'app-send-to-client-details',
  templateUrl: './send-to-client-details.component.html',
  styleUrls: ['./send-to-client-details.component.css'],
  providers: [GeneralData]
})
export class SendToClientDetailsComponent implements OnInit {
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
    this.tablet.lastSetup = new Date();
    this.tablet.sentToClient = true;
    this.tablet.status = "Sent To Client";
    this.tablet.dateSent = new Date();
    this.api.updateTablet(this.tablet);
    this.tablet = new TabletModelData();
    this.goBack();
  }

  goBack(){
    this.router.navigate(['details', `${this.id}`]);
  }

  onSubmit(){
    this.updatePokemon();
  }
}
