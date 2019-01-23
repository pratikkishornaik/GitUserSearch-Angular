import {
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule
} from '@angular/material';
import { NgModule } from '@angular/core';


const MatComponents = [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule

]
@NgModule({
    imports: MatComponents,
    exports: MatComponents,
})
export class MaterialModule { }