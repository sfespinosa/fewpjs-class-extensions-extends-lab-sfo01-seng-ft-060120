// Your code here
class Polygon {
    constructor(array){
        this.sides = array
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((a,b) => a+b)
    }
}

class Triangle extends Polygon {
    get isValid(){
        if (this.sides[0] + this.sides[1] < this.sides[2]) {
            return false
        } else if (this.sides[0] + this.sides[2] < this.sides[1]) {
            return false
        } else if (this.sides[1] + this.sides[2] < this.sides[0]) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get isValid(){
        let side = this.sides[0]
        if (side === this.sides[1] && side === this.sides[2] && side === this.sides[3]) {
            return true
        } else {
            return false
        }
    }

    get area(){
        return this.sides[0]*this.sides[0]
    }
}