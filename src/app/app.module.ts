import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PicsComponent } from './pages/pics/pics.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PicListComponent } from './components/pic-list/pic-list.component';
import { PicCardComponent } from './components/pic-card/pic-card.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PicDetailComponent } from './pages/pic-detail/pic-detail.component';
import { HastagPipePipe } from './shared/hastag-pipe.pipe';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PicsComponent,
    ContactsComponent,

    PicListComponent,
    PicCardComponent,
    ContactFormComponent,
    PicDetailComponent,
    HastagPipePipe,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
