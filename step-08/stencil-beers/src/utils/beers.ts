export interface Beer {
    id: string,
    name: string,
    description: string,
    alcohol: number,
    img: string,
    availability?: string,
    brewery?: string,
    label?: string,
    serving?: string,
    style?: string,
}

export const beerList: Array<Beer> = [
    {
        "alcohol": 6.8,
        "description": "Affligem Blonde, the classic clear blonde abbey ale, with a gentle roundness and 6.8% alcohol. Low on bitterness, it is eminently drinkable.",
        "id": "AffligemBlond",
        "img": "/img/AffligemBlond.jpg",
        "name": "Affligem Blond"
      },
      {
        "alcohol": 6.8,
        "description": "A reddish-brown abbey ale brewed with dark malts. The secondary fermentation gives a fruity aroma and a unique spicy character with a distinctive aftertaste. Secondary fermentation in the bottle.",
        "id": "AffligemDubbel",
        "img": "/img/AffligemDubbel.jpg",
        "name": "Affligem Dubbel"
      },
      {
        "alcohol": 8.5,
        "description": "The king of the abbey beers. It is amber-gold and pours with a deep head and original aroma, delivering a complex, full bodied flavour. Pure enjoyment! Secondary fermentation in the bottle.",
        "id": "AffligemTripel",
        "img": "/img/AffligemTripel.jpg",
        "name": "Affligem Tripel"
      },
];

export interface sortingCriterion {
    name: string,
    label: string,
};

export const sortingCriteria: Array<sortingCriterion> = [
  { name: "name", label: "Alphabetical"},
  { name: "alcohol", label: "Alcohol content" }
];  