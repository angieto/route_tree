import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouteTreeService } from './route-tree.service';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CategoryComponent } from './products/category/category.component';
import { BrandComponent } from './products/brand/brand.component';
import { DetailsComponent } from './reviews/details/details.component';
import { AuthorComponent } from './reviews/author/author.component';
import { AllComponent } from './reviews/all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ReviewsComponent,
    ProductDetailComponent,
    CategoryComponent,
    BrandComponent,
    DetailsComponent,
    AuthorComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RouteTreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
