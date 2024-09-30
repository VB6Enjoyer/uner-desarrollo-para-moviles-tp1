import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
//import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home, person } from 'ionicons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [RouterModule, CommonModule, IonTabs, IonTabBar, IonTabButton, IonIcon],
  //imports: [IonicModule, RouterModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['./tabs.component.scss'],
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements OnInit {
  constructor() {
    addIcons({ home, person });
  }

  ngOnInit() { }
}