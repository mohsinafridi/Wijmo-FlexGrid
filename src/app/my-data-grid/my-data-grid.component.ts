import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as WjCore from '@grapecity/wijmo';

@Component({
  selector: 'app-my-data-grid',
  templateUrl: './my-data-grid.component.html',
  styleUrls: ['./my-data-grid.component.css']
})
export class MyDataGridComponent implements OnInit {

  data = new WjCore.CollectionView([], {
    // add groupDescriptions here
  });

  constructor(private http: HttpClient) {
    // tslint:disable-next-line: max-line-length
    this.http.get('https://data.gov.au/geoserver/ballarat-community-food-activities/wfs?request=GetFeature&typeName=ckan_70374622_81eb_4e84_ac43_587e4a4b8121&outputFormat=json')
      .subscribe(data => {
        this.data.sourceCollection = data['features'];
      });
  }

  ngOnInit() {
  }

}
