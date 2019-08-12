import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bankFilter',
})
export class BankFilterPipe implements PipeTransform {
  transform(banks: any, searchText: any): any {
    if (searchText == null) return banks;

    return banks.filter(function (bank) {
      return (bank.bank_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
        bank.branch.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
          bank.ifsc.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
    })
  }
}
