import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})

export class ConfirmDialogService {
    private subject = new Subject<any>();
    private service: any;
    private id: string;

    constructor(private toastr: ToastrService) { }

    public confirmThis(service: any, id: string) {
        this.service = service;
        this.id = id;
    }

    public confirm() {
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
}