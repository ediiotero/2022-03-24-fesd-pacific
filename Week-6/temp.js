class Temperature {
    constructor(fahrenheit) {
        if(fahrenheit <= 212 && fahrenheit >= -459){
            this.fahrenheit = fahrenheit;
        }else {
            console.log("number should be between 212 and -459")
        }
    }

    celsius() {
        const fahrenheitInC = ((this.fahrenheit - 32)*5)/9;
        return fahrenheitInC
    }

    kelvin() {
        const celsius = this.celsius();
        return celsius + 273.15
    }

}

const temp = new Temperature(80)
const temp2 = new Temperature(-500)
const temp3 = new Temperature(300)

console.log(temp.celsius().toFixed(2))
console.log(temp.kelvin().toFixed(2))
