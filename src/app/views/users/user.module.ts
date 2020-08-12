import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersComponent } from "../users/users.component";
import { ListUserComponent } from "../users/list-user/list-user.component";

// Routing
import { UserRoutingModule } from "../users/user.routing";
@NgModule({
  declarations: [UsersComponent, ListUserComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
