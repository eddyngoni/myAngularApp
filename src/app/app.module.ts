import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { OrdinalDatePipe } from './pipe/ordinal-date.pipe';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { GreetingsPipe } from './pipe/greetings.pipe';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { SizerComponent } from './sizer/sizer.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    OrdinalDatePipe,
    ChildComponent,
    ParentComponent,
    GreetingsPipe,
    ItemDetailsComponent,
    SizerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
