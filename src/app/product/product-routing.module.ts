import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';


const routes: Routes = [
  // /products...
  { path: '', component: ProductDashboardComponent },
  { path: 'list', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
