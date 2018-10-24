
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
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TestimonialsExtendedComponent } from './components/testimonials-extended/testimonials-extended.component';
import { BioExtendedComponent } from './components/bio-extended/bio-extended.component';
import { ClientsExtendedComponent } from './components/clients-extended/clients-extended.component';
import { SkillsExtendedComponent } from './components/skills-extended/skills-extended.component';
import { PortfolioExtendedComponent } from './components/portfolio-extended/portfolio-extended.component';


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
    FooterComponent,
    HomeComponent,
    TestimonialsExtendedComponent,
    BioExtendedComponent,
    ClientsExtendedComponent,
    SkillsExtendedComponent,
    PortfolioExtendedComponent,
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
