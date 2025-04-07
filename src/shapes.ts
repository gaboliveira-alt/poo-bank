class Shape {
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    
    area(): number {
        throw Error('Not implemented');
    }


    perimeter(): number {
        throw Error('Not implemented');
    }
}

class SideShape extends Shape {
    public readonly sides: number[]

    constructor(name: string, sides: number[]) {
        super(name)
        this.sides = []
        this.sides.concat(sides)
    }
}



class Triangle extends SideShape {
    constructor(name: string, sides: number[]) {
        super(name, sides)

        if (sides.length != 3) {
            throw Error('Triangle must have 3 sides')
        }

        if (!this.validate(sides)) {
            throw Error('Not a Triangle')
        }
    }


    protected validate(sides: number[]): boolean {
        const side1 = sides[0]
        const side2 = sides[1]
        const side3 = sides[2]

        return (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1)
    }
}


class Ret extends SideShape {
    constructor(name: string, sides: number[]) {
        super(name, sides)

        if (sides.length != 2) {
            throw Error('Invalid rectangle sides')
        }
    }
} 