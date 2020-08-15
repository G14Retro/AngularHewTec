import { Component, OnInit } from '@angular/core';
import { proveedorModel } from '../../model/proveedor.model';
import { NgForm } from '@angular/forms';
import { DataServiceService } from '../../shared/data-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {
  proveedor:proveedorModel;
  proveedores: proveedorModel[]=[];
  constructor(private proveedorService:DataServiceService) { 
    this.proveedorService.listProveedores().subscribe((data:any)=>{
      this.proveedores = data;
    },(err=>{
      console.log(err);
    }));

  }

  ngOnInit() {
    this.proveedor = new proveedorModel;
  }
  
  guardar(form:NgForm){
    if (form.invalid) {
      return;
    }
    this.proveedorService.saveProveedor(this.proveedor).subscribe(resp=>{
      location.reload();
    },(err=>{
      console.log(err);
    }));

  }
  eliminar(id:string,nombre:string){
    this.proveedor.id = id;
    this.proveedor.nombre=nombre;
    this.proveedorService.deleteProveedor(this.proveedor).subscribe(resp=>{
      location.reload();
    });
    
  }
}
