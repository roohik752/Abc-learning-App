export interface QuestionsAnswers {
    id: number;
    name: string;
    img1?: any;
    ques?: any;
    opt1?: any;
    opt2?: any;
    opt3?: any;
    opt4?: any;
    ans?: any;
}

const Quizzes: Array<QuestionsAnswers> = [
    {
        id: 0,
        name: "Vehicle",
    },
    {
        id: 1,
        name: "Animal",
    },
    {
        id: 2,
        name: "Fruit",
    },
    // {
    //     id: 3,
    //     name: "Colour",
    // },
    // {
    //     id: 4,
    //     name: "Vegetable",
    // },
    // {
    //     id: 5,
    //     name: "Shape",
    // },
];

export const VehicleQuiz = [
    {
        id: 0,
        name: 'Car',
        img1: require('../../assets/ques-ans/Car.png'),
        ques: 'What is the name of this vehicle ', 
        opt1: 'Car',
        opt2: 'Train',
        opt3: 'Bike',
        opt4: 'Bicycle',
        ans: 'Car'
    },
    {
        id: 1,
        name: 'Bus',
        img1: require('../../assets/ques-ans/Bus.png'),
        ques: 'What is the name of this vehicle ', 
        opt1: 'Car',
        opt2: 'Train',
        opt3: 'Bus',
        opt4: 'Bicycle',
        ans: 'Bus'
    },
    {
        id: 2,
        name: 'Boat',
        img1: require('../../assets/ques-ans/Boat.png'),
        ques: 'What is the name of this vehicle ', 
        opt1: 'Boat',
        opt2: 'Train',
        opt3: 'Bike',
        opt4: 'Bicycle',
        ans: 'Boat'
    },
    {
        id: 3,
        name: 'Bicycle',
        img1: require('../../assets/ques-ans/Bicycle.png'),
        ques: 'What is the name of this vehicle ', 
        opt1: 'Car',
        opt2: 'Train',
        opt3: 'Bike',
        opt4: 'Bicycle',
        ans: 'Bicycle'
    },
    {
        id: 4,
        name: 'Aeroplane',
        img1: require('../../assets/ques-ans/Aeroplan.png'),
        ques: 'What is the name of this vehicle ', 
        opt1: 'Aeroplane',
        opt2: 'Train',
        opt3: 'Bike',
        opt4: 'Car',
        ans: 'Aeroplane'
    },
    {
        id: 5,
        name: 'Truck',
        img1: require('../../assets/ques-ans/Truck.png'),
        ques: 'What is the name of this vehicle ', 
        opt1: 'Car',
        opt2: 'Truck',
        opt3: 'Bike',
        opt4: 'Ship',
        ans: 'Truck'
    },
    {
        id: 6,
        name: 'Ship',
        img1: require('../../assets/ques-ans/Ship.png'),
        ques: 'What is the name of this vehicle ', 
        opt1: 'Car',
        opt2: 'Train',
        opt3: 'Ship',
        opt4: 'Bicycle',
        ans: 'Ship'
    },
    {
        id: 7,
        name: 'Train',
        img1: require('../../assets/ques-ans/Train.png'),
        ques: 'What is the name of this vehicle ', 
        opt1: 'Ship',
        opt2: 'Boat',
        opt3: 'Truck',
        opt4: 'Train',
        ans: 'Train'
    },
    {
        id: 8,
        name: 'Helicopter',
        img1: require('../../assets/ques-ans/Helicopter.png'),
        ques: 'What is the name of this vehicle ', 
        opt1: 'Helicopter',
        opt2: 'Train',
        opt3: 'Bus',
        opt4: 'Car',
        ans: 'Helicopter'
    },
    {
        id: 9,
        name: 'Van',
        img1: require('../../assets/ques-ans/Van.png'),
        ques: 'What is the name of this vehicle ', 
        opt1: 'Ship',
        opt2: 'Van',
        opt3: 'Bike',
        opt4: 'Bicycle',
        ans: 'Van'
    },
    {
        id: 10,
        name: 'Bike',
        img1: require('../../assets/ques-ans/Bike.png'),
        ques: 'What is the name of this vehicle ', 
        opt1: 'Car',
        opt2: 'Helicopter',
        opt3: 'Aeroplan',
        opt4: 'Bike',
        ans: 'Bike'
    },
    {
        id: 11,
        name: 'Crane',
        img1: require('../../assets/ques-ans/Crane.png'),
        ques: 'What is the name of this vehicle ', 
        opt1: 'Crane',
        opt2: 'Van',
        opt3: 'Bike',
        opt4: 'Boat',
        ans: 'Crane'
    },
    {
        id: 12,
        name: 'Tractor',
        img1: require('../../assets/ques-ans/Tractor.png'),
        ques: 'What is the name of this vehicle ', 
        opt1: 'Car',
        opt2: 'Tractor',
        opt3: 'Truck',
        opt4: 'Bicycle',
        ans: 'Tractor'
    },
    {
        id: 13,
        name: 'Taxi',
        img1: require('../../assets/ques-ans/Taxi.png'),
        ques: 'What is the name of this vehicle ', 
        opt1: 'Taxi',
        opt2: 'Train',
        opt3: 'Bike',
        opt4: 'Bicycle',
        ans: 'Taxi'
    },
    {
        id: 14,
        name: 'Bulldozer',
        img1: require('../../assets/ques-ans/Bulldozer.png'),
        ques: 'What is the name of this vehicle ', 
        opt1: 'Crane',
        opt2: 'Train',
        opt3: 'Bike',
        opt4: 'Bulldozer',
        ans: 'Bulldozer'
    },
];

export const AnimalQuiz = [
    {
        id: 0,
        name: 'Cat',
        img1: require('../../assets/ques-ans/Cat.png'),
        ques: 'What is the name of this animal ', 
        opt1: 'Cat',
        opt2: 'Dog',
        opt3: 'Goat',
        opt4: 'Horse',
        ans: 'Cat'
    },
    {
        id: 1,
        name: 'Dog',
        img1: require('../../assets/ques-ans/Dog.png'),
        ques: 'What is the name of this animal ', 
        opt1: 'Cat',
        opt2: 'Dog',
        opt3: 'Goat',
        opt4: 'Horse',
        ans: 'Dog'
    },
    {
        id: 2,
        name: 'Goat',
        img1: require('../../assets/ques-ans/Goat.png'),
        ques: 'What is the name of this animal ', 
        opt1: 'Cat',
        opt2: 'Dog',
        opt3: 'Goat',
        opt4: 'Horse',
        ans: 'Goat'
    },
    {
        id: 3,
        name: 'Horse',
        img1: require('../../assets/ques-ans/Horse.png'),
        ques: 'What is the name of this animal ', 
        opt1: 'Cat',
        opt2: 'Dog',
        opt3: 'Goat',
        opt4: 'Horse',
        ans: 'Horse'
    },
    {
        id: 4,
        name: 'Lion',
        img1: require('../../assets/ques-ans/Lion.png'),
        ques: 'What is the name of this animal ', 
        opt1: 'Lion',
        opt2: 'Dog',
        opt3: 'Zebra',
        opt4: 'Horse',
        ans: 'Lion'
    },
    {
        id: 5,
        name: 'Buffalo',
        img1: require('../../assets/ques-ans/Buffalo.png'),
        ques: 'What is the name of this animal ', 
        opt1: 'Owl',
        opt2: 'Dog',
        opt3: 'Goat',
        opt4: 'Buffalo',
        ans: 'Buffalo'
    },
    {
        id: 6,
        name: 'Monkey',
        img1: require('../../assets/ques-ans/Monkey.png'),
        ques: 'What is the name of this animal ', 
        opt1: 'Lion',
        opt2: 'Dog',
        opt3: 'Monkey',
        opt4: 'Horse',
        ans: 'Monkey'
    },
    {
        id: 7,
        name: 'Rat',
        img1: require('../../assets/ques-ans/Rat.png'),
        ques: 'What is the name of this animal ', 
        opt1: 'Rat',
        opt2: 'Dog',
        opt3: 'Goat',
        opt4: 'Horse',
        ans: 'Rat'
    },
    {
        id: 8,
        name: 'Tiger',
        img1: require('../../assets/ques-ans/Tiger.png'),
        ques: 'What is the name of this animal ', 
        opt1: 'Cat',
        opt2: 'Tiger',
        opt3: 'Monkey',
        opt4: 'Jaguar',
        ans: 'Tiger'
    },
    {
        id: 9,
        name: 'Zebra',
        img1: require('../../assets/ques-ans/Zebra.png'),
        ques: 'What is the name of this animal ', 
        opt1: 'Elephant',
        opt2: 'Dog',
        opt3: 'Goat',
        opt4: 'Zebra',
        ans: 'Zebra'
    },
    {
        id: 10,
        name: 'Elephant',
        img1: require('../../assets/ques-ans/Elephant.png'),
        ques: 'What is the name of this animal ', 
        opt1: 'Elephant',
        opt2: 'Dog',
        opt3: 'Goat',
        opt4: 'Horse',
        ans: 'Elephant'
    },
    {
        id: 11,
        name: 'Owl',
        img1: require('../../assets/ques-ans/Owl.png'),
        ques: 'What is the name of this animal ', 
        opt1: 'Owl',
        opt2: 'Tiger',
        opt3: 'Goat',
        opt4: 'Horse',
        ans: 'Owl'
    },
    {
        id: 12,
        name: 'Wolf',
        img1: require('../../assets/ques-ans/Wolf.png'),
        ques: 'What is the name of this animal ', 
        opt1: 'Cat',
        opt2: 'Wolf',
        opt3: 'Lion',
        opt4: 'Horse',
        ans: 'Wolf'
    },
    {
        id: 13,
        name: 'Yak',
        img1: require('../../assets/ques-ans/Yak.png'),
        ques: 'What is the name of this animal ', 
        opt1: 'Cat',
        opt2: 'Dog',
        opt3: 'Yak',
        opt4: 'Horse',
        ans: 'Yak'
    },
    {
        id: 14,
        name: 'Jaguar',
        img1: require('../../assets/ques-ans/Jaguar.png'),
        ques: 'What is the name of this animal ', 
        opt1: 'Horse',
        opt2: 'Elephant',
        opt3: 'Owl',
        opt4: 'Jaguar',
        ans: 'Jaguar'
    },
];

export const FruitQuiz = [
    {
        id: 0,
        name: 'Strawberry',
        img1: require('../../assets/ques-ans/Strawberry.png'),
        ques: 'What is the name of this fruit ', 
        opt1: 'Strawberry',
        opt2: 'Banana',
        opt3: 'Cherry',
        opt4: 'Orange',
        ans: 'Strawberry'
    },
    {
        id: 1,
        name: 'Banana',
        img1: require('../../assets/ques-ans/Banana.png'),
        ques: 'What is the name of this fruit ', 
        opt1: 'Tamarind',
        opt2: 'Banana',
        opt3: 'Pineapple',
        opt4: 'Strawberry',
        ans: 'Banana'
    },
    {
        id: 2,
        name: 'Cherry',
        img1: require('../../assets/ques-ans/Cherry.png'),
        ques: 'What is the name of this fruit ', 
        opt1: 'Figs',
        opt2: 'Grapes',
        opt3: 'Cherry',
        opt4: 'Jamun',
        ans: 'Cherry'
    },
    {
        id: 3,
        name: 'Orange',
        img1: require('../../assets/ques-ans/Orange.png'),
        ques: 'What is the name of this fruit ', 
        opt1: 'Banana',
        opt2: 'Apple',
        opt3: 'Mango',
        opt4: 'Orange',
        ans: 'Orange'
    },
    {
        id: 4,
        name: 'Kiwi',
        img1: require('../../assets/ques-ans/Kiwi.png'),
        ques: 'What is the name of this fruit ', 
        opt1: 'Kiwi',
        opt2: 'Tamarind',
        opt3: 'Dragon fruit',
        opt4: 'Orange',
        ans: 'Kiwi'
    },
    {
        id: 5,
        name: 'Mango',
        img1: require('../../assets/ques-ans/Mango.png'),
        ques: 'What is the name of this fruit ', 
        opt1: 'Figs',
        opt2: 'Strawberry',
        opt3: 'Cherry',
        opt4: 'Mango',
        ans: 'Mango'
    },
    {
        id: 6,
        name: 'Litchi',
        img1: require('../../assets/ques-ans/Litchi.png'),
        ques: 'What is the name of this fruit ', 
        opt1: 'Litchi',
        opt2: 'Dragon fruit',
        opt3: 'Jamun',
        opt4: 'Grapes',
        ans: 'Litchi'
    },
    {
        id: 7,
        name: 'Pineapple',
        img1: require('../../assets/ques-ans/Pineapple.png'),
        ques: 'What is the name of this fruit ', 
        opt1: 'Pineapple',
        opt2: 'Apple',
        opt3: 'Banana',
        opt4: 'Kiwi',
        ans: 'Pineapple'
    },
    {
        id: 8,
        name: 'Grapes',
        img1: require('../../assets/ques-ans/Grapes.png'),
        ques: 'What is the name of this fruit ', 
        opt1: 'Orange',
        opt2: 'Grapes',
        opt3: 'Mango',
        opt4: 'Banana',
        ans: 'Grapes'
    },
    {
        id: 9,
        name: 'Guava',
        img1: require('../../assets/ques-ans/Guava.png'),
        ques: 'What is the name of this fruit ', 
        opt1: 'Cherry',
        opt2: 'Jamun',
        opt3: 'Figs',
        opt4: 'Guava',
        ans: 'Guava'
    },
    {
        id: 10,
        name: 'Apple',
        img1: require('../../assets/ques-ans/Apple.png'),
        ques: 'What is the name of this fruit ', 
        opt1: 'Apple',
        opt2: 'Tamarind',
        opt3: 'Dragon fruit',
        opt4: 'Grapes',
        ans: 'Apple'
    },
    {
        id: 11,
        name: 'Dragon fruit',
        img1: require('../../assets/ques-ans/Dragon-fruit.png'),
        ques: 'What is the name of this fruit ', 
        opt1: 'Dragon fruit',
        opt2: 'Figs',
        opt3: 'Kiwi',
        opt4: 'Litchi',
        ans: 'Dragon fruit'
    },
    {
        id: 12,
        name: 'Figs',
        img1: require('../../assets/ques-ans/Figs.png'),
        ques: 'What is the name of this fruit ', 
        opt1: 'Orange',
        opt2: 'Figs',
        opt3: 'Strawberry',
        opt4: 'Apple',
        ans: 'Figs'
    },
    {
        id: 13,
        name: 'Jamun',
        img1: require('../../assets/ques-ans/Jamun.png'),
        ques: 'What is the name of this fruit ', 
        opt1: 'Banana',
        opt2: 'Mango',
        opt3: 'Jamun',
        opt4: 'Grapes',
        ans: 'Jamun'
    },
    {
        id: 14,
        name: 'Tamarind',
        img1: require('../../assets/ques-ans/Tamarind.png'),
        ques: 'What is the name of this fruit ', 
        opt1: 'Litchi',
        opt2: 'Orange',
        opt3: 'Strawberry',
        opt4: 'Tamarind',
        ans: 'Tamarind'
    },
];

export const ColourQuiz = [
    {
        id: 0,
        name: 'Red',
        img1: require('../../assets/ques-ans/Cat.png'),
        ques: 'What colour is the Apple ', 
        opt1: 'Red',
        opt2: 'Blue',
        opt3: 'Black',
        opt4: 'Orange',
        ans: 'Red'
    },
    {
        id: 1,
        name: 'Yellow',
        img1: require('../../assets/ques-ans/Dog.png'),
        ques: 'What colour is the car ', 
        opt1: 'Cyan',
        opt2: 'Yellow',
        opt3: 'Blue',
        opt4: 'Red',
        ans: 'Yellow'
    },
    {
        id: 2,
        name: 'Green',
        img1: require('../../assets/ques-ans/Goat.png'),
        ques: 'What colour is the frog ', 
        opt1: 'Pink',
        opt2: 'White',
        opt3: 'Green',
        opt4: 'Brown',
        ans: 'Green'
    },
    {
        id: 3,
        name: 'Cyan',
        img1: require('../../assets/ques-ans/Horse.png'),
        ques: 'What colour is the  Umbrella ', 
        opt1: 'Black',
        opt2: 'White',
        opt3: 'Brown',
        opt4: 'Cyan',
        ans: 'Cyan'
    },
    {
        id: 4,
        name: 'White',
        img1: require('../../assets/ques-ans/Lion.png'),
        ques: 'What colour is the table ', 
        opt1: 'White',
        opt2: 'Pink',
        opt3: 'Orange',
        opt4: 'Violet',
        ans: 'White'
    },
    {
        id: 5,
        name: 'Blue',
        img1: require('../../assets/ques-ans/Buffalo.png'),
        ques: 'What colour is the pen ', 
        opt1: 'Blue',
        opt2: 'Red',
        opt3: 'Cyan',
        opt4: 'Violet',
        ans: 'Blue'
    },
    {
        id: 6,
        name: 'Cream',
        img1: require('../../assets/ques-ans/Monkey.png'),
        ques: 'What Colour is the teddy Bear ', 
        opt1: 'Pink',
        opt2: 'Black',
        opt3: 'White',
        opt4: 'Cream',
        ans: 'Cream'
    },
    {
        id: 7,
        name: 'Golden',
        img1: require('../../assets/ques-ans/Rat.png'),
        ques: 'What colour is the cycle ', 
        opt1: 'Golden',
        opt2: 'Black',
        opt3: 'Navy Blue',
        opt4: 'Orange',
        ans: 'Golden'
    },
    {
        id: 8,
        name: 'Pink',
        img1: require('../../assets/ques-ans/Tiger.png'),
        ques: 'What colour is the ice cream ', 
        opt1: 'Olive',
        opt2: 'Pink',
        opt3: 'Brown',
        opt4: 'Blue',
        ans: 'Pink'
    },
    {
        id: 9,
        name: 'Green',
        img1: require('../../assets/ques-ans/Zebra.png'),
        ques: 'What colour is the parrot  ', 
        opt1: 'Cyan',
        opt2: 'Blue',
        opt3: 'Yellow',
        opt4: 'Green',
        ans: 'Green'
    },
    {
        id: 10,
        name: 'Navy Blue',
        img1: require('../../assets/ques-ans/Elephant.png'),
        ques: 'What colour is the pencil ', 
        opt1: 'Navy Blue',
        opt2: 'Pink',
        opt3: 'White',
        opt4: 'Grey',
        ans: 'Navy Blue'
    },
    {
        id: 11,
        name: 'Brown',
        img1: require('../../assets/ques-ans/Owl.png'),
        ques: 'What colour is the chocolate ', 
        opt1: 'Brown',
        opt2: 'Yellow',
        opt3: 'Grey',
        opt4: 'Cyan',
        ans: 'Brown'
    },
    {
        id: 12,
        name: 'Black',
        img1: require('../../assets/ques-ans/Wolf.png'),
        ques: 'What colour is the board  ', 
        opt1: 'Grey',
        opt2: 'Black',
        opt3: 'White',
        opt4: 'Yellow',
        ans: 'Black'
    },
    {
        id: 13,
        name: 'Purple',
        img1: require('../../assets/ques-ans/Yak.png'),
        ques: 'What colour is the Doll ', 
        opt1: 'Green',
        opt2: 'Cyan',
        opt3: 'Purple',
        opt4: 'Pink',
        ans: 'Purple'
    },
    {
        id: 14,
        name: 'Grey',
        img1: require('../../assets/ques-ans/Jaguar.png'),
        ques: 'What colour is the house ', 
        opt1: 'Orange',
        opt2: 'Navy Blue',
        opt3: 'Brown',
        opt4: 'Grey',
        ans: 'Grey'
    },
];

export const VegetableQuiz = [
    {
        id: 0,
        name: 'Carrot',
        img1: require('../../assets/ques-ans/Cat.png'),
        ques: 'What is the name of this vegetable ', 
        opt1: 'Carrot',
        opt2: 'Potato',
        opt3: 'Tomato',
        opt4: 'Onion',
        ans: 'Carrot'
    },
    {
        id: 1,
        name: 'Potato',
        img1: require('../../assets/ques-ans/Dog.png'),
        ques: 'What is the name of this vegetable ', 
        opt1: 'Capsicum',
        opt2: 'Potato',
        opt3: 'Beans',
        opt4: 'Cucumber',
        ans: 'Potato'
    },
    {
        id: 2,
        name: 'Tomato',
        img1: require('../../assets/ques-ans/Goat.png'),
        ques: 'What is the name of this vegetable ', 
        opt1: 'Mushroom',
        opt2: 'Chilli',
        opt3: 'Tomato',
        opt4: 'Carrot',
        ans: 'Tomato'
    },
    {
        id: 3,
        name: 'Onion',
        img1: require('../../assets/ques-ans/Horse.png'),
        ques: 'What is the name of this vegetable ', 
        opt1: 'Cucumber',
        opt2: 'Beans',
        opt3: 'Corn',
        opt4: 'Onion',
        ans: 'Onion'
    },
    {
        id: 4,
        name: 'Corn',
        img1: require('../../assets/ques-ans/Lion.png'),
        ques: 'What is the name of this vegetable ', 
        opt1: 'Corn',
        opt2: 'Peas',
        opt3: 'Radish',
        opt4: 'Brinjal',
        ans: 'Corn'
    },
    {
        id: 5,
        name: 'Peas',
        img1: require('../../assets/ques-ans/Buffalo.png'),
        ques: 'What is the name of this vegetable ', 
        opt1: 'Onion',
        opt2: 'Potato',
        opt3: 'Tomato',
        opt4: 'Peas',
        ans: 'Peas'
    },
    {
        id: 6,
        name: 'Radish',
        img1: require('../../assets/ques-ans/Monkey.png'),
        ques: 'What is the name of this vegetable ', 
        opt1: 'Radish',
        opt2: 'Capsicum',
        opt3: 'Beans',
        opt4: 'Onion',
        ans: 'Radish'
    },
    {
        id: 7,
        name: 'Brinjal',
        img1: require('../../assets/ques-ans/Rat.png'),
        ques: 'What is the name of this vegetable ', 
        opt1: 'Brinjal',
        opt2: 'Chilli',
        opt3: 'Mushroom',
        opt4: 'Beans',
        ans: 'Brinjal'
    },
    {
        id: 8,
        name: 'Pumpkin',
        img1: require('../../assets/ques-ans/Tiger.png'),
        ques: 'What is the name of this vegetable ', 
        opt1: 'Potato',
        opt2: 'Pumpkin',
        opt3: 'Garlic',
        opt4: 'Tomato',
        ans: 'Pumpkin'
    },
    {
        id: 9,
        name: 'Garlic',
        img1: require('../../assets/ques-ans/Zebra.png'),
        ques: 'What is the name of this vegetable ', 
        opt1: 'Cucumber',
        opt2: 'Peas',
        opt3: 'Beans',
        opt4: 'Garlic',
        ans: 'Garlic'
    },
    {
        id: 10,
        name: 'Chilli',
        img1: require('../../assets/ques-ans/Elephant.png'),
        ques: 'What is the name of this vegetable ', 
        opt1: 'Chilli',
        opt2: 'Onion',
        opt3: 'Carrot',
        opt4: 'Mushroom',
        ans: 'Chilli'
    },
    {
        id: 11,
        name: 'Mushroom',
        img1: require('../../assets/ques-ans/Owl.png'),
        ques: 'What is the name of this vegetable ', 
        opt1: 'Mushroom',
        opt2: 'Carrot',
        opt3: 'Radish',
        opt4: 'Corn',
        ans: 'Mushroom'
    },
    {
        id: 12,
        name: 'Cucumber',
        img1: require('../../assets/ques-ans/Wolf.png'),
        ques: 'What is the name of this vegetable ', 
        opt1: 'Peas',
        opt2: 'Cucumber',
        opt3: 'Tomato',
        opt4: 'Radish',
        ans: 'Cucumber'
    },
    {
        id: 13,
        name: 'Beans',
        img1: require('../../assets/ques-ans/Yak.png'),
        ques: 'What is the name of this vegetable ', 
        opt1: 'Corn',
        opt2: 'Garlic',
        opt3: 'Beans',
        opt4: 'Brinjal',
        ans: 'Beans'
    },
    {
        id: 14,
        name: 'Capsicum',
        img1: require('../../assets/ques-ans/Jaguar.png'),
        ques: 'What is the name of this vegetable ', 
        opt1: 'Onion',
        opt2: 'Pumpkin',
        opt3: 'Corn',
        opt4: 'Capsicum',
        ans: 'Capsicum'
    },
];

export const ShapeQuiz = [
    {
        id: 0,
        name: 'Square',
        img1: require('../../assets/ques-ans/Square.png'),
        ques: 'What shape it is ', 
        opt1: 'Red',
        opt2: 'Blue',
        opt3: 'Black',
        opt4: 'Orange',
        ans: 'Square'
    },
    {
        id: 1,
        name: 'Rectangle',
        img1: require('../../assets/ques-ans/Rectangle.png'),
        ques: 'What shape it is ', 
        opt1: 'Cyan',
        opt2: 'Yellow',
        opt3: 'Blue',
        opt4: 'Red',
        ans: 'Rectangle'
    },
    {
        id: 2,
        name: 'Circle',
        img1: require('../../assets/ques-ans/Circle.png'),
        ques: 'What shape it is ', 
        opt1: 'Pink',
        opt2: 'White',
        opt3: 'Green',
        opt4: 'Brown',
        ans: 'Circle'
    },
    {
        id: 3,
        name: 'Star',
        img1: require('../../assets/ques-ans/Star.png'),
        ques: 'What shape it is ', 
        opt1: 'Black',
        opt2: 'White',
        opt3: 'Brown',
        opt4: 'Cyan',
        ans: 'Star'
    },
    {
        id: 4,
        name: 'Oval',
        img1: require('../../assets/ques-ans/Oval.png'),
        ques: 'What shape it is ', 
        opt1: 'White',
        opt2: 'Pink',
        opt3: 'Orange',
        opt4: 'Violet',
        ans: 'Oval'
    },
    {
        id: 5,
        name: 'Triangle',
        img1: require('../../assets/ques-ans/Triangle.png'),
        ques: 'What shape it is ', 
        opt1: 'Blue',
        opt2: 'Red',
        opt3: 'Cyan',
        opt4: 'Violet',
        ans: 'Triangle'
    },
    {
        id: 6,
        name: 'Cross',
        img1: require('../../assets/ques-ans/Cross1.png'),
        ques: 'What shape it is ', 
        opt1: 'Pink',
        opt2: 'Black',
        opt3: 'White',
        opt4: 'Cream',
        ans: 'Cross'
    },
    {
        id: 7,
        name: 'Diamond',
        img1: require('../../assets/ques-ans/Diamond.png'),
        ques: 'What shape it is ', 
        opt1: 'Golden',
        opt2: 'Black',
        opt3: 'Navy Blue',
        opt4: 'Orange',
        ans: 'Diamond'
    },
    {
        id: 8,
        name: 'Arrow',
        img1: require('../../assets/ques-ans/Arrow.png'),
        ques: 'What shape it is ', 
        opt1: 'Olive',
        opt2: 'Pink',
        opt3: 'Brown',
        opt4: 'Blue',
        ans: 'Arrow'
    },
    {
        id: 9,
        name: 'Ring',
        img1: require('../../assets/ques-ans/Ring.png'),
        ques: 'What shape it is ', 
        opt1: 'Cyan',
        opt2: 'Blue',
        opt3: 'Yellow',
        opt4: 'Green',
        ans: 'Ring'
    },
    {
        id: 10,
        name: 'Heart',
        img1: require('../../assets/ques-ans/Heart.png'),
        ques: 'What shape it is ', 
        opt1: 'Navy Blue',
        opt2: 'Pink',
        opt3: 'White',
        opt4: 'Grey',
        ans: 'Heart'
    },
    {
        id: 11,
        name: 'Cone',
        img1: require('../../assets/ques-ans/Cone.png'),
        ques: 'What shape it is ', 
        opt1: 'Brown',
        opt2: 'Yellow',
        opt3: 'Grey',
        opt4: 'Cyan',
        ans: 'Cone'
    },
    {
        id: 12,
        name: 'Cylinder',
        img1: require('../../assets/ques-ans/Cylinder.png'),
        ques: 'What shape it is ', 
        opt1: 'Grey',
        opt2: 'Black',
        opt3: 'White',
        opt4: 'Yellow',
        ans: 'Cylinder'
    },
    {
        id: 13,
        name: 'Cuboid',
        img1: require('../../assets/ques-ans/Cuboid.png'),
        ques: 'What shape it is ', 
        opt1: 'Green',
        opt2: 'Cyan',
        opt3: 'Purple',
        opt4: 'Pink',
        ans: 'Cuboid'
    },
    {
        id: 14,
        name: 'Pentagon',
        img1: require('../../assets/ques-ans/Pentagon.png'),
        ques: 'What shape it is ', 
        opt1: 'Orange',
        opt2: 'Navy Blue',
        opt3: 'Brown',
        opt4: 'Grey',
        ans: 'Pentagon'
    },
];

export default Quizzes;