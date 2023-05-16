const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];

for (let i = 0; i < storeItems.length; i++) {
    if (storeItems[i].inStock === true) {
       $('#contentContainer').append("<div class = 'inStock'>" + ("<span class = 'price'>" + "$" + storeItems[i].price + "</span>") + 
       ("<span class = 'name'>" + storeItems[i].name + "</span>") + ("<span class = 'details'>" + storeItems[i].details + "</span>") + "</div>");
    }

    else if (storeItems[i].inStock === false) {
        $('#contentContainer').append("<div class = 'notInStock'>" + storeItems[i].name + ": $" + storeItems[i].price + storeItems[i].details + "</div>");
     }
}

$('#clickMe').on("click", function() {
    $('h1').toggleClass('darkModeBody');
    $('body').toggleClass('darkModeBody');
    $('.inStock').toggleClass('darkModeDivs');
});