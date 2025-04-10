abstract class Shape {
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    protected validate(): void {
        const regs = /^[\w-js]/
        if (!regs.test(this.name)) {
            throw new Error('Invalid Shape Name')
        }
    }
    public abstract area(): number 
    public abstract perimeter(): number
}


abstract class EdgeShape extends Shape {
    public readonly edges: number[]

    constructor(name: string, edges: number[]) {
        super(name)
        this.edges = [...edges]
        this.validate()

        }

        protected validate(): void {
            super.validate()
            
            for (const edge of this.edges) {
                if (edge <= 0) {
                    throw new Error('Shapes side must be positive values')
                }
            }
        }

        public perimeter(): number {
            let sum = 0
            for (const edge of this.edges) {
                sum += edge
            }

            return sum
        }
    }

abstract class NoEdgeShape extends Shape {}


class Triangle extends EdgeShape {
    constructor(name: string, edge1: number, edge2: number, edge3: number) {
        super(name, [edge1, edge2, edge3])
        this.validate()
    }

    protected validate(): void {
        const s1 = this.edges[0]
        const s2 = this.edges[1]
        const s3 = this.edges[2]

        super.validate()

        if (!(s1 + s2 > s3 && s1 + s3 > s2 && s2 + s3 > s1)) {
            throw new Error('Invalid triangle edges')
        }
    }

    area(): number {
        const perimeter = this.perimeter() / 2
        const s1 = this.edges[0]
        const s2 = this.edges[1]
        const s3 = this.edges[2]

        return Math.sqrt(perimeter * (perimeter - s1) * (perimeter - s2) * (perimeter - s3))
    }
}


class Rect extends EdgeShape {
    constructor(name: string, witdh: number, height: number) {
        super(name, [witdh, height])
        this.validate()
    }

    public area(): number {
        return this.edges[0] * this.edges[1]
    }
}