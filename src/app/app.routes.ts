import {Routes} from '@angular/router';
import {DashboardComponent} from './view/pages/dashboard/dashboard.component';
import {CategoriesComponent} from './view/pages/categories/categories.component';
import {CartSummaryComponent} from './view/pages/cart-summary/cart-summary.component';
import {ProductComponent} from './view/pages/product/product.component';
import {AppComponent} from './app.component';
import {DashboardLayoutComponent} from './view/layouts/dashboard-layout-component/dashboard-layout.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AppComponent}, // Assuming you have a HomeComponent
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {path: '', component: DashboardComponent, outlet: 'dashboard'},
      {path: 'products', component: ProductComponent, outlet: 'dashboard'},
      {path: 'categories', component: CategoriesComponent, outlet: 'dashboard'},
      {path: 'cart-summary', component: CartSummaryComponent, outlet: 'dashboard'},
    ]
  }
];
