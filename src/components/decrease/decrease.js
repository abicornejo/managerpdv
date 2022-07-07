import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const DecreaseTable = () => {
    const merma = [
        {fecha:'', producto: '', cantidad:'', descripcion:'', estatus:''}
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
                        <h5>Catalogo de Merma</h5>
                    </div>
                    <div className='d-flex flex-wrap'>
                        <div className="field col-lg-4 col-12 p-fluid">
                            <div htmlFor="name1">Producto</div>
                            <InputText id="name1" type="text" placeholder='Ubicacion'/>
                        </div>
                        <div className='d-flex flex-wrap py-4'>
                            <Button label="Limpiar" className="p-button-warning me-1" icon='pi pi-pencil' iconPos='right'/>
                            <Button label="Nuevo" className="p-button-success me-1" icon='pi pi-plus' iconPos='right'/>
                        </div>
                    </div>
                    <div>
                        <DataTable value={merma}  responsiveLayout="scroll"
                            dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown">
                            <Column field="fecha" header="Fecha"></Column>
                            <Column field="producto" header="Producto"></Column>
                            <Column field="cantidad" header="Cantidad"></Column>
                            <Column field="descripcion" header="Descripcion"></Column>
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

export default React.memo(DecreaseTable, comparisonFn);