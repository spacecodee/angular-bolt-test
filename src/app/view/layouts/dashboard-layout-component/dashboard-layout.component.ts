import {Component, Renderer2} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-dashboard-layout-component',
  standalone: true,
  imports: [
    NgClass,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FooterComponent,
    NgForOf
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

  isDarkMode = false;

  routes = [
    {path: '/dashboard', icon: 'fas fa-tachometer-alt', name: 'Dashboard'},
    {path: '/dashboard/products', icon: 'fas fa-box-open', name: 'Products'},
    {path: '/dashboard/categories', icon: 'fas fa-list', name: 'Categories'},
    {path: '/dashboard/cart-summary', icon: 'fas fa-shopping-cart', name: 'Cart Summary'}
  ];

  constructor(private readonly renderer: Renderer2) {
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }
  }
}
