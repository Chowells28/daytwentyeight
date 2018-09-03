
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BioComponent } from './components/bio/bio.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LandingPageContentComponent } from './components/landing-page-content/landing-page-content.component';
import { NavOverlayComponent } from './components/nav-overlay/nav-overlay.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BioComponent,
    LandingPageComponent,
    TestimonialsComponent,
    TestimonialComponent,
    SkillsComponent,
    ClientsComponent,
    PortfolioComponent,
    LandingPageContentComponent,
    NavOverlayComponent,
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
