import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  userPhotoUrl = 'https://picsum.photos/200';

  onNotificationsClick() {
    // Handle the notification button click event here
    console.log('Notifications button clicked');
  }
}
