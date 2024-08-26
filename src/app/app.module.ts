import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirstcComponentComponent } from './components/first-component/first-component.component';
import {SecundComponentComponent } from './components/secund-component/secund-component.component'

@NgModule({
    declarations: [
    AppComponent,
    FirstcComponentComponent,
    SecundComponentComponent
    ],
    imports: [
    BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
