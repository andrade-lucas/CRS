import { UserAuth } from 'src/app/models/userAuth.model';

export class Security {
    public static set(user: UserAuth, token: string) {
        const data = JSON.stringify(user);

        localStorage.setItem('crs.user', btoa(data));
        localStorage.setItem('crs.token', token);
    }

    public static setUser(user: UserAuth) {
        const data = JSON.stringify(user);
        localStorage.setItem('crs.user', btoa(data));
    }

    public static setToken(token: string) {
        localStorage.setItem('crs.token', token);
    }

    public static getUser() {
        const data = localStorage.getItem('crs.user');
        if (data)
            return JSON.parse(atob(data));
        return null;
    }

    public static getToken() {
        const data = localStorage.getItem('crs.token');
        if (data)
            return data;
        return null;
    }

    public static hasToken(): boolean {
        if (this.getToken())
            return true;
        return false;
    }

    public static clear() {
        localStorage.removeItem('crs.user');
        localStorage.removeItem('crs.token');
    }
}