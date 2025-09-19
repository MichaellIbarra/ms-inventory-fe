import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './modules/dashboard/dashboard-routing.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', // es para que haga match exacto del path
    redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: false, useHash: true} // enableTracing es para debuggear las rutas, useHash es para que las rutas usen el hash (#)
    ),
    DashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
