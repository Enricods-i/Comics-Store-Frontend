import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorPageComponent } from './author-page/author-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { PurchasesPageComponent } from './purchases-page/purchases-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { WishListContentComponent } from './wish-list-content/wish-list-content.component';
import { WishListsPageComponent } from './wish-lists-page/wish-lists-page.component';

const routes: Routes = [
  { path: '', component: UserPageComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'user/purchases', component: PurchasesPageComponent },
  { path: 'cart', component: CartPageComponent },
  {
    path: 'catalog',
    component: SearchPageComponent,
    runGuardsAndResolvers: 'always',
  },
  { path: 'catalog/collection', component: CatalogPageComponent },
  { path: 'catalog/author', component: AuthorPageComponent },
  { path: 'catalog/category', component: CategoryPageComponent },
  { path: 'wish-list', component: WishListsPageComponent },
  { path: 'wish-list/content', component: WishListContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
