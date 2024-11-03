import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-notification-panel',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './notification-panel.component.html',
  styleUrl: './notification-panel.component.css'
})
export class NotificationPanelComponent {
  @Input() notifications: { message: string, time: string }[] = [];
}
