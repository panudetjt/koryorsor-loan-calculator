import { Component, OnInit } from '@angular/core';

interface BalanceTable {
  year: number
  remaining: number
  paymentRate: number
  principle: number
  interestAmount: number
  sum: number
  payPerDay: number
  payPerMonth: number
}

const sum = (left: number, right: number) => left + right

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
      const sum = Math.round(principle + interestAmount)
      const result = {
        year,
        remaining: balance,
        paymentRate: value,
        principle,
        interestAmount,
        sum,
        payPerDay: Math.round(sum/365),
        payPerMonth: Math.round(sum/12),
      }
      balance = Math.round(balance - result.principle)
      return result
    })
  }

  get sumPaymentRate() {
    return this.paymentRate.reduce(sum)
  }
  get sumPrinciple() {
    return this.data
      .map(x => x.principle)
      .reduce(sum)
  }
  get sumInterestRate() {
    return this.data
      .map(x => x.interestAmount)
      .reduce(sum)
  }
  get sumAll() {
    return this.data
      .map(x => x.sum)
      .reduce(sum)
  }
}
