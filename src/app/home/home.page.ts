import { Component, OnInit } from '@angular/core';

interface BalanceTable {
  year: number
  remaining: number
  paymentRate: number
  principle: number
  interestAmount: number
  sum: number
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  balance = 100000
  year = 15
  paymentRate = [1.5, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  data: BalanceTable[] = []

  constructor() {}

  ngOnInit() {
    this.calculate()
  }

  calculate() {
    let balance = this.balance
    this.data = this.paymentRate.map((value, index) => {
      const year = index + 1
      const interestAmount = Math.round(year === 1 ? 0 : (1/100) * balance)
      const principle = Math.round(this.balance * (value/100))
      const result = {
        year,
        remaining: balance,
        paymentRate: value,
        principle,
        interestAmount,
        sum: Math.round(principle + interestAmount),
      }
      balance = Math.round(balance - result.principle)
      return result
    })
  }

  get sumPaymentRate() {
    return this.paymentRate.reduce((acc, cur) => acc + cur)
  }
  get sumPrinciple() {
    return this.data
      .map(x => x.principle)
      .reduce((acc, cur) => acc + cur)
  }
  get sumInterestRate() {
    return this.data
      .map(x => x.interestAmount)
      .reduce((acc, cur) => acc + cur)
  }
  get sumAll() {
    return this.data
      .map(x => x.sum)
      .reduce((acc, cur) => acc + cur)
  }
}
