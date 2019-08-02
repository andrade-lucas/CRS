import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})

export class ConfirmDialogService {
    private subject = new Subject<any>();
    private service: any;
    private id: string;

    constructor(private toastr: ToastrService) { }

    confirmThis(service: any, id: string) {
        this.service = service;
        this.id = id;
    }

    confirm() {
        this.service.delete(this.id).subscribe(
            (data: any) => {
                if (data.status) {
                    this.toastr.success(data.message, 'Sucesso');
                }
                else
                    this.toastr.error(data.message, 'Erro');
            }
        )
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}