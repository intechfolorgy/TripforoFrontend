import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-pnr',
  templateUrl: './add-new-pnr.component.html',
  styleUrls: ['./add-new-pnr.component.scss']
})
export class AddNewPnrComponent implements OnInit {

  isChecked:boolean=true;
  radioBtnValue:any;

  constructor() { }

  ngOnInit(): void {
    this.radioBtnValue=0
    // console.log(this.radioBtnValue);
    
  }

}
