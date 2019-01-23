import {
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatPaginatorModule
} from '@angular/material';
import { NgModule } from '@angular/core';


const MatComponents = [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatPaginatorModule

]
@NgModule({
    imports: MatComponents,
    exports: MatComponents,
})
export class MaterialModule { }