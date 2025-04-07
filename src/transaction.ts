export enum TransactionType {
    deposit,
    withdraw,
    credit,
    debit, 
}

export class Transaction {
    public readonly dateTime: Date
    public readonly value: number
    public readonly type: TransactionType

    constructor(dateTime: Date, value: number, type: TransactionType) {
        this.dateTime = dateTime
        this.value = value
        this.type = type
    }

    description(): string {
        let desc: string

        switch(this.type) {
            case TransactionType.deposit:
                desc = 'DEPOSITO'
            case TransactionType.withdraw:
                desc = 'SAQUE'
            case TransactionType.debit:
                desc = 'DEBITO'
            case TransactionType.credit:
                desc = 'CREDITO'
        }

        return desc
    }
}

