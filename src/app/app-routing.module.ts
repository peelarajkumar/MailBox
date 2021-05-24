import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeComponent } from './compose/compose.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { SendComponent }  from './send/send.component';

const routes: Routes = [
  { path:"mailbox",component:MailboxComponent },
   { path:"",redirectTo:"mailbox",pathMatch:"full"},
    {path:"compose",component:ComposeComponent}, 
    { path:"send",component:SendComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [MailboxComponent,ComposeComponent,SendComponent];
