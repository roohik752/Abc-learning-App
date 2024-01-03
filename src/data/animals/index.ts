import {AnimationObject} from 'src/data/alphabets';

export interface Animal {
    id: number;
    name: string;
    img1?: any
    img2?: any
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

export const Table = [
    {
        id: 0,
        name: '1x',
        img1: require('../../assets/table/table1.png'),
    },
    {
        id: 1,
        name: '2x',
        img1: require('../../assets/table/table2.png'),
    },
    {
        id: 2,
        name: '3x',
        img1: require('../../assets/table/table3.png'),
    },
    {
        id: 3,
        name: '4x',
        img1: require('../../assets/table/table4.png'),
    },
    {
        id: 4,
        name: '5x',
        img1: require('../../assets/table/table5.png'),
    },
    {
        id: 5,
        name: '6x',
        img1: require('../../assets/table/table6.png'),
    },
    {
        id: 6,
        name: '7x',
        img1: require('../../assets/table/table7.png'),
    },
    {
        id: 7,
        name: '8x',
        img1: require('../../assets/table/table8.png'),
    },
    {
        id: 8,
        name: '9x',
        img1: require('../../assets/table/table9.png'),
    },
    {
        id: 9,
        name: '10x',
        img1: require('../../assets/table/table10.png'),
    },
    {
        id: 10,
        name: '11x',
        img1: require('../../assets/table/table11.png'),
    },
    {
        id: 11,
        name: '12x',
        img1: require('../../assets/table/table12.png'),
    },
    {
        id: 12,
        name: '13x',
        img1: require('../../assets/table/table13.png'),
    },
    {
        id: 13,
        name: '14x',
        img1: require('../../assets/table/table14.png'),
    },
    {
        id: 14,
        name: '15x',
        img1: require('../../assets/table/table15.png'),
    },
    {
        id: 15,
        name: '16x',
        img1: require('../../assets/table/table16.png'),
    },
    {
        id: 16,
        name: '17x',
        img1: require('../../assets/table/table17.png'),
    },
    {
        id: 17,
        name: '18x',
        img1: require('../../assets/table/table18.png'),
    },
    {
        id: 18,
        name: '19x',
        img1: require('../../assets/table/table19.png'),
    },
    {
        id: 19,
        name: '20x',
        img1: require('../../assets/table/table20.png'),
    },
];

export const MaleBodyParts = [
    {
        id: 0,
        name: 'Hairs',
        img1: require('../../assets/male body parts/hairs.png'),
        img2: require('../../assets/male body parts/hairs1.png')
    },
    {
        id: 1,
        name: 'Eyes',
        img1: require('../../assets/male body parts/eyes.png'),
        img2: require('../../assets/male body parts/eyes1.png')
    },
    {
        id: 2,
        name: 'Forehead',
        img1: require('../../assets/male body parts/forehead.png'),
        img2: require('../../assets/male body parts/forehead1.png')
    },
    {
        id: 3,
        name: 'Nose',
        img1: require('../../assets/male body parts/nose.png'),
        img2: require('../../assets/male body parts/nose1.png')
    },
    {
        id: 4,
        name: 'Ear',
        img1: require('../../assets/male body parts/ear.png'),
        img2: require('../../assets/male body parts/ear1.png')
    },
    {
        id: 5,
        name: 'Teeth',
        img1: require('../../assets/male body parts/teeth.png'),
        img2: require('../../assets/male body parts/teeth1.png')
    },
    {
        id: 6,
        name: 'Tongue',
        img1: require('../../assets/male body parts/tongue.png'),
        img2: require('../../assets/male body parts/tongue1.png')
    },
    {
        id: 7,
        name: 'Chin',
        img1: require('../../assets/male body parts/chin.png'),
        img2: require('../../assets/male body parts/chin1.png')
    },
    {
        id: 8,
        name: 'Lips',
        img1: require('../../assets/male body parts/lips.png'),
        img2: require('../../assets/male body parts/lips1.png')
    },
    {
        id: 9,
        name: 'Chest',
        img1: require('../../assets/male body parts/chest.png'),
        img2: require('../../assets/male body parts/chest1.png')
    },
    {
        id: 10,
        name: 'Hips',
        img1: require('../../assets/male body parts/hips.png'),
        img2: require('../../assets/male body parts/hips1.png')
    },
    {
        id: 11,
        name: 'Hand',
        img1: require('../../assets/male body parts/hand.png'),
        img2: require('../../assets/male body parts/hand1.png')
    },
    {
        id: 12,
        name: 'Arm',
        img1: require('../../assets/male body parts/arm.png'),
        img2: require('../../assets/male body parts/arm1.png')
    },
    {
        id: 13,
        name: 'Legs',
        img1: require('../../assets/male body parts/legs.png'),
        img2: require('../../assets/male body parts/legs1.png')
    },
    {
        id: 14,
        name: 'Foot',
        img1: require('../../assets/male body parts/foot.png'),
        img2: require('../../assets/male body parts/foot1.png'),
    },
    {
        id: 15,
        name: 'Eyebrow',
        img1: require('../../assets/male body parts/eyebrow.png'),
        img2: require('../../assets/male body parts/eyebrow1.png'),
    },
    {
        id: 16,
        name: 'Thumb',
        img1: require('../../assets/male body parts/thumb.png'),
        img2: require('../../assets/male body parts/thumb1.png')
    },
    {
        id: 17,
        name: 'Knees',
        img1: require('../../assets/male body parts/knees.png'),
        img2: require('../../assets/male body parts/knees1.png')
    },
    {
        id: 18,
        name: 'Finger',
        img1: require('../../assets/male body parts/finger.png'),
        img2: require('../../assets/male body parts/finger1.png')
    },
    {
        id: 19,
        name: 'Neck',
        img1: require('../../assets/male body parts/neck.png'),
        img2: require('../../assets/male body parts/neck1.png')
    },
    {
        id: 20,
        name: 'Stomach',
        img1: require('../../assets/male body parts/stomach.png'),
        img2: require('../../assets/male body parts/stomach1.png')
    },
    {
        id: 21,
        name: 'Elbow',
        img1: require('../../assets/male body parts/elbow.png'),
        img2: require('../../assets/male body parts/elbow1.png')
    },
];

export const FemaleBodyParts = [
    {
        id: 0,
        name: 'Hairs',
        img1: require('../../assets/female body parts/hairs.png'),
        img2: require('../../assets/female body parts/hairs1.png')
    },
    {
        id: 1,
        name: 'Eyes',
        img1: require('../../assets/female body parts/eyes.png'),
        img2: require('../../assets/female body parts/eyes1.png')
    },
    {
        id: 2,
        name: 'Forehead',
        img1: require('../../assets/female body parts/forehead.png'),
        img2: require('../../assets/female body parts/forehead1.png')
    },
    {
        id: 3,
        name: 'Nose',
        img1: require('../../assets/female body parts/nose.png'),
        img2: require('../../assets/female body parts/nose1.png')
    },
    {
        id: 4,
        name: 'Ear',
        img1: require('../../assets/female body parts/ear.png'),
        img2: require('../../assets/female body parts/ear1.png')
    },
    {
        id: 5,
        name: 'Teeth',
        img1: require('../../assets/female body parts/teeth.png'),
        img2: require('../../assets/female body parts/teeth1.png')
    },
    {
        id: 6,
        name: 'Tongue',
        img1: require('../../assets/female body parts/tongue.png'),
        img2: require('../../assets/female body parts/tongue1.png')
    },
    {
        id: 7,
        name: 'Chin',
        img1: require('../../assets/female body parts/chin.png'),
        img2: require('../../assets/female body parts/chin1.png')
    },
    {
        id: 8,
        name: 'Lips',
        img1: require('../../assets/female body parts/lips.png'),
        img2: require('../../assets/female body parts/lips1.png')
    },
    {
        id: 9,
        name: 'Chest',
        img1: require('../../assets/female body parts/chest.png'),
        img2: require('../../assets/female body parts/chest1.png')
    },
    {
        id: 10,
        name: 'Cheeks',
        img1: require('../../assets/female body parts/cheeks.png'),
        img2: require('../../assets/female body parts/cheeks1.png')
    },
    {
        id: 11,
        name: 'Hand',
        img1: require('../../assets/female body parts/hand.png'),
        img2: require('../../assets/female body parts/hand1.png')
    },
    {
        id: 12,
        name: 'Arm',
        img1: require('../../assets/female body parts/arm.png'),
        img2: require('../../assets/female body parts/arm1.png')
    },
    {
        id: 13,
        name: 'Legs',
        img1: require('../../assets/female body parts/legs.png'),
        img2: require('../../assets/female body parts/legs1.png')
    },
    {
        id: 14,
        name: 'Foot',
        img1: require('../../assets/female body parts/foot.png'),
        img2: require('../../assets/female body parts/foot1.png'),
    },
    {
        id: 15,
        name: 'Eyebrow',
        img1: require('../../assets/female body parts/eyebrow.png'),
        img2: require('../../assets/female body parts/eyebrow1.png'),
    },
    {
        id: 16,
        name: 'Thumb',
        img1: require('../../assets/female body parts/thumb.png'),
        img2: require('../../assets/female body parts/thumb1.png')
    },
    {
        id: 17,
        name: 'Knees',
        img1: require('../../assets/female body parts/knees.png'),
        img2: require('../../assets/female body parts/knees1.png')
    },
    {
        id: 18,
        name: 'Finger',
        img1: require('../../assets/female body parts/finger.png'),
        img2: require('../../assets/female body parts/finger1.png')
    },
    {
        id: 19,
        name: 'Neck',
        img1: require('../../assets/female body parts/neck.png'),
        img2: require('../../assets/female body parts/neck1.png')
    },
    {
        id: 20,
        name: 'Stomach',
        img1: require('../../assets/female body parts/stomach.png'),
        img2: require('../../assets/female body parts/stomach1.png')
    },
    {
        id: 21,
        name: 'Elbow',
        img1: require('../../assets/female body parts/elbow.png'),
        img2: require('../../assets/female body parts/elbow1.png')
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
