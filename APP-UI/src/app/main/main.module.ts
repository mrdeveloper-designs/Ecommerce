import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './Pages/nav-bar/nav-bar.component';
import { MasterComponent } from './Pages/master/master.component';


@NgModule({
  declarations: [
    NavBarComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class MainModule { }
