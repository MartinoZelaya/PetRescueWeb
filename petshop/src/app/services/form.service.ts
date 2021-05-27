import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { form } from '../models/form';
import { Observable } from "rxjs";

@injectable ({
    provideIn: 'root'
})

export class FormService {
    baseURL: string = "http://localhost:4200";
    constructor(private http: HttpClient) {

    }
}

SaveMascota(form: Form) {
    return this.http.post('${this.baseURL}/createanimal', form);
}