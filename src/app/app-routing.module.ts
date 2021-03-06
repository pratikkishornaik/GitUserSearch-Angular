import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSearchLayoutComponent } from './user-search-layout/user-search-layout.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {
    path: 'search',
    component: UserSearchLayoutComponent,
  },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
];

// {
//   path: 'user/:id',
//   component: UserPageComponent,
// },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
