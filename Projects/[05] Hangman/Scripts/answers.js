const hangmanWords = [
	{ answer: 'Elephant', category: 'Animal' },
	{ answer: 'Eiffel Tower', category: 'Landmark' },
	{ answer: 'Pizza', category: 'Food' },
	{ answer: 'JavaScript', category: 'Programming Language' },
	{ answer: 'Guitar', category: 'Musical Instrument' },
	{ answer: 'Amazon River', category: 'Geography' },
	{ answer: 'Monet', category: 'Artist' },
	{ answer: 'Oxygen', category: 'Element' },
	{ answer: 'Bicycle', category: 'Transportation' },
	{ answer: 'Kilimanjaro', category: 'Mountain' },
	{ answer: 'Sunflower', category: 'Plant' },
	{ answer: 'Sudoku', category: 'Game' },
	{ answer: 'Rome', category: 'City' },
	{ answer: 'Gandhi', category: 'Historical Figure' },
	{ answer: 'Python', category: 'Programming Language' },
	{ answer: 'Chess', category: 'Sport' },
	{ answer: 'Cappuccino', category: 'Beverage' },
	{ answer: 'Van Gogh', category: 'Artist' },
	{ answer: 'Saxophone', category: 'Musical Instrument' },
	{ answer: 'Taj Mahal', category: 'Landmark' },
	{ answer: 'Mango', category: 'Fruit' },
	{ answer: 'Tesla', category: 'Inventor' },
	{ answer: 'Everest', category: 'Mountain' },
	{ answer: 'Python', category: 'Animal' },
	{ answer: 'Volleyball', category: 'Sport' },
	{ answer: 'Orion', category: 'Constellation' },
	{ answer: 'Laptop', category: 'Electronics' },
	{ answer: 'Haiku', category: 'Poetry' },
	{ answer: 'Dolphin', category: 'Animal' },
	{ answer: 'Baguette', category: 'Food' },
	{ answer: 'Violin', category: 'Musical Instrument' },
	{ answer: 'Berlin', category: 'City' },
	{ answer: 'Mona Lisa', category: 'Art' },
	{ answer: 'Jazz', category: 'Music Genre' },
	{ answer: 'Hydrogen', category: 'Element' },
	{ answer: 'Koala', category: 'Animal' },
	{ answer: 'Pyramids', category: 'Landmark' },
	{ answer: 'Origami', category: 'Art' },
	{ answer: "Rubik's Cube", category: 'Puzzle' },
	{ answer: 'Sahara', category: 'Desert' },
	{ answer: 'Lavender', category: 'Plant' },
	{ answer: 'Thunderstorm', category: 'Weather' },
	{ answer: 'Vancouver', category: 'City' },
	{ answer: 'Tiramisu', category: 'Dessert' },
	{ answer: 'Marathon', category: 'Event' },
	{ answer: 'Banjo', category: 'Musical Instrument' },
	{ answer: 'Volcano', category: 'Geographical Feature' },
	{ answer: 'Flamingo', category: 'Animal' },
	{ answer: 'Carnival', category: 'Event' },
	{ answer: 'Harmonica', category: 'Musical Instrument' },
	{ answer: 'Penguin', category: 'Animal' },
	{ answer: 'Glacier', category: 'Natural Phenomenon' },
	{ answer: 'Karate', category: 'Martial Art' },
	{ answer: 'Daffodil', category: 'Plant' },
	{ answer: 'Sphinx', category: 'Monument' },
	{ answer: 'Kangaroo', category: 'Animal' },
	{ answer: 'Bonsai', category: 'Plant' },
	{ answer: 'Accordion', category: 'Musical Instrument' },
	{ answer: 'Himalayas', category: 'Mountain Range' },
	{ answer: 'Salsa', category: 'Dance' },
	{ answer: 'Avocado', category: 'Food' },
	{ answer: 'Buddhism', category: 'Religion' },
	{ answer: 'Cello', category: 'Musical Instrument' },
	{ answer: 'Dublin', category: 'City' },
	{ answer: 'Eclipse', category: 'Astronomy' },
	{ answer: 'Falcon', category: 'Animal' },
	{ answer: 'Geyser', category: 'Natural Phenomenon' },
	{ answer: 'Hamburger', category: 'Food' },
	{ answer: 'Iguana', category: 'Animal' },
	{ answer: 'Judo', category: 'Martial Art' },
	{ answer: 'Kite', category: 'Toy' },
	{ answer: 'Lilac', category: 'Plant' },
	{ answer: 'Mosaic', category: 'Art' },
	{ answer: 'Nile', category: 'River' },
	{ answer: 'Oregano', category: 'Herb' },
	{ answer: 'Panda', category: 'Animal' },
	{ answer: 'Quartz', category: 'Mineral' },
	{ answer: 'Ravioli', category: 'Food' },
	{ answer: 'Sequoia', category: 'Tree' },
	{ answer: 'Tango', category: 'Dance' },
	{ answer: 'Umbrella', category: 'Object' },
	{ answer: 'Viola', category: 'Musical Instrument' },
	{ answer: 'Wombat', category: 'Animal' },
	{ answer: 'Xylophone', category: 'Musical Instrument' },
	{ answer: 'Yogurt', category: 'Food' },
	{ answer: 'Zucchini', category: 'Vegetable' },
	{ answer: 'Archery', category: 'Sport' },
	{ answer: 'Blizzard', category: 'Weather' },
	{ answer: 'Canyon', category: 'Geographical Feature' },
	{ answer: 'Dragonfly', category: 'Animal' },
	{ answer: 'Espresso', category: 'Beverage' },
	{ answer: 'Flute', category: 'Musical Instrument' },
	{ answer: 'Giraffe', category: 'Animal' },
	{ answer: 'Horoscope', category: 'Astrology' },
	{ answer: 'Iceberg', category: 'Natural Phenomenon' },
	{ answer: 'Jasmine', category: 'Plant' },
	{ answer: 'Kaleidoscope', category: 'Toy' },
	{ answer: 'Lemur', category: 'Animal' },
	{ answer: 'Magnet', category: 'Object' },
	{ answer: 'Nebula', category: 'Astronomy' },
	{ answer: 'Oboe', category: 'Musical Instrument' },
	{ answer: 'Puzzle', category: 'Game' },
	{ answer: 'Quokka', category: 'Animal' },
	{ answer: 'Racquet', category: 'Sport Equipment' },
	{ answer: 'Sculpture', category: 'Art' },
	{ answer: 'Tulip', category: 'Plant' },
	{ answer: 'Ukulele', category: 'Musical Instrument' },
	{ answer: 'Venus', category: 'Planet' },
	{ answer: 'Walrus', category: 'Animal' },
	{ answer: 'Xray', category: 'Science' },
	{ answer: 'Yacht', category: 'Transportation' },
	{ answer: 'Zebra', category: 'Animal' },
];

export default hangmanWords;
