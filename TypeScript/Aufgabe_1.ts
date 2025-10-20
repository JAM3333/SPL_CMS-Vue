interface Car {
    brand: string,
    model: string,
    price: number,
    year: number,
}

const cars: Car[] = [
  {
    brand: "Toyota",
    model: "Corolla",
    price: 20000,
    year: 2022
  },
  {
    brand: "Tesla",
    model: "Model 3",
    price: 45000,
    year: 2023
  },
  {
    brand: "BMW",
    model: "X5",
    price: 65000,
    year: 2021
  },
  {
    brand: "Honda",
    model: "Civic",
    price: 23000,
    year: 2020
  },
  {
    brand: "Ford",
    model: "Mustang",
    price: 55000,
    year: 2022
  }
];


function getTotalPrice(cars: Car[]): number {
    let price:number = 0;
    cars.forEach(car => {
        price += car.price;
    });  
    return price;
}

function printCars(cars: Car[]): void {
    cars.forEach(car => {
        console.log(`Marke: ${car.brand}; Model: ${car.model}; Price: ${car.price}; Year: ${car.year}`)
    }); 
}

function getExpensiveCars(cars: Car[], minPrice: number): Car[] {
    let expensiveCars:Car[] = [];
    cars.forEach(car => {
        if(car.price > minPrice){
            expensiveCars.push(car);
        }
    });  
    return expensiveCars;
}

function getTotalPriceReduce(cars: Car[]): number {
    return cars.reduce((total, car) => total + car.price, 0);
}
function getExpensiveCarsFilter(cars: Car[], minPrice: number): Car[] {
    return cars.filter(car => car.price > minPrice);
}

console.log(getTotalPrice(cars));
console.log(getTotalPriceReduce(cars));

printCars(cars);
printCars(getExpensiveCars(cars,40000));
printCars(getExpensiveCarsFilter(cars,40000));

