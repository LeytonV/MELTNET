import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FirestoreService } from './services/firestore/firestore.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()),
              provideRouter(routes),
              importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"meltpack-net","appId":"1:953473933427:web:bd3d2821aff120b8764a06","storageBucket":"meltpack-net.appspot.com","apiKey":"AIzaSyCJCqWlEfyildnwmRm317aiyLaxZCxRT9E","authDomain":"meltpack-net.firebaseapp.com","messagingSenderId":"953473933427","measurementId":"G-7BMFKQ5T6D"}))),
              importProvidersFrom(provideFirestore(() => getFirestore()))
              ]
};
