
import { Routes, RouterModule } from '@angular/router';
import { TravelerComponent } from './traveler/traveler.component';     // Add this
import { HotelComponent } from './hotel/hotel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

const routing:Routes = [
    {path: '',redirectTo:'/login',pathMatch:'full'},
    { path: 'user',component: UserComponent},
    {path: 'traveler',component: TravelerComponent},
    {path: 'hotels',component: HotelComponent},
    {path:'login',component:LoginComponent}
  ];
  export const routingArray=RouterModule.forRoot(routing);