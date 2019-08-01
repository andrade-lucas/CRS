import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppHeader } from '../utils/header.util';
import { Block } from '../models/block.model';
import { GetBlocks } from '../models/getBlocks.model';

@Injectable({
    providedIn: 'root'
})
export class BlockService {
    constructor(private httpClient: HttpClient) {
    }

    public get() {
        return this.httpClient.get<GetBlocks[]>(`${AppHeader.url}/blocks`, { headers: AppHeader.composeHeader() });
    }

    public getById(id: String) {
        return this.httpClient.get<Block>(`${AppHeader.url}/blocks/${id}`, { headers: AppHeader.composeHeader() });
    }

    public post(data: Block) {
        return this.httpClient.post(`${AppHeader.url}/blocks`, data, { headers: AppHeader.composeHeader() });
    }

    public put(data: Block) {
        return this.httpClient.put(`${AppHeader.url}/blocks`, data, { headers: AppHeader.composeHeader() });
    }

    public delete(id: String) {
        return this.httpClient.delete(`${AppHeader.url}/blocks/${id}`, { headers: AppHeader.composeHeader() });
    }
}