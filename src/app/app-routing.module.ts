import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicsComponent } from './pages/pics/pics.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PicDetailComponent } from './pages/pic-detail/pic-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'pics', pathMatch:'full'},
  {path: 'pics', component: PicsComponent },
  {path: 'pics/:id', component: PicDetailComponent },
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
