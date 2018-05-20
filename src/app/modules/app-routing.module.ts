import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReviewComponent} from '../components/review/review.component';
import {HomeComponent} from '../components/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'review/:id', component: ReviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
