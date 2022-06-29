import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const FormLayoutDemo = () => {
    const products = [
        {nombre:'aceite', codigo:'62107278B8A51', pCompra:'$12.00', pVenta:'$22.00', descripcion:'Abarrotes', categoria:'Cajas', unidad:'Pieza', marca:'', medida: '', ubicacion:'Pasillo A, Estante AA', stock:'1', estado:'Activo', opciones :''}
    ];
    const iconsOption = () =>{
        return(
            <div>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-warning" aria-label="Editar" />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" aria-label="Eliminar" />
            </div>
        )
    }

    return (
        <div className="grid">
            <div className="col-12 md:col-12">
                <div className="card ">
                    <div className='d-flex flex-wrap justify-content-between'>
                        <h5>Catalogo de Productos</h5>
                        <div className='d-flex flex-wrap'>
                            <Button label="Limpiar" className="p-button-warning me-1" icon='pi pi-pencil' iconPos='right'/>
                            <Button label="Nuevo" className="p-button-success me-1" icon='pi pi-plus' iconPos='right'/>
                            <Button label="Imprimir" className="p-button-info" icon='pi pi-print' iconPos='right'/>
                        </div>
                    </div>
                    <div className='d-flex flex-wrap justify-content-between p-fluid'>
                        <div className="field col-lg-2 col-12">
                            <div htmlFor="name1">Nombre</div>
                            <InputText id="name1" type="text" placeholder='Nombre'/>
                        </div>
                        <div className="field col-lg-2 col-12">
                            <div htmlFor="name1">Codigo</div>
                            <InputText id="name1" type="text" placeholder='Codigo'/>
                        </div>
                        <div className="field col-lg-2 col-12">
                            <div htmlFor="name1">Categoria</div>
                            <Dropdown id="name1" type="text" placeholder='--Seleccione--'/>
                        </div>
                        <div className="field col-lg-2 col-12">
                            <div htmlFor="name1">Ubicacion</div>
                            <Dropdown id="name1" type="text" placeholder='--Seleccione--'/>
                        </div>
                        <div className="field col-lg-2 col-12">
                            <div htmlFor="name1">Estatus</div>
                            <Dropdown id="name1" type="text" placeholder='--Seleccione--'/>
                        </div>
                        <div className="field col-lg-2 col-12">
                            <div htmlFor="name1">Articulos</div>
                            <div className='mt-2'>
                                <Checkbox id="name1" type="text"/>
                                <label className='ms-1 my-auto'>Stock Minimo</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <DataTable value={products}  responsiveLayout="scroll">
                            <Column field="nombre" header="Nombre"></Column>
                            <Column field="codigo" header="Codigo"></Column>
                            <Column field="pCompra" header="P.Compra"></Column>
                            <Column field="pVenta" header="P.Venta"></Column>
                            <Column field="descripcion" header="Descripcion"></Column>
                            <Column field="categoria" header="Categoria"></Column>
                            <Column field="unidad" header="Unidad"></Column>
                            <Column field="marca" header="Marca"></Column>
                            <Column field="medida" header="Medida"></Column>
                            <Column field="ubicacion" header="Ubicacion"></Column>
                            <Column field="stock" header="Stock"></Column>
                            <Column field="estado" header="Estado"></Column>
                            <Column field="opciones" body={iconsOption} header="Opciones"></Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        </div>
    )
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(FormLayoutDemo, comparisonFn);
