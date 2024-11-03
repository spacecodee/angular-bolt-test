import {Component} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {NotificationPanelComponent} from '../notification-panel/notification-panel.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NotificationPanelComponent,
    NgIf
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  userPhotoUrl = 'https://picsum.photos/200';
  showNotifications = false;
  notifications = [
    {message: 'New comment on your post', time: '2 mins ago'},
    {message: 'New follower', time: '10 mins ago'}
  ];

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
}
