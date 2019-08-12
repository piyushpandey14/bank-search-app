import { NgModule } from '@angular/core';
import { InitialsPipe } from './initials/initials';
import { BankFilterPipe } from './bank-filter/bank-filter';
@NgModule({
	declarations: [InitialsPipe,
    BankFilterPipe],
	imports: [],
	exports: [InitialsPipe,
    BankFilterPipe]
})
export class PipesModule {}
