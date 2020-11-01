import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'app/core/guards/auth.guard';
import { PermissionGuard } from 'app/core/guards/permission.guard';
import { UserGroupsListComponent } from 'app/modules/usergroups/usergroups-list/usergroups-list.component';
import { UserGroupsEditComponent } from 'app/modules/usergroups/usergroups-edit/usergroups-edit.component';
import { UserGroupsCreateComponent } from 'app/modules/usergroups/usergroups-create/usergroups-create.component';

const routes: Routes = [
  { 
    path: '', 
    component: UserGroupsListComponent, 
    canActivate: [AuthGuard, PermissionGuard],
    data: {
      breadcrumb: 'user groups',
      permissions: ['view.usergroups', 'viewAny.usergroups'],
    }
  },
  { 
    path: 'create', 
    component: UserGroupsCreateComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: { 
      breadcrumb: 'create user group',
      permissions: ['create.usergroups'],
    },
  },
  {
    path: ':id', 
    component: UserGroupsEditComponent, 
    canActivate: [AuthGuard, PermissionGuard],
    data: { 
      breadcrumb: 'edit user group',
      permissions: ['view.usergroups', 'viewAny.usergroups', 'update.usergroups'],
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserGroupsRoutingModule { }
