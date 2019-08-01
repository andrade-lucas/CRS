import { Security } from './security.util';
import { HttpHeaders } from '@angular/common/http';

export class AppHeader {
    public static url: String = 'http://localhost:5000/v1';
    constructor() {
    }

    public static composeHeader() {
        const token = Security.getToken();
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return headers;
    }
}