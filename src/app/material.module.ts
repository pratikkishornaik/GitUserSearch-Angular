import {
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule
} from '@angular/material';
import { NgModule } from '@angular/core';


const MatComponents = [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule
]
@NgModule({
    imports: MatComponents,
    exports: MatComponents,
})
export class MaterialModule { }