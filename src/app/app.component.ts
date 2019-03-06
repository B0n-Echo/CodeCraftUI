import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  title = 'CodeCraftDesign';
  isClicked: boolean;
  navTitle: string;
  item: any;


  ngOnInit(): void {
    this.isClicked = false;

  }

  onChangeTab(event, navItem: string){
    this.isClicked = true;
    this.item = null;

    switch (navItem) {
			case 'Bed':
        this.navTitle = "BED LAMP"
        this.item = 1;
				break;
			case 'Noria':
      this.navTitle = "NORIA AC"
      this.item = 2;
				break;
			case 'LGTV':
        this.navTitle = "LG TV"
        this.item = 3;
				break;
			case 'Thermostat':
        this.navTitle = "THERMOSTAT"
        this.item = 4;
				break;
			default:
				break;
		}
}

onBack(event){
  if(event) {
    this.isClicked = false;
  }
}
}
