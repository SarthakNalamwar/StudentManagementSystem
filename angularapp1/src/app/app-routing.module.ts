import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import{StudentUpdateComponent} from'./student-update/student-update.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'add', component: StudentAddComponent },
  { path: 'details/:id', component: StudentDetailsComponent },
  { path: 'update/:id', component: StudentUpdateComponent },
  {path:'delete/:id',component:StudentDeleteComponent},
  {path:'student-list',component:StudentListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


