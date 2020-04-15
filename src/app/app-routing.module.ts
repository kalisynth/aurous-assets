import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTabletComponent } from './components/add-tablet/add-tablet.component';
import { EditTabletComponent } from './components/edit-tablet/edit-tablet.component';
import { TabletDetailsComponent } from './components/tablet-details/tablet-details.component';
import { TabletListComponent } from './components/tablet-list/tablet-list.component';
import { SendToClientDetailsComponent } from './components/send-to-client-details/send-to-client-details.component';
import { TabletSetupComponent } from './components/tablet-setup/tablet-setup.component';
import { ImportExportComponent } from './components/import-export/import-export.component';

const routes: Routes = [
  { path: '', redirectTo: 'tablets', pathMatch: 'full' },
  { path: 'tablets', component: TabletListComponent },
  { path: 'add', component: AddTabletComponent },
  { path: 'update/:id', component: EditTabletComponent },
  { path: 'details/:id', component: TabletDetailsComponent },
  { path: 'sending/:id', component: SendToClientDetailsComponent },
  { path: 'setup', component: TabletSetupComponent},
  { path: 'save', component: ImportExportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
