import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { TaeventsComponent } from './taevents/taevents.component';

const routes: Routes = [
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'events', component: TaeventsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
