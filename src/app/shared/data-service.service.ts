import { Injectable } from '@angular/core';
import { proveedorModel } from '../model/proveedor.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  url: string = "http://localhost:9090/api/proveedor";
  constructor(private http:HttpClient) { }

  saveProveedor(proveedor:proveedorModel){
    const data ={
      ...proveedor
    };
    return this.http.post(this.url,data)
  }
  listProveedores(){
    return this.http.get(this.url)
  }
  deleteProveedor(provedor:proveedorModel){
    const data ={
      ...provedor
    }
    console.log(data);
    return this.http.put(this.url,data)
  }
}
