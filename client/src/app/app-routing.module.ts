import { AllComponent } from './reviews/all/all.component';
import { AuthorComponent } from './reviews/author/author.component';
import { CategoryComponent } from './products/category/category.component';
import { BrandComponent } from './products/brand/brand.component';
import { DetailsComponent } from './reviews/details/details.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent, children: [
        { path: 'details/:id', component: DetailsComponent},
        { path: 'brand/:brand', component: BrandComponent},
        { path: 'category/:cat', component: CategoryComponent}
    ] },
    { path: 'reviews', component: ReviewsComponent, children: [
        { path: 'details/:id', component: DetailsComponent},
        { path: 'author/:id', component: AuthorComponent},
        { path: 'all/:id', component: AllComponent}
    ] },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
