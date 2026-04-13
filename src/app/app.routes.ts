import { Routes } from '@angular/router';
import { Client } from './client/client';

export const routes: Routes = [
    {
        path: 'client',
        component: Client
    },
    {
        path: '',
        redirectTo: 'client',
        pathMatch: 'full'
    },
];
