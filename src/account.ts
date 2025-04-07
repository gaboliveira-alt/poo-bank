import { Bank } from "./bank"
import { allignLine, formatCurrency, formatText } from "./utils"
import { Transaction, TransactionType } from "./transaction"

export class Account {
    public readonly bank: Bank
    public readonly id: number
    public readonly agency: number
    public readonly holder:string
    private transactions: Transaction[]
    private balance: number
   
    constructor(bank: Bank ,id: number, agency: number, holder: string) {
        this.holder = holder
        this.id = id
        this.agency = agency
        this.bank = bank
        this.transactions = []
        this.balance = 0.00
    }

    private checkValue(value: number): void {
        if (value < 0) {
            throw new Error("Invalid Value")
        }
    }

    private checkBalance(value: number): void {
        if (value > this.balance) {
            throw new Error("Insufficient funds")
        }
    }


    deposit(value: number): void {
        this.checkValue(value)
       
        const trans = new Transaction(new Date(), value, TransactionType.deposit)
        this.transactions.push(trans)

        this.balance += value
    }

    withdraw(value: number): void {
        this.checkValue(value)
        this.checkBalance(value)
        
        const trans = new Transaction(new Date(), value, TransactionType.withdraw)
        this.transactions.push(trans)

        this.balance -= value
    }

    transfer(value: number, toAccount: Account) {
        this.checkValue(value)
        this.checkBalance(value)

        const debit = new Transaction(new Date(), value, TransactionType.debit)
        this.transactions.push(debit)
        this.balance -= value

        const credit = new Transaction(new Date(), value, TransactionType.credit)
        this.transactions.push(credit)
        toAccount.balance += value
    }

    private showHolder(): void { 
        const balance = formatCurrency(this.balance)
        const new = new Date()
        const date = 
    }
    
    showBalance(): void {
        const balance = formatCurrency(this.balance)

        console.log(formatText(this.bank.name,['40']))
        console.log(formatText(`AG: ${this.agency}\tC/C: ${this.id}`,['<20', '>19']))
        console.log(allignLine([40]))
        console.log(formatText(`15/03/2025\tSALDO ${balance}`,['<15','>24']))
        console.log(allignLine([40]))
    }


    showStatement(): void {
        console.log(formatText(this.bank.name, ['40']))
        console.log(formatText(`AG: ${this.agency}\tC/C: ${this.id}`, ["<20", "<19"]))
        console.log(allignLine([40]))
        console.log(formatText('DATA\tOPERAÇÃO\tVALOR', ['<5', '<21', '>12']))
        for (const trans of this.transactions) {
            const day = trans.dateTime.getDate()
            const month = trans.dateTime.getMonth() + 1
            const value = formatCurrency(trans.value)
            const line = `${day}/${month}\t${trans.type}\t${value}`
            console.log(formatText(line, ['<5', '<21', '>12']))
        }
    }
} 