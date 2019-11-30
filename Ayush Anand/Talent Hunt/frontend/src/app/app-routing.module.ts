import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : 'talent-hunt',
    loadChildren : 'src/app/talent-hunt/talent-hunt.module#TalentHuntModule'
  },
  {
    path : '**',
    redirectTo : 'talent-hunt'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
