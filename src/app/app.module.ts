import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http, XHRBackend } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './router.module';
import { AuthGuard } from './shared';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ExtendedXHRBackend } from './config/ExtendedXHRBackend';
import { CustExtBrowserXhr } from './config/CustExtBrowserXhr';

import { UsuarioService } from './shared/services/usuario.service';

import { HttpService } from './shared/services/http.service';

import { AppComponent } from './app.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
  ],
  providers: [AuthGuard, { provide: CustExtBrowserXhr, useClass: ExtendedXHRBackend }, UsuarioService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
