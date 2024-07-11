import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({ "projectId": "simple-crm-943bb", "appId": "1:608869899794:web:d59bab29a82d03164602cb", "storageBucket": "simple-crm-943bb.appspot.com", "apiKey": "AIzaSyAGBCPKPippNy1-uyG0LDEVnRZixjFOkSY", "authDomain": "simple-crm-943bb.firebaseapp.com", "messagingSenderId": "608869899794" })), provideFirestore(() => getFirestore())]
};
