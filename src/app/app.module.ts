import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreComponent } from './components/store/store.component';
import { ParksComponent } from './components/parks/parks.component';
import {FormsModule} from '@angular/forms';
import { routing, appRoutingProviders } from './app-routing.module';
import { HoneComponent } from './components/hone/hone.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepsComponent } from './components/keeps/keeps.component';


@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ParksComponent,
    HoneComponent,
    AnimalsComponent,
    ContactComponent,
    KeepsComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    appRoutingProviders,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
