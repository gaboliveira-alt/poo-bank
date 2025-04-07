
import { Bank } from './bank'

console.log("**BEGIN**")

const bank = new Bank(999, "BANCO DO RUAN S/A")

bank.createAccount(1234, 999, "Roberta")
bank.createAccount(3456, 888, "Marcos")
bank.createAccount(5678, 777, "Nelson")


const account1 = bank.getAccount(999, 1234)
const account2 = bank.getAccount(777, 5678)

account1?.deposit(200)
account1?.showStatement()

console.log("**END**")