import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/Router';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { ProductsDetailComponent } from '../../components/products-detail/products-detail.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';

const tableRoutage = [
  { path: 'list', component: ProductsListComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'product/:id', component: ProductsDetailComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [ ],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(tableRoutage)
  ],
  providers: [],
  bootstrap: []
})
export class MyRoutingModule { }
