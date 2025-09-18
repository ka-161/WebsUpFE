import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'templates/template1', 
        pathMatch: 'full'},
    { 
        path: 'templates/:id', 
        loadComponent: () => 
            import('./templates/template-detail/template-detail')
        .then(m => m.TemplateDetail) 
    },
    { 
        path: 'user-templates/:id', 
        loadComponent: () => 
            import('./user/user-template-detail/user-template-detail')
        .then(m => m.UserTemplateDetail)
    },
    { 
        path: '**', 
        redirectTo: 'templates/template1'
    },
    {
        path: 'test',
        loadComponent: () => import('./test/test')
        .then(m => m.TestComponent)
    }
];
