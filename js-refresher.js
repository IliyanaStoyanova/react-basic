const destinations = [
    { id: 1, title: 'Egypt Safari', price: 1200, tags: ['desert', 'adventure'], isAvailable: true },
    { id: 2, title: 'Bali Beach', price: 800, tags: ['beach', 'relax'], isAvailable: true },
    { id: 3, title: 'Swiss Alps', price: 1500, tags: ['mountain', 'ski'], isAvailable: false }
];

// Object Destructuring
function printFirstLocation(item) {
    console.log(item.title)
}

printFirstLocation(destinations[0]);

// Filtering Data (Arrow Functions & .filter())
const affordableDestinations = destinations.filter(dest => dest.price < 1000);
console.log(affordableDestinations);

//Immutability (Spread Operator ...)
const addDiscount = (destination) => {
    return {
        ...destination,
        discountPrice: destination.price * 0.8
    };
}
const discountedBali = addDiscount(destinations[1]);
console.log(`\n--- Spread Operator (Original vs Discounted) ---`);
console.log('Original Bali Price:', destinations[1].price);
console.log('Discounted Bali Price:', discountedBali.discountPrice);

// Transforming Data (.map())
const titleOnly = destinations.map(dist => dist.title);
console.log(titleOnly)

// Updating Collections
const newDestination = { id: 4, title: 'Paris', price: 900, tags: ['city', 'romantic'], isAvailable: true }
const updateDestinations = [...destinations, newDestination];

console.log('Updated Destinations List -----')
console.log(updateDestinations)

// Hotel Search (using .find())
const hotels = [
    { id: 1, name: 'Marriott', city: 'San Francisco' },
    { id: 2, name: 'Helton', city: 'New York' },
    { id: 3, name: 'Sheraton', city: 'Paris' }
];

const findHotel = hotels.find(item => item.name === 'Helton');
console.log(findHotel);

// Cancel Activity (using .filter())
const activities = [
    {
        id: 'a1', title: 'Scuba Diving',
    },
    {
        id: 'a2', title: 'Desert Safari',
    },
    {
        id: 'a3', title: 'City Tour',
    }
];
const updateActivity = activities.filter(item => item.id !== 'a2');
console.log(updateActivity);

// Destructuring & Template Literals
const user = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    location: {
        city: 'Sofia',
        country: 'Bulgaria'
    },
    memberLevel: 'Gold'
};

const { firstName, location: { city } } = user;
const message = `Welcome back, ${firstName}! How is the weather in ${city}?`;
console.log(message);

// Total Booking Price (using .reduce())
const costs = [500, 1200, 150, 45];
const total = costs.reduce((count, price) => {
    return count + price;
}, 0);
console.log(total);

// Update Booking Status (using .map() & Spread Operator) 
const booking = [
    { id: 1, status: 'pending' },
    { id: 2, status: 'pending' },
];
const updateBooking = booking.map(b => {
    if (b.id === 1) {
        return { ...b, status: 'processed' };
    }
    return b;
});

console.log(updateBooking[0].status);
console.log(booking[0].status);

//Total Passengers Calculation (using .reduce())
const groupSize = [4, 2, 5, 1, 3];
const all = groupSize.reduce((count, item) => {
    return count + item
}, 0);
console.log(all);

//Total Ticket Price from Objects (using .reduce())
const tickets = [
    { type: 'Flight', price: 450 },
    { type: 'Train', price: 80 },
    { type: 'Bus', price: 40 }
];
const totalSum = tickets.reduce((amount, item) => {
    return amount + item.price;
}, 0);
console.log(totalSum);

//Toggle Favorite Status (using .map() & Spread Operator)
const destinationsList = [
    { id: 101, name: 'Paris', isFavorite: false },
    { id: 102, name: 'London', isFavorite: false },
    { id: 103, name: 'Rome', isFavorite: false }
];
const updateFavorites = destinationsList.map(item => {
    if (item.id === 102) {
        return {
            ...item,
            isFavorite: true
        };
    }
    return item;
});
console.log(updateFavorites);

//Global Price Update (using .map() & Spread Operator)
const tours = [
    { id: 1, title: 'Wine Tour', price: 200 },
    { id: 2, title: 'City Walk', price: 50 },
];
const new_tours = tours.map(item => {
    return {
        ...item,
        price: item.price + 50
    };
});
console.log(new_tours);

// Rename Hotel Record (using .map() & Spread Operator) 
const hotelsList = [
    { id: 'h-1', name: 'Old Hotel' },
    { id: 'h-2', name: 'Seaside Resort' }
];
const new_name = hotelsList.map(item => {
    if (item.id === 'h-1') {
        return {
            ...item,
            name: item.name = 'Grand Palace'
        }
    }
    return item;
});

console.log(new_name);