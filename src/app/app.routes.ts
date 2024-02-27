import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user.form/user.form.component';
import { UserTableComponent } from './user.table/user.table.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: 'user-form', component: UserFormComponent},
{path: 'user-table', component: UserTableComponent}
];
