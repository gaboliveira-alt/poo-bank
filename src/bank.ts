import { Account } from "./account"
import { formatText, allignLine, } from "./utils"

export class Bank {
    public readonly id:number
    public readonly name:string
    public readonly accounts: Account[]


    constructor(bankid: number, bankname: string) {
        this.id = bankid
        this.name = bankname
        this.accounts = []
    }

    createAccount(accountId: number, accountAgency: number, accountHolder: string): void {
        const account = new Account(this, accountId, accountAgency, accountHolder)
        this.accounts.push(account)
    }

    getAccount(accountAgency: number, accountId: number): Account | undefined {
        for (const account of this.accounts) {
            if (account.agency == accountAgency && account.id == accountId) {
                return account
            }
        }

        return undefined
    }


    showAccounts(): void {
        console.log(formatText(this.name, ["40"]))
        console.log(formatText("RELAÇÃO DE CONTAS", ["40"]))
        console.log(allignLine([40]))
        console.log(formatText("AG\tCONTA\tTITULAR", ['<4', '<6', '<28'])) 
        console.log(allignLine([4, 6, 28]))

        for (const account of this.accounts) {
            const text = `${account.agency}\t${account.id}\t${account.holder}`
            console.log(formatText(text, ['>4', '>6', '<28']))
        }
        console.log(allignLine([40]))
    }
}