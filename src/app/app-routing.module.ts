import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './components/store/store.component';
import { HoneComponent } from './components/hone/hone.component';
import { KeepsComponent } from './components/keeps/keeps.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnimalsComponent } from './components/animals/animals.component';




const routes: Routes = [
    { path: '', component : HoneComponent },
    { path: '', redirectTo : 'tienda' , pathMatch : 'full' },
    { path: 'home', component : HoneComponent },
    { path: 'animals', component : AnimalsComponent },
    { path: 'contact', component : ContactComponent },
    { path: 'keepers', component : KeepsComponent },
    { path: 'store', component : StoreComponent },
    { path: '**', component : HoneComponent },

];

export  const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
