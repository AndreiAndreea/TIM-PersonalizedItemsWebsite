import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SharedService } from './shared.service';
import { ProductService } from './product.service';

import { HttpClientModule, provideHttpClient, withFetch} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

//material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'; //icon
import { MatTooltipModule } from '@angular/material/tooltip';//tooltips
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; //input
import { MatButtonModule } from '@angular/material/button'; //buton
import { MatCardModule } from '@angular/material/card'; //card
import { MatTableModule } from '@angular/material/table'; //table
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { DesignComponent } from './design/design.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ShopComponent,
    ProductComponent,
    WelcomeComponent,
    DesignComponent,
    ContactComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatDialogModule,
    DragScrollComponent
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    SharedService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
