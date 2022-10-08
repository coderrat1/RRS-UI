import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Register/register.component';
import { TicketComponent } from './ticket/ticket.component';
import { UIComponent } from './ui/ui.component';

const routes: Routes = [
  {path:'user/Register',component:RegisterComponent},
  {path:'ticket',component:TicketComponent},
  {path:"ui",component:UIComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
