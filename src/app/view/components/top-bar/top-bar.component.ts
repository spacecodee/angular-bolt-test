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
    if (this.showNotifications) {
      document.addEventListener('click', this.onDocumentClick);
    } else {
      document.removeEventListener('click', this.onDocumentClick);
    }
  }

  onDocumentClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('app-notification-panel') && !target.closest('button')) {
      this.showNotifications = false;
      document.removeEventListener('click', this.onDocumentClick);
    }
  }
}
