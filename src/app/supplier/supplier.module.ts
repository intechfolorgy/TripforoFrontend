import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SidebarPanelComponent } from './sidebar-panel/sidebar-panel.component';

// Material imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox'
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { FixedDeparturesRecordsComponent } from './fixed-departures-records/fixed-departures-records.component';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';
import { AddNewPnrComponent } from './add-new-pnr/add-new-pnr.component';
// Time Picker Import
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';

@NgModule({
  declarations: [
    SidebarPanelComponent,
    FixedDeparturesRecordsComponent,
    UpdateInventoryComponent,
    AddNewPnrComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    NgxMatTimepickerModule
  ]
})
export class SupplierModule { }
