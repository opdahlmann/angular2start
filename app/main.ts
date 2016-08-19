import { bootstrap } from '@angular/platform-browser-dynamic';
import { FirstComponent } from './first.component';
import { enableProdMode } from '@angular/core';

enableProdMode();

bootstrap(FirstComponent)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));