import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewPnrComponent } from './add-new-pnr/add-new-pnr.component';
import { FixedDeparturesRecordsComponent } from './fixed-departures-records/fixed-departures-records.component';
import { SidebarPanelComponent } from './sidebar-panel/sidebar-panel.component';

const routes: Routes = [
  { path: '', component: SidebarPanelComponent, children:[
    { path: 'supplier', redirectTo: '/supplier', pathMatch: 'full' },
    { path: '', component: FixedDeparturesRecordsComponent },
    { path: 'add_new_pnr', component: AddNewPnrComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
