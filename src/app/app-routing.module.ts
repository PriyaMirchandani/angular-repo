import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DatepickerTestComponent } from './datepicker-test/datepicker-test.component';
import { TimepickerTestComponent } from './timepicker-test/timepicker-test.component';
import { RatingTestComponent } from './rating-test/rating-test.component';
import { SwitchComponent } from './switch/switch.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { CarouselTestComponent } from './carousel-test/carousel-test.component';
import { ProductFormComponent } from './product-form/product-form.component';


const routes: Routes = [ {path:'greet',component:GreetingComponent},
{path:'product',component:ProductListComponent},
{path:'date-picker',component:DatepickerTestComponent},
{path:'timepicker',component:TimepickerTestComponent},
{path:'rating',component:RatingTestComponent},
{path:'switch',component:SwitchComponent},
{path:'pipetest',component:PipeTestComponent},
{path:'carousel',component:CarouselTestComponent},
{path:'form',component:ProductFormComponent},
{path:'',redirectTo:'/greet',pathMatch:'full'},
{path:'**',redirectTo:'/',pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
