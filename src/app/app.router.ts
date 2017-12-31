
import { Routes, RouterModule } from '@angular/router';
import { TravelerComponent } from './traveler/traveler.component';     // Add this
import { HotelComponent } from './hotel/hotel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { EdithotelComponent } from './edithotel/edithotel.component';
import { AddtavelerComponent } from './addtaveler/addtaveler.component';
import { EdittavelerComponent } from './edittaveler/edittaveler.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';

const routing:Routes = [
    {path: '',redirectTo:'/login',pathMatch:'full'},
    { path: 'user',component: UserComponent},
    {path: 'traveler',component: TravelerComponent},
    {path: 'hotels',component: HotelComponent},
    {path:'login',component:LoginComponent},
    {path:'edithotel/:id',component:EdithotelComponent},
    {path:'addhotel',component:AddhotelComponent},
    {path:'adduser',component:AdduserComponent},
    {path:'edituser/:email_id',component:EdituserComponent},
    {path:'addtraveler',component:AddtavelerComponent},
    {path:'edittraveler',component:EdittavelerComponent},
    {path:'dashboard',component:DashboardComponent}
   
   
  ];
  export const routingArray=RouterModule.forRoot(routing);