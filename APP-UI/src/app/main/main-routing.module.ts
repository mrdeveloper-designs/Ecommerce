
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MasterComponent } from "./Pages/master/master.component";
import { NavBarComponent } from "./Pages/nav-bar/nav-bar.component";

const routes: Routes = [
    {
      path:'master',
      component: MasterComponent,
      children: [{
          path: 'nav',
          component:NavBarComponent
      }]
    },
]
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class MainRotingModule {
  
  }