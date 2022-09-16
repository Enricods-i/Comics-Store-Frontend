import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import {MatRippleModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

import { LoginComponent } from './login/login.component';
import { CollectionsRenderedComponent } from './collections-rendered/collections-rendered.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ComicRenderedComponent } from './comic-rendered/comic-rendered.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { AuthorPageComponent } from './author-page/author-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { WishListContentComponent } from './wish-list-content/wish-list-content.component';
import { WishListsPageComponent } from './wish-lists-page/wish-lists-page.component';
import { InputDialogComponent } from './input-dialog/input-dialog.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PurchasesPageComponent } from './purchases-page/purchases-page.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, SearchBarComponent, CollectionsRenderedComponent, ComicRenderedComponent, CatalogPageComponent, CartPageComponent, AuthorPageComponent, CategoryPageComponent, WishListContentComponent, WishListsPageComponent, InputDialogComponent, UserPageComponent, PurchasesPageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatBadgeModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatRippleModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
