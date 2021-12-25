import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonatgaComponent } from './component/personatga/personatga.component';
import { PersonatgesComponent } from './component/personatges/personatges.component';

const routes: Routes = [
  { path: '', component: PersonatgesComponent },
  { path: 'image/:id', component: PersonatgaComponent },
  { path: '**', component: PersonatgesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
