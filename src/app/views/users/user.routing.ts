import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListUserComponent } from "./list-user/list-user.component";
import { UsersComponent } from "./users.component";
const routes: Routes = [
  {
    path: "",
    data: {
      title: "User",
    },
    children: [
      {
        path: "",
        redirectTo: "view_users",
        pathMatch: "full",
      },
      {
        path: "view_users",
        component: ListUserComponent,
        data: {
          title: "View Users",
        },
      },
      {
        path: "add_user",
        component: UsersComponent,
        data: {
          title: "Add/Edit User",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
