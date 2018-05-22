import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'calendar', component: CalendarComponent },

  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);
