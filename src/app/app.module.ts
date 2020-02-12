import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MyDataGridComponent } from './my-data-grid/my-data-grid.component';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';

@NgModule({
  declarations: [
    AppComponent,
    MyDataGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WjGridModule,
    WjGridFilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
