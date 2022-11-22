import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UpdateInventoryComponent } from '../update-inventory/update-inventory.component';

@Component({
  selector: 'app-fixed-departures-records',
  templateUrl: './fixed-departures-records.component.html',
  styleUrls: ['./fixed-departures-records.component.scss']
})
export class FixedDeparturesRecordsComponent implements OnInit {

  constructor( public dialog: MatDialog, private router: Router ) { }

  openDialog() {
    const dialogRef = this.dialog.open(UpdateInventoryComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      // console.log(`Dialog result: ${result}`);
    });
  }
  addPnr(){
    this.router.navigate(['add_new_pnr'])
  }

  ngOnInit(): void {
  }


}
