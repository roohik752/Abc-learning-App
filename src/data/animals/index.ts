import {AnimationObject} from 'src/data/alphabets';

export interface Animal {
    id: number;
    name: string;
    img1?: any;
    img2?: any;
    line1?: any;
    line2?: any;
    line3?: any;
    line4?: any;
    line5?: any;
    line6?: any;
    line7?: any;
    line8?: any;
    line9?: any;
    line10?: any;
    sound1?: any;
    sound2?: any;
    sound3?: any;
    sound4?: any;
    sound5?: any;
    sound6?: any;
    sound7?: any;
    sound8?: any;
    sound9?: any;
    sound10?: any;
}

const Animals: Array<Animal> = [
    {
        id: 0,
        name: 'Ant',
        img1: require('../../assets/animal2/ant.png'),
        img2: require('../../assets/animal2/ant1.png')
    },
    {
        id: 1,
        name: 'Buffalo',
        img1: require('../../assets/animal2/buffalo.png'),
        img2: require('../../assets/animal2/buffalo1.png')
    },
    {
        id: 2,
        name: 'Cat',
        img1: require('../../assets/animal2/cat.png'),
        img2: require('../../assets/animal2/cat1.png')
    },
    {
        id: 3,
        name: 'Dog',
        img1: require('../../assets/animal2/dog.png'),
        img2: require('../../assets/animal2/dog1.png')
    },
    {
        id: 4,
        name: 'Elephant',
        img1: require('../../assets/animal2/elephant.png'),
        img2: require('../../assets/animal2/elephant1.png')
    },
    {
        id: 5,
        name: 'Fish',
        img1: require('../../assets/animal2/fish.png'),
        img2: require('../../assets/animal2/fish1.png')
    },
    {
        id: 6,
        name: 'Goat',
        img1: require('../../assets/animal2/goat.png'),
        img2: require('../../assets/animal2/goat1.png')
    },
    {
        id: 7,
        name: 'Horse',
        img1: require('../../assets/animal2/horse.png'),
        img2: require('../../assets/animal2/horse1.png')
    },
    {
        id: 8,
        name: 'Jaguar',
        img1: require('../../assets/animal2/jaguar.png'),
        img2: require('../../assets/animal2/jaguar1.png')
    },
    {
        id: 9,
        name: 'Kangaroo',
        img1: require('../../assets/animal2/kangaroo.png'),
        img2: require('../../assets/animal2/kangaroo1.png')
    },
    {
        id: 10,
        name: 'Lion',
        img1: require('../../assets/animal2/lion.png'),
        img2: require('../../assets/animal2/lion1.png')
    },
    {
        id: 11,
        name: 'Monkey',
        img1: require('../../assets/animal2/monkey.png'),
        img2: require('../../assets/animal2/monkey1.png')
    },
    {
        id: 12,
        name: 'Owl',
        img1: require('../../assets/animal2/owl.png'),
        img2: require('../../assets/animal2/owl1.png')
    },
    {
        id: 13,
        name: 'Peacock',
        img1: require('../../assets/animal2/peacock.png'),
        img2: require('../../assets/animal2/peacock1.png')
    },
    {
        id: 14,
        name: 'Rat',
        img1: require('../../assets/animal2/rat.png'),
        img2: require('../../assets/animal2/rat1.png'),
    },
    {
        id: 15,
        name: 'Squirrel',
        img1: require('../../assets/animal2/squirrel.png'),
        img2: require('../../assets/animal2/squirrel1.png'),
    },
    {
        id: 16,
        name: 'Tiger',
        img1: require('../../assets/animal2/tiger.png'),
        img2: require('../../assets/animal2/tiger1.png')
    },
    {
        id: 17,
        name: 'Unicorn',
        img1: require('../../assets/animal2/unicorn.png'),
        img2: require('../../assets/animal2/unicorn1.png')
    },
    {
        id: 18,
        name: 'Vulture',
        img1: require('../../assets/animal2/vulture.png'),
        img2: require('../../assets/animal2/vulture1.png')
    },
    {
        id: 19,
        name: 'Wolf',
        img1: require('../../assets/animal2/wolf.png'),
        img2: require('../../assets/animal2/wolf1.png')
    },
    {
        id: 20,
        name: 'Yak',
        img1: require('../../assets/animal2/yak.png'),
        img2: require('../../assets/animal2/yak1.png')
    },
    {
        id: 21,
        name: 'Zebra',
        img1: require('../../assets/animal2/zebra.png'),
        img2: require('../../assets/animal2/zebra1.png')
    },
];

export const Colours = [
    {
        id: 0,
        name: 'Blue',
        img1: require('../../assets/colours/blue.png'),
        img2: require('../../assets/colours/blue1.png')
    },
    {
        id: 1,
        name: 'Red',
        img1: require('../../assets/colours/red.png'),
        img2: require('../../assets/colours/red1.png')
    },
    {
        id: 2,
        name: 'Green',
        img1: require('../../assets/colours/green.png'),
        img2: require('../../assets/colours/green1.png'),
    },
    {
        id: 3,
        name: 'Black',
        img1: require('../../assets/colours/black.png'),
        img2: require('../../assets/colours/black2.png')
    },
    {
        id: 4,
        name: 'Yellow',
        img1: require('../../assets/colours/yellow.png'),
        img2: require('../../assets/colours/yellow1.png')
    },
    {
        id: 5,
        name: 'Orange',
        img1: require('../../assets/colours/orange.png'),
        img2: require('../../assets/colours/orange1.png')
    },
    {
        id: 6,
        name: 'Pink',
        img1: require('../../assets/colours/pink.png'),
        img2: require('../../assets/colours/pink1.png')
    },
    {
        id: 7,
        name: 'Purple',
        img1: require('../../assets/colours/purple.png'),
        img2: require('../../assets/colours/purple1.png')
    },
    {
        id: 8,
        name: 'Brown',
        img1: require('../../assets/colours/brown.png'),
        img2: require('../../assets/colours/brown1.png')
    },
    {
        id: 9,
        name: 'White',
        img1: require('../../assets/colours/white.png'),
        img2: require('../../assets/colours/white1.png')
    },
    {
        id: 10,
        name: 'Grey',
        img1: require('../../assets/colours/grey.png'),
        img2: require('../../assets/colours/grey1.png')
    },
    {
        id: 11,
        name: 'Golden',
        img1: require('../../assets/colours/golden.png'),
        img2: require('../../assets/colours/golden1.png')
    },
    {
        id: 12,
        name: 'Violet',
        img1: require('../../assets/colours/violet.png'),
        img2: require('../../assets/colours/violet1.png')
    },
    {
        id: 13,
        name: 'Olive',
        img1: require('../../assets/colours/olive.png'),
        img2: require('../../assets/colours/olive1.png')
    },
    {
        id: 14,
        name: 'Lime',
        img1: require('../../assets/colours/lime.png'),
        img2: require('../../assets/colours/lime1.png')
    },
    {
        id: 15,
        name: 'Salmon',
        img1: require('../../assets/colours/salmon.png'),
        img2: require('../../assets/colours/salmon1.png')
    },
    {
        id: 16,
        name: 'Indigo',
        img1: require('../../assets/colours/indigo.png'),
        img2: require('../../assets/colours/indigo1.png')
    },
    {
        id: 17,
        name: 'Cream',
        img1: require('../../assets/colours/cream.png'),
        img2: require('../../assets/colours/cream1.png')
    },
    {
        id: 18,
        name: 'Navy Blue',
        img1: require('../../assets/colours/navy-blue.png'),
        img2: require('../../assets/colours/navy-blue1.png')
    },
    {
        id: 19,
        name: 'Cyan',
        img1: require('../../assets/colours/cyan.png'),
        img2: require('../../assets/colours/cyan1.png')
    }, 
]

export const Fruits = [
    {
        id: 0,
        name: 'Apple',
        img1: require('../../assets/fruits/apple.png'),
        img2: require('../../assets/fruits/apple1.png')
    },
    {
        id: 1,
        name: 'Banana',
        img1: require('../../assets/fruits/banana.png'),
        img2: require('../../assets/fruits/banana1.png')
    },
    {
        id: 2,
        name: 'Cherry',
        img1: require('../../assets/fruits/cherry.png'),
        img2: require('../../assets/fruits/cherry1.png')
    },
    {
        id: 3,
        name: 'Dragon fruit',
        img1: require('../../assets/fruits/dragon-fruit.png'),
        img2: require('../../assets/fruits/dragon-fruit1.png')
    },
    {
        id: 4,
        name: 'Figs',
        img1: require('../../assets/fruits/figs.png'),
        img2: require('../../assets/fruits/figs1.png')
    },
    {
        id: 5,
        name: 'Grapes',
        img1: require('../../assets/fruits/grapes.png'),
        img2: require('../../assets/fruits/grapes1.png')
    },
    {
        id: 6,
        name: 'Honey dew',
        img1: require('../../assets/fruits/honey-dew.png'),
        img2: require('../../assets/fruits/honey-dew1.png')
    },
    {
        id: 7,
        name: 'Jamun',
        img1: require('../../assets/fruits/jamun.png'),
        img2: require('../../assets/fruits/jamun1.png')
    },
    {
        id: 8,
        name: 'Kiwi',
        img1: require('../../assets/fruits/kiwi.png'),
        img2: require('../../assets/fruits/kiwi1.png')
    },
    {
        id: 9,
        name: 'Litchi',
        img1: require('../../assets/fruits/litchi.png'),
        img2: require('../../assets/fruits/litchi1.png')
    },
    {
        id: 10,
        name: 'Mango',
        img1: require('../../assets/fruits/mango.png'),
        img2: require('../../assets/fruits/mango1.png')
    },
    {
        id: 11,
        name: 'Nere fruit',
        img1: require('../../assets/fruits/nere-fruit.png'),
        img2: require('../../assets/fruits/nere-fruit1.png')
    },
    {
        id: 12,
        name: 'Orange',
        img1: require('../../assets/fruits/orange.png'),
        img2: require('../../assets/fruits/orange1.png')
    },
    {
        id: 13,
        name: 'Pineapple',
        img1: require('../../assets/fruits/pine-apple.png'),
        img2: require('../../assets/fruits/pine-apple1.png')
    },
    {
        id: 14,
        name: 'Raspberry',
        img1: require('../../assets/fruits/raspberry.png'),
        img2: require('../../assets/fruits/raspberry1.png')
    },
    {
        id: 15,
        name: 'Strawberry',
        img1: require('../../assets/fruits/strawberry.png'),
        img2: require('../../assets/fruits/strawberry1.png')
    },
    {
        id: 16,
        name: 'Tamarind',
        img1: require('../../assets/fruits/tamarind.png'),
        img2: require('../../assets/fruits/tamarind1.png')
    },
    {
        id: 17,
        name: 'Ugni Berry',
        img1: require('../../assets/fruits/ugni-berry.png'),
        img2: require('../../assets/fruits/ugni-berry1.png')
    },
    {
        id: 18,
        name: 'Water melon',
        img1: require('../../assets/fruits/water-melon.png'),
        img2: require('../../assets/fruits/water-melon1.png')
    },
    {
        id: 19,
        name: 'Guava',
        img1: require('../../assets/fruits/guava.png'),
        img2: require('../../assets/fruits/guava1.png')
    }, 
]

export const Shapes = [
    {
        id: 0,
        name: 'Square',
        img1: require('../../assets/shapes/square.png'),
        img2: require('../../assets/shapes/square1.png')
    },
    {
        id: 1,
        name: 'Rectangle',
        img1: require('../../assets/shapes/rectangle.png'),
        img2: require('../../assets/shapes/rectangle1.png')
    },
    {
        id: 2,
        name: 'Circle',
        img1: require('../../assets/shapes/circle.png'),
        img2: require('../../assets/shapes/circle1.png')
    },
    {
        id: 3,
        name: 'Star',
        img1: require('../../assets/shapes/star.png'),
        img2: require('../../assets/shapes/star1.png')
    },
    {
        id: 4,
        name: 'Sphere',
        img1: require('../../assets/shapes/sphere.png'),
        img2: require('../../assets/shapes/sphere1.png')
    },
    {
        id: 5,
        name: 'Cone',
        img1: require('../../assets/shapes/cone.png'),
        img2: require('../../assets/shapes/cone1.png')
    },
    {
        id: 6,
        name: 'Pentagon',
        img1: require('../../assets/shapes/pentagon.png'),
        img2: require('../../assets/shapes/pentagon1.png')
    },
    {
        id: 7,
        name: 'Pyramid',
        img1: require('../../assets/shapes/pyramid.png'),
        img2: require('../../assets/shapes/pyramid1.png')
    },
    {
        id: 8,
        name: 'Cuboid',
        img1: require('../../assets/shapes/cuboid.png'),
        img2: require('../../assets/shapes/cuboid2.png')
    },
    {
        id: 9,
        name: 'Cylinder',
        img1: require('../../assets/shapes/cylinder.png'),
        img2: require('../../assets/shapes/cylinder1.png')
    },
    {
        id: 10,
        name: 'Triangle',
        img1: require('../../assets/shapes/triangle.png'),
        img2: require('../../assets/shapes/triangle1.png')
    },
    {
        id: 11,
        name: 'Heart',
        img1: require('../../assets/shapes/heart.png'),
        img2: require('../../assets/shapes/heart1.png')
    },
    {
        id: 12,
        name: 'Ring',
        img1: require('../../assets/shapes/ring.png'),
        img2: require('../../assets/shapes/ring1.png')
    },
    {
        id: 13,
        name: 'Hexagon',
        img1: require('../../assets/shapes/hexagon.png'),
        img2: require('../../assets/shapes/hexagon1.png')
    },
    {
        id: 14,
        name: 'Oval',
        img1: require('../../assets/shapes/oval.png'),
        img2: require('../../assets/shapes/oval1.png')
    },
    {
        id: 15,
        name: 'Arrow',
        img1: require('../../assets/shapes/arrow.png'),
        img2: require('../../assets/shapes/arrow1.png')
    },
    {
        id: 16,
        name: 'Rhombus',
        img1: require('../../assets/shapes/rhombus.png'),
        img2: require('../../assets/shapes/rhombus1.png')
    },
    {
        id: 17,
        name: 'Crescent',
        img1: require('../../assets/shapes/crescent.png'),
        img2: require('../../assets/shapes/crescent1.png')
    },
    {
        id: 18,
        name: 'Cross',
        img1: require('../../assets/shapes/cross.png'),
        img2: require('../../assets/shapes/cross1.png')
    },
    {
        id: 19,
        name: 'Diamond',
        img1: require('../../assets/shapes/diamond.png'),
        img2: require('../../assets/shapes/diamond1.png')
    }, 
]

export const Tables = [
    {
        id: 0,
        name: '1x',
        img1: require('../../assets/table/table1.png'),
        line1: '1  X  1  =  1',
        line2: '1  X  2  =  2',
        line3: '1  X  3  =  3',
        line4: '1  X  4  =  4',
        line5: '1  X  5  =  5',
        line6: '1  X  6  =  6',
        line7: '1  X  7  =  7',
        line8: '1  X  8  =  8',
        line9: '1  X  9  =  9',
        line10: '1  X 10 = 10',
        sound1: 'One ones are one',
        sound2: 'One twos are two',
        sound3: 'One threes are three',
        sound4: 'One fours are four',
        sound5: 'One fives are five',
        sound6: 'One sixes are six',
        sound7: 'One sevens are seven',
        sound8: 'One eights are eight',
        sound9: 'One nines are nine',
        sound10: 'One tens are ten',
    },
    {
        id: 1,
        name: '2x',
        img1: require('../../assets/table/table2.png'),
        line1: '2  X  1  =  2',
        line2: '2  X  2  =  4',
        line3: '2  X  3  =  6',
        line4: '2  X  4  =  8',
        line5: '2  X  5  = 10',
        line6: '2  X  6  = 12',
        line7: '2  X  7  = 14',
        line8: '2  X  8  = 16',
        line9: '2  X  9  = 18',
        line10: '2  X 10 = 20',
        sound1: 'Two ones are two',
        sound2: 'Two twos are four',
        sound3: 'Two threes are six',
        sound4: 'Two fours are eight',
        sound5: 'Two fives are ten',
        sound6: 'Two sixes are twelve',
        sound7: 'Two sevens are fourteen',
        sound8: 'Two eights are sixteen',
        sound9: 'Two nines are eighteen',
        sound10: 'Two tens are twenty',
    },
    {
        id: 2,
        name: '3x',
        img1: require('../../assets/table/table3.png'),
        line1: '3  X  1  =  3',
        line2: '3  X  2  =  6',
        line3: '3  X  3  =  9',
        line4: '3  X  4  = 12',
        line5: '3  X  5  = 15',
        line6: '3  X  6  = 18',
        line7: '3  X  7  = 21',
        line8: '3  X  8  = 24',
        line9: '3  X  9  = 27',
        line10: '3  X 10 = 30',
        sound1: 'Three ones are three',
        sound2: 'Three twos are six',
        sound3: 'Three threes are nine',
        sound4: 'Three fours are twelve',
        sound5: 'Three fives are fifteen',
        sound6: 'Three sixes are eighteen',
        sound7: 'Three sevens are twenty-one',
        sound8: 'Three eights are twenty-four',
        sound9: 'Three nines are twenty-seven',
        sound10: 'Three tens are thirty',
    },
    {
        id: 3,
        name: '4x',
        img1: require('../../assets/table/table4.png'),
        line1: '4  X  1  =  4',
        line2: '4  X  2  =  8',
        line3: '4  X  3  = 12',
        line4: '4  X  4  = 16',
        line5: '4  X  5  = 20',
        line6: '4  X  6  = 24',
        line7: '4  X  7  = 28',
        line8: '4  X  8  = 32',
        line9: '4  X  9  = 36',
        line10: '4  X 10 = 40',
        sound1: 'Four ones are four',
        sound2: 'Four twos are eight',
        sound3: 'Four threes are twelve',
        sound4: 'Four fours are sixteen',
        sound5: 'Four fives are twenty',
        sound6: 'Four sixes are twenty-four',
        sound7: 'Four sevens are twenty-eight',
        sound8: 'Four eights are thirty-two',
        sound9: 'Four nines are thirty-six',
        sound10: 'Four tens are forty',
    },
    {
        id: 4,
        name: '5x',
        img1: require('../../assets/table/table5.png'),
        line1: '5  X  1  =  5',
        line2: '5  X  2  = 10',
        line3: '5  X  3  = 15',
        line4: '5  X  4  = 20',
        line5: '5  X  5  = 25',
        line6: '5  X  6  = 30',
        line7: '5  X  7  = 35',
        line8: '5  X  8  = 40',
        line9: '5  X  9  = 45',
        line10: '5  X 10 = 50',
        sound1: 'Five ones are five',
        sound2: 'Five twos are ten',
        sound3: 'Five threes are fifteen',
        sound4: 'Five fours are twenty',
        sound5: 'Five fives are twenty-five',
        sound6: 'Five sixes are thirty',
        sound7: 'Five sevens are thirty-five',
        sound8: 'Five eights are forty',
        sound9: 'Five nines are forty-five',
        sound10: 'Five tens are fifty',
    },
    {
        id: 5,
        name: '6x',
        img1: require('../../assets/table/table6.png'),
        line1: '6  X  1  =  6',
        line2: '6  X  2  = 12',
        line3: '6  X  3  = 18',
        line4: '6  X  4  = 24',
        line5: '6  X  5  = 30',
        line6: '6  X  6  = 36',
        line7: '6  X  7  = 42',
        line8: '6  X  8  = 48',
        line9: '6  X  9  = 54',
        line10: '6  X 10 = 60',
        sound1: 'Six ones are six',
        sound2: 'Six twos are twelve',
        sound3: 'Six threes are eighteen',
        sound4: 'Six fours are twenty-four',
        sound5: 'Six fives are thirty',
        sound6: 'Six sixes are thirty-six',
        sound7: 'Six sevens are forty-two',
        sound8: 'Six eights are forty-eight',
        sound9: 'Six nines are fifty-four',
        sound10: 'Six tens are sixty',
    },
    {
        id: 6,
        name: '7x',
        img1: require('../../assets/table/table7.png'),
        line1: '7  X  1  =  7',
        line2: '7  X  2  = 14',
        line3: '7  X  3  = 21',
        line4: '7  X  4  = 28',
        line5: '7  X  5  = 35',
        line6: '7  X  6  = 42',
        line7: '7  X  7  = 49',
        line8: '7  X  8  = 56',
        line9: '7  X  9  = 63',
        line10: '7  X 10 = 70',
        sound1: 'Seven ones are seven',
        sound2: 'Seven twos are fourteen',
        sound3: 'Seven threes are twenty-one',
        sound4: 'Seven fours are twenty-eight',
        sound5: 'Seven fives are thirty-five',
        sound6: 'Seven sixes are forty-two',
        sound7: 'Seven sevens are forty-nine',
        sound8: 'Seven eights are fifty-six',
        sound9: 'Seven nines are sixty-three',
        sound10: 'Seven tens are seventy',
    },
    {
        id: 7,
        name: '8x',
        img1: require('../../assets/table/table8.png'),
        line1: '8  X  1  =  8',
        line2: '8  X  2  = 16',
        line3: '8  X  3  = 24',
        line4: '8  X  4  = 32',
        line5: '8  X  5  = 40',
        line6: '8  X  6  = 48',
        line7: '8  X  7  = 56',
        line8: '8  X  8  = 64',
        line9: '8  X  9  = 72',
        line10: '8  X 10 = 80',
        sound1: 'Eight ones are eight',
        sound2: 'Eight twos are sixteen',
        sound3: 'Eight threes are twenty-four',
        sound4: 'Eight fours are thirty-two',
        sound5: 'Eight fives are forty',
        sound6: 'Eight sixes are forty-eight',
        sound7: 'Eight sevens are fifty-six',
        sound8: 'Eight eights are sixty-four',
        sound9: 'Eight nines are seventy-two',
        sound10: 'Eight tens are eighty',
    },
    {
        id: 8,
        name: '9x',
        img1: require('../../assets/table/table9.png'),
        line1: '9  X  1  =  9',
        line2: '9  X  2  = 18',
        line3: '9  X  3  = 27',
        line4: '9  X  4  = 36',
        line5: '9  X  5  = 45',
        line6: '9  X  6  = 54',
        line7: '9  X  7  = 63',
        line8: '9  X  8  = 72',
        line9: '9  X  9  = 81',
        line10: '9  X 10 = 90',
        sound1: 'Nine ones are nine',
        sound2: 'Nine twos are eighteen',
        sound3: 'Nine threes are twenty-seven',
        sound4: 'Nine fours are thirty-six',
        sound5: 'Nine fives are forty-five',
        sound6: 'Nine sixes are fifty-four',
        sound7: 'Nine sevens are sixty-three',
        sound8: 'Nine eights are seventy-two',
        sound9: 'Nine nines are eighty-one',
        sound10: 'Nine tens are ninety',
    },
    {
        id: 9,
        name: '10x',
        img1: require('../../assets/table/table10.png'),
        line1: '10  X  1  =  10',
        line2: '10  X  2  =  20',
        line3: '10  X  3  =  30',
        line4: '10  X  4  =  40',
        line5: '10  X  5  =  50',
        line6: '10  X  6  =  60',
        line7: '10  X  7  =  70',
        line8: '10  X  8  =  80',
        line9: '10  X  9  =  90',
        line10: '10  X 10 = 100',
        sound1: 'Ten ones are ten',
        sound2: 'Ten twos are twenty',
        sound3: 'Ten threes are thirty',
        sound4: 'Ten fours are forty',
        sound5: 'Ten fives are fifty',
        sound6: 'Ten sixes are sixty',
        sound7: 'Ten sevens are seventy',
        sound8: 'Ten eights are eighty',
        sound9: 'Ten nines are ninety',
        sound10: 'Ten tens are one hundred',
    },
    {
        id: 10,
        name: '11x',
        img1: require('../../assets/table/table11.png'),
        line1: '11  X  1  =  11',
        line2: '11  X  2  =  22',
        line3: '11  X  3  =  33',
        line4: '11  X  4  =  44',
        line5: '11  X  5  =  55',
        line6: '11  X  6  =  66',
        line7: '11  X  7  =  77',
        line8: '11  X  8  =  88',
        line9: '11  X  9  =  99',
        line10: '11  X 10 = 110',
        sound1: 'Eleven ones are eleven',
        sound2: 'Eleven twos are twenty-two',
        sound3: 'Eleven threes are thirty-three',
        sound4: 'Eleven fours are forty-four',
        sound5: 'Eleven fives are fifty-five',
        sound6: 'Eleven sixes are sixty-six',
        sound7: 'Eleven sevens are seventy-seven',
        sound8: 'Eleven eights are eighty-eight',
        sound9: 'Eleven nines are ninety-nine',
        sound10: 'Eleven tens are one hundred ten',
    },
    {
        id: 11,
        name: '12x',
        img1: require('../../assets/table/table12.png'),
        line1: '12  X  1  =  12',
        line2: '12  X  2  =  24',
        line3: '12  X  3  =  36',
        line4: '12  X  4  =  48',
        line5: '12  X  5  =  60',
        line6: '12  X  6  =  72',
        line7: '12  X  7  =  84',
        line8: '12  X  8  =  96',
        line9: '12  X  9  = 108',
        line10: '12  X 10 = 120',
        sound1: 'Twelve ones are twelve',
        sound2: 'Twelve twos are twenty-four',
        sound3: 'Twelve threes are  thirty-six',
        sound4: 'Twelve fours are forty-eight',
        sound5: 'Twelve fives are sixty',
        sound6: 'Twelve sixes are seventy-two',
        sound7: 'Twelve sevens are eighty-four',
        sound8: 'Twelve eights are ninety-six',
        sound9: 'Twelve nines are one hundred eight',
        sound10: 'Twelve tens are one hundred twenty',
    },
    {
        id: 12,
        name: '13x',
        img1: require('../../assets/table/table13.png'),
        line1: '13  X  1  =  13',
        line2: '13  X  2  =  26',
        line3: '13  X  3  =  39',
        line4: '13  X  4  =  52',
        line5: '13  X  5  =  65',
        line6: '13  X  6  =  78',
        line7: '13  X  7  =  91',
        line8: '13  X  8  = 104',
        line9: '13  X  9  = 117',
        line10: '13  X 10 = 130',
        sound1: 'Thirteen ones are thirteen',
        sound2: 'Thirteen twos are twenty-six',
        sound3: 'Thirteen threes are thirty-nine',
        sound4: 'Thirteen fours are fifty-two',
        sound5: 'Thirteen fives are sixty-five',
        sound6: 'Thirteen sixes are  seventy-eight',
        sound7: 'Thirteen sevens are ninety-one',
        sound8: 'Thirteen eights are one hundred four',
        sound9: 'Thirteen nines are one hundred seventeen',
        sound10: 'Thirteen tens are one hundred thirty',
    },
    {
        id: 13,
        name: '14x',
        img1: require('../../assets/table/table14.png'),
        line1: '14  X  1  =  14',
        line2: '14  X  2  =  28',
        line3: '14  X  3  =  42',
        line4: '14  X  4  =  56',
        line5: '14  X  5  =  70',
        line6: '14  X  6  =  84',
        line7: '14  X  7  =  98',
        line8: '14  X  8  = 112',
        line9: '14  X  9  = 126',
        line10: '14  X 10 = 140',
        sound1: 'Fourteen ones are fourteen',
        sound2: 'Fourteen twos are twenty-eight',
        sound3: 'Fourteen threes are forty-two',
        sound4: 'Fourteen fours are fifty-six',
        sound5: 'Fourteen fives are seventy',
        sound6: 'Fourteen sixes are eighty-four',
        sound7: 'Fourteen sevens are ninety-eight',
        sound8: 'Fourteen eights are one hundred twelve',
        sound9: 'Fourteen nines are one hundred twenty-six',
        sound10: 'Fourteen tens are one hundred forty',
    },
    {
        id: 14,
        name: '15x',
        img1: require('../../assets/table/table15.png'),
        line1: '15  X  1  =  15',
        line2: '15  X  2  =  30',
        line3: '15  X  3  =  45',
        line4: '15  X  4  =  60',
        line5: '15  X  5  =  75',
        line6: '15  X  6  =  90',
        line7: '15  X  7  = 105',
        line8: '15  X  8  = 120',
        line9: '15  X  9  = 135',
        line10: '15  X 10 = 150',
        sound1: 'Fifteen ones are fifteen',
        sound2: 'Fifteen twos are thirty',
        sound3: 'Fifteen threes are forty-five',
        sound4: 'Fifteen fours are sixty',
        sound5: 'Fifteen fives are seventy-five',
        sound6: 'Fifteen sixes are ninety',
        sound7: 'Fifteen sevens are one hundred five',
        sound8: 'Fifteen eights are one hundred twenty',
        sound9: 'Fifteen nines are one hundred thirty-five',
        sound10: 'Fifteen tens are one hundred fifty',
    },
    {
        id: 15,
        name: '16x',
        img1: require('../../assets/table/table16.png'),
        line1: '16  X  1  =  16',
        line2: '16  X  2  =  32',
        line3: '16  X  3  =  48',
        line4: '16  X  4  =  64',
        line5: '16  X  5  =  80',
        line6: '16  X  6  =  96',
        line7: '16  X  7  = 112',
        line8: '16  X  8  = 128',
        line9: '16  X  9  = 144',
        line10: '16  X 10 = 160',
        sound1: 'Sixteen ones are sixteen',
        sound2: 'Sixteen twos are thirty-two',
        sound3: 'Sixteen threes are forty-eight',
        sound4: 'Sixteen fours are sixty-four',
        sound5: 'Sixteen fives are eighty',
        sound6: 'Sixteen sixes are ninety-six',
        sound7: 'Sixteen sevens are one hundred twelve',
        sound8: 'Sixteen eights are one hundred twenty-eight',
        sound9: 'Sixteen nines are one hundred forty-four',
        sound10: 'Sixteen tens are one hundred sixty',
    },
    {
        id: 16,
        name: '17x',
        img1: require('../../assets/table/table17.png'),
        line1: '17  X  1  =  17',
        line2: '17  X  2  =  34',
        line3: '17  X  3  =  51',
        line4: '17  X  4  =  68',
        line5: '17  X  5  =  85',
        line6: '17  X  6  = 102',
        line7: '17  X  7  = 119',
        line8: '17  X  8  = 136',
        line9: '17  X  9  = 153',
        line10: '17  X 10 = 170',
        sound1: 'Seventeen ones are seventeen',
        sound2: 'Seventeen twos are thirty-four',
        sound3: 'Seventeen threes are fifty-one',
        sound4: 'Seventeen fours are sixty-eight',
        sound5: 'Seventeen fives are eighty-five',
        sound6: 'Seventeen sixes are one hundred two',
        sound7: 'Seventeen sevens are one hundred nineteen',
        sound8: 'Seventeen eights are one hundred thirty-six',
        sound9: 'Seventeen nines are one hundred fifty-three',
        sound10: 'Seventeen tens are one hundred seventy',
    },
    {
        id: 17,
        name: '18x',
        img1: require('../../assets/table/table18.png'),
        line1: '18  X  1  =  18',
        line2: '18  X  2  =  36',
        line3: '18  X  3  =  54',
        line4: '18  X  4  =  72',
        line5: '18  X  5  =  90',
        line6: '18  X  6  = 108',
        line7: '18  X  7  = 126',
        line8: '18  X  8  = 144',
        line9: '18  X  9  = 162',
        line10: '18  X 10 = 180',
        sound1: 'Eighteen ones are eighteen',
        sound2: 'Eighteen twos are thirty-six',
        sound3: 'Eighteen threes are fifty-four',
        sound4: 'Eighteen fours are seventy-two',
        sound5: 'Eighteen fives are ninety',
        sound6: 'Eighteen sixes are one hundred eight',
        sound7: 'Eighteen sevens are one hundred twenty-six',
        sound8: 'Eighteen eights are one hundred forty-four',
        sound9: 'Eighteen nines are one hundred sixty-two',
        sound10: 'Eighteen tens are one hundred eighty',
    },
    {
        id: 18,
        name: '19x',
        img1: require('../../assets/table/table19.png'),
        line1: '19  X  1  =  19',
        line2: '19  X  2  =  38',
        line3: '19  X  3  =  57',
        line4: '19  X  4  =  76',
        line5: '19  X  5  =  95',
        line6: '19  X  6  = 114',
        line7: '19  X  7  = 133',
        line8: '19  X  8  = 152',
        line9: '19  X  9  = 171',
        line10: '19  X 10 = 190',
        sound1: 'Nineteen ones are nineteen',
        sound2: 'Nineteen twos are thirty-eight',
        sound3: 'Nineteen threes are  fifty-seven',
        sound4: 'Nineteen fours are seventy-six',
        sound5: 'Nineteen fives are ninety-five',
        sound6: 'Nineteen sixes are one hundred fourteen',
        sound7: 'Nineteen sevens are one hundred thirty-three',
        sound8: 'Nineteen eights are one hundred fifty-two',
        sound9: 'Nineteen nines are one hundred seventy-one',
        sound10: 'Nineteen tens are one hundred ninety',
    },
    {
        id: 19,
        name: '20x',
        img1: require('../../assets/table/table20.png'),
        line1: '20  X  1  =  20',
        line2: '20  X  2  =  40',
        line3: '20  X  3  =  60',
        line4: '20  X  4  =  80',
        line5: '20  X  5  = 100',
        line6: '20  X  6  = 120',
        line7: '20  X  7  = 140',
        line8: '20  X  8  = 160',
        line9: '20  X  9  = 180',
        line10: '20  X 10 = 200',
        sound1: 'Twenty ones are twenty',
        sound2: 'Twenty twos are forty',
        sound3: 'Twenty threes are sixty',
        sound4: 'Twenty fours are eighty',
        sound5: 'Twenty fives are one hundred',
        sound6: 'Twenty sixes are one hundred twenty',
        sound7: 'Twenty sevens are one hundred forty',
        sound8: 'Twenty eights are one hundred sixty',
        sound9: 'Twenty nines are one hundred eighty',
        sound10: 'Twenty tens are two hundred',
    },
];

export const MaleBodyPart = [
    {
        id: 0,
        name: 'Hairs',
        img1: require('../../assets/male_body_parts/hairs.png'),
        img2: require('../../assets/male_body_parts/hairs1.png')
    },
    {
        id: 1,
        name: 'Eyes',
        img1: require('../../assets/male_body_parts/eyes.png'),
        img2: require('../../assets/male_body_parts/eyes1.png')
    },
    {
        id: 2,
        name: 'Forehead',
        img1: require('../../assets/male_body_parts/forehead.png'),
        img2: require('../../assets/male_body_parts/forehead1.png')
    },
    {
        id: 3,
        name: 'Nose',
        img1: require('../../assets/male_body_parts/nose.png'),
        img2: require('../../assets/male_body_parts/nose1.png')
    },
    {
        id: 4,
        name: 'Ear',
        img1: require('../../assets/male_body_parts/ear.png'),
        img2: require('../../assets/male_body_parts/ear1.png')
    },
    {
        id: 5,
        name: 'Teeth',
        img1: require('../../assets/male_body_parts/teeth.png'),
        img2: require('../../assets/male_body_parts/teeth1.png')
    },
    {
        id: 6,
        name: 'Tongue',
        img1: require('../../assets/male_body_parts/tongue.png'),
        img2: require('../../assets/male_body_parts/tongue1.png')
    },
    {
        id: 7,
        name: 'Chin',
        img1: require('../../assets/male_body_parts/chin.png'),
        img2: require('../../assets/male_body_parts/chin1.png')
    },
    {
        id: 8,
        name: 'Lips',
        img1: require('../../assets/male_body_parts/lips.png'),
        img2: require('../../assets/male_body_parts/lips1.png')
    },
    {
        id: 9,
        name: 'Chest',
        img1: require('../../assets/male_body_parts/chest.png'),
        img2: require('../../assets/male_body_parts/chest1.png')
    },
    {
        id: 10,
        name: 'Hips',
        img1: require('../../assets/male_body_parts/hips.png'),
        img2: require('../../assets/male_body_parts/hips1.png')
    },
    {
        id: 11,
        name: 'Hand',
        img1: require('../../assets/male_body_parts/hand.png'),
        img2: require('../../assets/male_body_parts/hand1.png')
    },
    {
        id: 12,
        name: 'Arm',
        img1: require('../../assets/male_body_parts/arm.png'),
        img2: require('../../assets/male_body_parts/arm1.png')
    },
    {
        id: 13,
        name: 'Legs',
        img1: require('../../assets/male_body_parts/legs.png'),
        img2: require('../../assets/male_body_parts/legs1.png')
    },
    {
        id: 14,
        name: 'Foot',
        img1: require('../../assets/male_body_parts/foot.png'),
        img2: require('../../assets/male_body_parts/foot1.png'),
    },
    {
        id: 15,
        name: 'Eyebrow',
        img1: require('../../assets/male_body_parts/eyebrow.png'),
        img2: require('../../assets/male_body_parts/eyebrow1.png'),
    },
    {
        id: 16,
        name: 'Thumb',
        img1: require('../../assets/male_body_parts/thumb.png'),
        img2: require('../../assets/male_body_parts/thumb1.png')
    },
    {
        id: 17,
        name: 'Knees',
        img1: require('../../assets/male_body_parts/knees.png'),
        img2: require('../../assets/male_body_parts/knees1.png')
    },
    {
        id: 18,
        name: 'Finger',
        img1: require('../../assets/male_body_parts/finger.png'),
        img2: require('../../assets/male_body_parts/finger1.png')
    },
    {
        id: 19,
        name: 'Neck',
        img1: require('../../assets/male_body_parts/neck.png'),
        img2: require('../../assets/male_body_parts/neck1.png')
    },
    {
        id: 20,
        name: 'Stomach',
        img1: require('../../assets/male_body_parts/stomach.png'),
        img2: require('../../assets/male_body_parts/stomach1.png')
    },
    {
        id: 21,
        name: 'Elbow',
        img1: require('../../assets/male_body_parts/elbow.png'),
        img2: require('../../assets/male_body_parts/elbow1.png')
    },
];

export const FemaleBodyPart = [
    {
        id: 0,
        name: 'Hairs',
        img1: require('../../assets/female_body_parts/hairs.png'),
        img2: require('../../assets/female_body_parts/hairs1.png')
    },
    {
        id: 1,
        name: 'Eyes',
        img1: require('../../assets/female_body_parts/eyes.png'),
        img2: require('../../assets/female_body_parts/eyes1.png')
    },
    {
        id: 2,
        name: 'Forehead',
        img1: require('../../assets/female_body_parts/forehead.png'),
        img2: require('../../assets/female_body_parts/forehead1.png')
    },
    {
        id: 3,
        name: 'Nose',
        img1: require('../../assets/female_body_parts/nose.png'),
        img2: require('../../assets/female_body_parts/nose1.png')
    },
    {
        id: 4,
        name: 'Ear',
        img1: require('../../assets/female_body_parts/ear.png'),
        img2: require('../../assets/female_body_parts/ear1.png')
    },
    {
        id: 5,
        name: 'Teeth',
        img1: require('../../assets/female_body_parts/teeth.png'),
        img2: require('../../assets/female_body_parts/teeth1.png')
    },
    {
        id: 6,
        name: 'Tongue',
        img1: require('../../assets/female_body_parts/tongue.png'),
        img2: require('../../assets/female_body_parts/tongue1.png')
    },
    {
        id: 7,
        name: 'Chin',
        img1: require('../../assets/female_body_parts/chin.png'),
        img2: require('../../assets/female_body_parts/chin1.png')
    },
    {
        id: 8,
        name: 'Lips',
        img1: require('../../assets/female_body_parts/lips.png'),
        img2: require('../../assets/female_body_parts/lips1.png')
    },
    {
        id: 9,
        name: 'Chest',
        img1: require('../../assets/female_body_parts/chest.png'),
        img2: require('../../assets/female_body_parts/chest1.png')
    },
    {
        id: 10,
        name: 'Cheeks',
        img1: require('../../assets/female_body_parts/cheeks.png'),
        img2: require('../../assets/female_body_parts/cheeks1.png')
    },
    {
        id: 11,
        name: 'Hand',
        img1: require('../../assets/female_body_parts/hand.png'),
        img2: require('../../assets/female_body_parts/hand1.png')
    },
    {
        id: 12,
        name: 'Arm',
        img1: require('../../assets/female_body_parts/arm.png'),
        img2: require('../../assets/female_body_parts/arm1.png')
    },
    {
        id: 13,
        name: 'Legs',
        img1: require('../../assets/female_body_parts/legs.png'),
        img2: require('../../assets/female_body_parts/legs1.png')
    },
    {
        id: 14,
        name: 'Foot',
        img1: require('../../assets/female_body_parts/foot.png'),
        img2: require('../../assets/female_body_parts/foot1.png'),
    },
    {
        id: 15,
        name: 'Eyebrow',
        img1: require('../../assets/female_body_parts/eyebrow.png'),
        img2: require('../../assets/female_body_parts/eyebrow1.png'),
    },
    {
        id: 16,
        name: 'Thumb',
        img1: require('../../assets/female_body_parts/thumb.png'),
        img2: require('../../assets/female_body_parts/thumb1.png')
    },
    {
        id: 17,
        name: 'Knees',
        img1: require('../../assets/female_body_parts/knees.png'),
        img2: require('../../assets/female_body_parts/knees1.png')
    },
    {
        id: 18,
        name: 'Finger',
        img1: require('../../assets/female_body_parts/finger.png'),
        img2: require('../../assets/female_body_parts/finger1.png')
    },
    {
        id: 19,
        name: 'Neck',
        img1: require('../../assets/female_body_parts/neck.png'),
        img2: require('../../assets/female_body_parts/neck1.png')
    },
    {
        id: 20,
        name: 'Stomach',
        img1: require('../../assets/female_body_parts/stomach.png'),
        img2: require('../../assets/female_body_parts/stomach1.png')
    },
    {
        id: 21,
        name: 'Elbow',
        img1: require('../../assets/female_body_parts/elbow.png'),
        img2: require('../../assets/female_body_parts/elbow1.png')
    },
];


export default Animals;










// import {AnimationObject} from 'src/data/alphabets';

// export interface Animal {
//     id: number;
//     lottie: string | AnimationObject | { uri: string };
//     name: string;
//     sound?: any
// }

// export const Animals: Array<Animal> = [
//     {
//         id: 0,
//         lottie: require('src/assets/Animals/Aa/Ant.json'),
//         name: 'Ant',
//         sound: require('src/assets/mp3/animals/Ant.mp3')
//     },
//     {
//         id: 1,
//         lottie: require('src/assets/Animals/Aa/Bat.json'),
//         name: 'Bat',
//         sound: require('src/assets/mp3/animals/Bat.mp3')
//     },
//     {
//         id: 2,
//         lottie: require('src/assets/Animals/Bb/Bear.json'),
//         name: 'Bear',
//         sound: require('src/assets/mp3/animals/Bear.mp3')
//     },
//     {
//         id: 3,
//         lottie: require('src/assets/Animals/Bb/Bird.json'),
//         name: 'Bird',
//         sound: require('src/assets/mp3/animals/Bird.mp3')
//     },
//     {
//         id: 4,
//         lottie: require('src/assets/Animals/Cc/Cat.json'),
//         name: 'Cat',
//         sound: require('src/assets/mp3/animals/Cat.mp3')
//     },
//     {
//         id: 5,
//         lottie: require('src/assets/Animals/Cc/Crab.json'),
//         name: 'Carb',
//         sound: require('src/assets/mp3/animals/Carb.mp3')
//     },
//     {
//         id: 6,
//         lottie: require('src/assets/Animals/Dd/Dog.json'),
//         name: 'Dog',
//         sound: require('src/assets/mp3/animals/Dog.mp3')
//     },
//     {
//         id: 7,
//         lottie: require('src/assets/Animals/Dd/Duck.json'),
//         name: 'Duck',
//         sound: require('src/assets/mp3/animals/Duck.mp3')
//     },
//     {
//         id: 8,
//         lottie: require('src/assets/Animals/Ee/Bee.json'),
//         name: 'Bee',
//         sound: require('src/assets/mp3/animals/Bee.mp3')
//     },
//     {
//         id: 9,
//         lottie: require('src/assets/Animals/Ee/Elephant.json'),
//         name: 'Elephant',
//         sound: require('src/assets/mp3/animals/Elephant.mp3')
//     },
//     {
//         id: 10,
//         lottie: require('src/assets/Animals/Ff/Fish.json'),
//         name: 'Fish',
//         sound: require('src/assets/mp3/animals/Fish.mp3')
//     },
//     {
//         id: 11,
//         lottie: require('src/assets/Animals/Ff/Frog.json'),
//         name: 'Frog',
//         sound: require('src/assets/mp3/animals/Frog.mp3')
//     },
//     {
//         id: 12,
//         lottie: require('src/assets/Animals/Gg/Girabffe.json'),
//         name: 'Giraffe',
//         sound: require('src/assets/mp3/animals/Giraffe.mp3')
//     },
//     {
//         id: 13,
//         lottie: require('src/assets/Animals/Gg/Hedgehog.json'),
//         name: 'Hedgehog',
//         sound: require('src/assets/mp3/animals/Hedgehog.mp3')
//     },
//     {
//         id: 14,
//         lottie: require('src/assets/Animals/Hh/Hamster.json'),
//         name: 'Hamster',
//         sound: require('src/assets/mp3/animals/Hamster.mp3')
//     },
//     {
//         id: 15,
//         lottie: require('src/assets/Animals/Hh/Hippo.json'),
//         name: 'Hippo',
//         sound: require('src/assets/mp3/animals/Hippo.mp3')
//     },
//     {
//         id: 16,
//         lottie: require('src/assets/Animals/Ii/Ostrich.json'),
//         name: 'Ostrich',
//         sound: require('src/assets/mp3/animals/Ostrich.mp3')
//     },
//     {
//         id: 17,
//         lottie: require('src/assets/Animals/Ii/Snail.json'),
//         name: 'Snail',
//         sound: require('src/assets/mp3/animals/Snail.mp3')
//     },
//     {
//         id: 18,
//         lottie: require('src/assets/Animals/Jj/Jaguar.json'),
//         name: 'Jaguar',
//         sound: require('src/assets/mp3/animals/Jaguar.mp3')
//     },
//     {
//         id: 19,
//         lottie: require('src/assets/Animals/Jj/Jellyfish.json'),
//         name: 'Jellyfish',
//         sound: require('src/assets/mp3/animals/Jellyfish.mp3')
//     },
//     {
//         id: 20,
//         lottie: require('src/assets/Animals/Kk/Kangaroo.json'),
//         name: 'Kangaroo',
//         sound: require('src/assets/mp3/animals/Kangaroo.mp3')
//     },
//     {
//         id: 21,
//         lottie: require('src/assets/Animals/Kk/Snake.json'),
//         name: 'Snake',
//         sound: require('src/assets/mp3/animals/Snake.mp3')
//     },
//     {
//         id: 22,
//         lottie: require('src/assets/Animals/Ll/Lion.json'),
//         name: 'Lion',
//         sound: require('src/assets/mp3/animals/Lion.mp3')
//     },
//     {
//         id: 23,
//         lottie: require('src/assets/Animals/Ll/Llama.json'),
//         name: 'Llama',
//         sound: require('src/assets/mp3/animals/Llama.mp3')
//     },
//     {
//         id: 24,
//         lottie: require('src/assets/Animals/Mm/Monkey.json'),
//         name: 'Monkey',
//         sound: require('src/assets/mp3/animals/Monkey.mp3')
//     },
//     {
//         id: 25,
//         lottie: require('src/assets/Animals/Mm/Mouse.json'),
//         name: 'Mouse',
//         sound: require('src/assets/mp3/animals/Mouse.mp3')
//     },
//     {
//         id: 26,
//         lottie: require('src/assets/Animals/Nn/Chicken.json'),
//         name: 'Chicken',
//         sound: require('src/assets/mp3/animals/Chicken.mp3')
//     },
//     {
//         id: 27,
//         lottie: require('src/assets/Animals/Nn/Narwhal.json'),
//         name: 'Narwhal',
//         sound: require('src/assets/mp3/animals/Narwhal.mp3')
//     },
//     {
//         id: 28,
//         lottie: require('src/assets/Animals/Oo/Octopus.json'),
//         name: 'Octopus',
//         sound: require('src/assets/mp3/animals/Octopus.mp3')
//     },
//     {
//         id: 29,
//         lottie: require('src/assets/Animals/Oo/Owl.json'),
//         name: 'Owl',
//         sound: require('src/assets/mp3/animals/Owl.mp3')
//     },
//     {
//         id: 30,
//         lottie: require('src/assets/Animals/Pp/Penguin.json'),
//         name: 'Penguin',
//         sound: require('src/assets/mp3/animals/Penguin.mp3')
//     },
//     {
//         id: 31,
//         lottie: require('src/assets/Animals/Pp/Pig.json'),
//         name: 'Pig',
//         sound: require('src/assets/mp3/animals/Pig.mp3')
//     },
//     {
//         id: 32,
//         lottie: require('src/assets/Animals/Qq/Mosquito.json'),
//         name: 'Mosquito',
//         sound: require('src/assets/mp3/animals/Mosquito.mp3')
//     },
//     {
//         id: 33,
//         lottie: require('src/assets/Animals/Qq/Squirrel.json'),
//         name: 'Squirrel',
//         sound: require('src/assets/mp3/animals/Squirrel.mp3')
//     },
//     {
//         id: 34,
//         lottie: require('src/assets/Animals/Rr/Rabbit.json'),
//         name: 'Rabbit',
//         sound: require('src/assets/mp3/animals/Rabbit.mp3')
//     },
//     {
//         id: 35,
//         lottie: require('src/assets/Animals/Rr/Racoon.json'),
//         name: 'Raccoon',
//         sound: require('src/assets/mp3/animals/Raccoon.mp3')
//     },
//     {
//         id: 36,
//         lottie: require('src/assets/Animals/Ss/Seahouse.json'),
//         name: 'Seahorse',
//         sound: require('src/assets/mp3/animals/Seahorse.mp3')
//     },
//     {
//         id: 37,
//         lottie: require('src/assets/Animals/Ss/Sheep.json'),
//         name: 'Sheep',
//         sound: require('src/assets/mp3/animals/Seahorse.mp3')
//     },
//     {
//         id: 38,
//         lottie: require('src/assets/Animals/Tt/Tiger.json'),
//         name: 'Tiger',
//         sound: require('src/assets/mp3/animals/Tiger.mp3')
//     },
//     {
//         id: 39,
//         lottie: require('src/assets/Animals/Tt/Turtle.json'),
//         name: 'Turtle',
//         sound: require('src/assets/mp3/animals/Turtle.mp3')
//     },
//     {
//         id: 40,
//         lottie: require('src/assets/Animals/Uu/Butterfly.json'),
//         name: 'Butterfly',
//         sound: require('src/assets/mp3/animals/Butterfly.mp3')
//     },
//     {
//         id: 41,
//         lottie: require('src/assets/Animals/Uu/Unicorn.json'),
//         name: 'Unicorn',
//         sound: require('src/assets/mp3/animals/Unicorn.mp3')
//     },
//     {
//         id: 42,
//         lottie: require('src/assets/Animals/Vv/Beaver.json'),
//         name: 'Beaver',
//         sound: require('src/assets/mp3/animals/Beaver.mp3')
//     },
//     {
//         id: 43,
//         lottie: require('src/assets/Animals/Vv/VampireBat.json'),
//         name: 'Vampire Bat',
//         sound: require('src/assets/mp3/animals/VampireBat.mp3')
//     },
//     {
//         id: 44,
//         lottie: require('src/assets/Animals/Ww/Swan.json'),
//         name: 'Swan',
//         sound: require('src/assets/mp3/animals/Swan.mp3')
//     },
//     {
//         id: 45,
//         lottie: require('src/assets/Animals/Ww/Whale.json'),
//         name: 'Whale',
//         sound: require('src/assets/mp3/animals/Whale.mp3')
//     },
//     {
//         id: 46,
//         lottie: require('src/assets/Animals/Xx/Fox.json'),
//         name: 'Fox',
//         sound: require('src/assets/mp3/animals/Fox.mp3')
//     },
//     {
//         id: 47,
//         lottie: require('src/assets/Animals/Xx/XRayfish.json'),
//         name: 'X Ray-fish',
//         sound: require('src/assets/mp3/animals/XRayfish.mp3')
//     },
//     {
//         id: 48,
//         lottie: require('src/assets/Animals/Yy/Oyster.json'),
//         name: 'Oyster',
//         sound: require('src/assets/mp3/animals/Oyster.mp3')
//     },
//     {
//         id: 49,
//         lottie: require('src/assets/Animals/Yy/Stingray.json'),
//         name: 'Stingray',
//         sound: require('src/assets/mp3/animals/Stingray.mp3')
//     },
//     {
//         id: 50,
//         lottie: require('src/assets/Animals/Zz/Zebra.json'),
//         name: 'Zebra',
//         sound: require('src/assets/mp3/animals/Zebra.mp3')
//     },
//     {
//         id: 51,
//         lottie: require('src/assets/Animals/Zz/Zebrafish'),
//         name: 'Zebrafish',
//         sound: require('src/assets/mp3/animals/Zebrafish.mp3')
//     },
// ];

// const AnimalWithLetter = {
//     Aa: [
//         {id: 0, lottie: require('src/assets/Animals/Aa/Ant.json'), name: 'Ant'},
//         {id: 1, lottie: require('src/assets/Animals/Aa/Bat.json'), name: 'Bat'},
//     ],
//     Bb: [
//         {id: 2, lottie: require('src/assets/Animals/Bb/Bear.json'), name: 'Bear'},
//         {id: 3, lottie: require('src/assets/Animals/Bb/Bird.json'), name: 'Bird'},
//     ],
//     Cc: [
//         {id: 4, lottie: require('src/assets/Animals/Cc/Cat.json'), name: 'Cat'},
//         {id: 5, lottie: require('src/assets/Animals/Cc/Crab.json'), name: 'Carb'},
//     ],
//     Dd: [
//         {id: 6, lottie: require('src/assets/Animals/Dd/Dog.json'), name: 'Dog'},
//         {id: 7, lottie: require('src/assets/Animals/Dd/Duck.json'), name: 'Duck'},
//     ],
//     Ee: [
//         {id: 8, lottie: require('src/assets/Animals/Ee/Bee.json'), name: 'Bee'},
//         {id: 9, lottie: require('src/assets/Animals/Ee/Elephant.json'), name: 'Elephant'},
//     ],
//     Ff: [
//         {id: 10, lottie: require('src/assets/Animals/Ff/Fish.json'), name: 'Fish'},
//         {id: 11, lottie: require('src/assets/Animals/Ff/Frog.json'), name: 'Frog'},
//     ],
//     Gg: [
//         {id: 12, lottie: require('src/assets/Animals/Gg/Girabffe.json'), name: 'Giraffe'},
//         {id: 13, lottie: require('src/assets/Animals/Gg/Hedgehog.json'), name: 'Hedgehog'},
//     ],
//     Hh: [
//         {id: 14, lottie: require('src/assets/Animals/Hh/Hamster.json'), name: 'Hamster'},
//         {id: 15, lottie: require('src/assets/Animals/Hh/Hippo.json'), name: 'Hippo'},
//     ],
//     Ii: [
//         {id: 16, lottie: require('src/assets/Animals/Ii/Ostrich.json'), name: 'Ostrich'},
//         {id: 17, lottie: require('src/assets/Animals/Ii/Snail.json'), name: 'Snail'},
//     ],
//     Jj: [
//         {id: 18, lottie: require('src/assets/Animals/Jj/Jaguar.json'), name: 'Jaguar'},
//         {id: 19, lottie: require('src/assets/Animals/Jj/Jellyfish.json'), name: 'Jellyfish'},
//     ],
//     Kk: [
//         {id: 20, lottie: require('src/assets/Animals/Kk/Kangaroo.json'), name: 'Kangaroo'},
//         {id: 21, lottie: require('src/assets/Animals/Kk/Snake.json'), name: 'Snake'},
//     ],
//     Ll: [
//         {id: 22, lottie: require('src/assets/Animals/Ll/Lion.json'), name: 'Lion'},
//         {id: 23, lottie: require('src/assets/Animals/Ll/Llama.json'), name: 'Llama'},
//     ],
//     Mm: [
//         {id: 24, lottie: require('src/assets/Animals/Mm/Monkey.json'), name: 'Monkey'},
//         {id: 25, lottie: require('src/assets/Animals/Mm/Mouse.json'), name: 'Mouse'},
//     ],
//     Nn: [
//         {id: 26, lottie: require('src/assets/Animals/Nn/Chicken.json'), name: 'Chicken'},
//         {id: 27, lottie: require('src/assets/Animals/Nn/Narwhal.json'), name: 'Narwhal'},
//     ],
//     Oo: [
//         {id: 28, lottie: require('src/assets/Animals/Oo/Octopus.json'), name: 'Octopus'},
//         {id: 29, lottie: require('src/assets/Animals/Oo/Owl.json'), name: 'Owl'},
//     ],
//     Pp: [
//         {id: 30, lottie: require('src/assets/Animals/Pp/Penguin.json'), name: 'Penguin'},
//         {id: 31, lottie: require('src/assets/Animals/Pp/Pig.json'), name: 'Pig'},
//     ],
//     Qq: [
//         {id: 32, lottie: require('src/assets/Animals/Qq/Mosquito.json'), name: 'Mosquito'},
//         {id: 33, lottie: require('src/assets/Animals/Qq/Squirrel.json'), name: 'Squirrel'},
//     ],
//     Rr: [
//         {id: 34, lottie: require('src/assets/Animals/Rr/Rabbit.json'), name: 'Rabbit'},
//         {id: 35, lottie: require('src/assets/Animals/Rr/Racoon.json'), name: 'Raccoon'},
//     ],
//     Ss: [
//         {id: 36, lottie: require('src/assets/Animals/Ss/Seahouse.json'), name: 'Seahorse'},
//         {id: 37, lottie: require('src/assets/Animals/Ss/Sheep.json'), name: 'Sheep'},
//     ],
//     Tt: [
//         {id: 38, lottie: require('src/assets/Animals/Tt/Tiger.json'), name: 'Tiger'},
//         {id: 39, lottie: require('src/assets/Animals/Tt/Turtle.json'), name: 'Turtle'},
//     ],
//     Uu: [
//         {id: 40, lottie: require('src/assets/Animals/Uu/Butterfly.json'), name: 'Butterfly'},
//         {id: 41, lottie: require('src/assets/Animals/Uu/Unicorn.json'), name: 'Unicorn'},
//     ],
//     Vv: [
//         {id: 42, lottie: require('src/assets/Animals/Vv/Beaver.json'), name: 'Beaver'},
//         {id: 43, lottie: require('src/assets/Animals/Vv/VampireBat.json'), name: 'Vampire Bat'},
//     ],
//     Ww: [
//         {id: 44, lottie: require('src/assets/Animals/Ww/Swan.json'), name: 'Swan'},
//         {id: 45, lottie: require('src/assets/Animals/Ww/Whale.json'), name: 'Whale'},
//     ],
//     Xx: [
//         {id: 46, lottie: require('src/assets/Animals/Xx/Fox.json'), name: 'Fox'},
//         {id: 47, lottie: require('src/assets/Animals/Xx/XRayfish.json'), name: 'X Ray-fish'},
//     ],
//     Yy: [
//         {id: 48, lottie: require('src/assets/Animals/Yy/Oyster.json'), name: 'Oyster'},
//         {id: 49, lottie: require('src/assets/Animals/Yy/Stingray.json'), name: 'Stingray'},
//     ],
//     Zz: [
//         {id: 50, lottie: require('src/assets/Animals/Zz/Zebra.json'), name: 'Zebra'},
//         {id: 51, lottie: require('src/assets/Animals/Zz/Zebrafish'), name: 'Zebrafish'},
//     ],
// };
// export default AnimalWithLetter;
