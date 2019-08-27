import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bankFilter',
})
export class BankFilterPipe implements PipeTransform {
  transform(banks: any, nameFilter: any, branchFilter: any, ifscFilter: any): any {
    if (nameFilter == null && branchFilter == null && ifscFilter == null) return banks;

    let filteredBanks = banks;
    if (nameFilter != "") {
      filteredBanks = filteredBanks.filter(bank => {
        return (bank.bank_name.toLowerCase().indexOf(nameFilter.toLowerCase()) > -1)
      })
    }

    if (branchFilter != "") {
      filteredBanks = filteredBanks.filter(bank => {
        return (bank.branch.toLowerCase().indexOf(branchFilter.toLowerCase()) > -1)
      })
    }

    let ifscFilteredBanks;
    if (ifscFilter.length > 0) {
      ifscFilter.forEach(ifsc => {
        let banks = filteredBanks.filter(bank => {
          return (bank.ifsc.toLowerCase().indexOf(ifsc.toLowerCase()) > -1)
        })
        if(ifscFilteredBanks){
          banks.forEach(e=>{
            ifscFilteredBanks.push(e);
          });
        }
        else{
          ifscFilteredBanks = banks;
        }
      })

      return ifscFilteredBanks;
    }

    return filteredBanks;
  }
}
