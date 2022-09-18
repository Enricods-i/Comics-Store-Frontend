import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { CollectionsRenderedComponent } from './collections-rendered/collections-rendered.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  { path: '', component: UserPageComponent },
  { path: 'user', component: UserPageComponent },
  {
    path: 'catalog',
    component: CollectionsRenderedComponent,
    runGuardsAndResolvers: 'always',
  },
  { path: 'catalog/collection', component: CatalogPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
