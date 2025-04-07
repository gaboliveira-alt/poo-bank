export function formatText(data: string, colWidths: string[]): string {
    const colums = data.split("/t")
    let formatedText = ''

    for (let index in colums) {
        let data = colums[index]
        const format = colWidths[index]
        let witdh: number


        switch(format[0]) {
            case '>':
                witdh = parseInt(format.substring(1))
                formatedText += data.padStart(witdh)
                break
            case '<':
                witdh = parseInt(format.substring(1))
                formatedText += data.padEnd(witdh)
                break
            default:
                witdh = parseInt(format)
                const letwitdh = Math.floor(witdh - data.length / 2)
                data = data.padStart(data.length - letwitdh)
                formatedText += data.padEnd(letwitdh)
        }


        
        if (parseInt(index) < colums.length - 1) {
            formatedText += ' '
        }

    }
    return formatedText 
}


export function allignLine(coolwitdh: number[]): string {
    let line = ''

    for (const index in coolwitdh) {
        line += '-'.repeat(coolwitdh[index])

        if (parseInt(index) < coolwitdh.length - 1) {
            line += ' '
        }
    }

    return line
}


export function formatCurrency(value: number): string {
    const locale = new Intl.NumberFormat('pt-Br', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    })

    return locale.format(value)
}

