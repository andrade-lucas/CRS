import { Security } from './security.util';
import { HttpHeaders } from '@angular/common/http';

export class AppHeader {
    public static url: String = '127.0.0.1:5001/v1/';
    constructor() {
    }

    public static composeHeader() {
        const token = Security.getToken();
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return headers;
    }
}