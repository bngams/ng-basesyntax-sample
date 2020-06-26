import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { OtherPageComponent } from './components/other-page/other-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDashboardComponent } from './product/components/product-dashboard/product-dashboard.component';


const routes: Routes = [
  { path: 'get-started', component: GetStartedComponent },
  { path: 'other-page', component: OtherPageComponent },
  // charger le module dynamiquement
  { path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: '', redirectTo: '/get-started', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
