import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoriusListComponent } from './components/inventorius-list/inventorius-list.component';
import { InventoriusnewComponent } from './components/inventoriusnew/inventoriusnew.component';
import { InventoriusUpdateComponent } from './components/inventorius-update/inventorius-update.component';

const routes: Routes = [
  { path: '', component: InventoriusListComponent },
  { path: 'add', component: InventoriusnewComponent },
  { path: 'update/:id', component: InventoriusUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
