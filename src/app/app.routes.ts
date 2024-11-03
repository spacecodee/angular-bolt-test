import {Routes} from '@angular/router';
import {DashboardComponent} from './view/pages/dashboard/dashboard.component';
import {CategoriesComponent} from './view/pages/categories/categories.component';
import {CartSummaryComponent} from './view/pages/cart-summary/cart-summary.component';
import {ProductComponent} from './view/pages/product/product.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'cart-summary', component: CartSummaryComponent},
];
