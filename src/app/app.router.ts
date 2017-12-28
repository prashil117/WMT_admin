
import { Routes, RouterModule } from '@angular/router';
import { TravelerComponent } from './traveler/traveler.component';     // Add this
import { HotelComponent } from './hotel/hotel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';

const routing:Routes = [
    {path: '',redirectTo:'/user',pathMatch:'full'},
    { path: 'user',component: UserComponent},
    {path: 'traveler',component: TravelerComponent},
    {path: 'hotels',component: HotelComponent}
  ];
  export const routingArray=RouterModule.forRoot(routing);