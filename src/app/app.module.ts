import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoriusnewComponent } from './components/inventoriusnew/inventoriusnew.component';
import { InventoriusListComponent } from './components/inventorius-list/inventorius-list.component';
import { InventoriusUpdateComponent } from './components/inventorius-update/inventorius-update.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InventoriusnewComponent,
    InventoriusListComponent,
    InventoriusUpdateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
