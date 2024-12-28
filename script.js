  const menuData = [
  { "id": 1, "name": "Cheeseburger", "price": 5.99, "imgSrc": "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "id": 2, "name": "Pizza", "price": 8.99, "imgSrc": "https://images.unsplash.com/photo-1513104890138-7c749659a591?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "id": 3, "name": "Tacos", "price": 3.99, "imgSrc": "https://plus.unsplash.com/premium_photo-1681406994498-e2f24136108c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "id": 4, "name": "Sushi", "price": 11.99, "imgSrc": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "id": 5, "name": "Pasta", "price": 9.99, "imgSrc": "https://plus.unsplash.com/premium_photo-1664472619078-9db415ebef44?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "id": 6, "name": "Fried Chicken", "price": 7.99, "imgSrc": "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "id": 7, "name": "Grilled Cheese Sandwich", "price": 4.99, "imgSrc": "https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "id": 8, "name": "Steak", "price": 15.99, "imgSrc": "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "id": 9, "name": "Caesar Salad", "price": 6.99, "imgSrc": "https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "id": 10, "name": "Fish and Chips", "price": 8.49, "imgSrc": "https://images.unsplash.com/photo-1580217593608-61931cefc821?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    {
    "id": 11,
    "name": "Ramen",
    "price": 9.49,
    "imgSrc": "https://unsplash.com/photos/a-bowl-of-ramen-with-chopsticks-and-a-glass-of-beer-mE6kjov4rTg"
  },
  {
    "id": 12,
    "name": "Burrito",
    "price": 7.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?burrito"
  },
  {
    "id": 13,
    "name": "Pho",
    "price": 8.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?pho"
  },
  {
    "id": 14,
    "name": "Pad Thai",
    "price": 9.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?pad_thai"
  },
  {
    "id": 15,
    "name": "Gyro",
    "price": 6.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?gyro"
  },
  {
    "id": 16,
    "name": "Ice Cream",
    "price": 3.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?ice_cream"
  },
  {
    "id": 17,
    "name": "Smoothie",
    "price": 4.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?smoothie"
  },
  {
    "id": "18",
    "name": "Apple Pie",
    "price": 4.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?apple_pie"
  },
  {
    "id": 19,
    "name": "Chocolate Cake",
    "price": 5.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?chocolate_cake"
  },
  {
    "id": 20,
    "name": "Pancakes",
    "price": 4.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?pancakes"
  },
  {
    "id": 21,
    "name": "Cupcake",
    "price": 2.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?cupcake"
  },
  {
    "id": 22,
    "name": "Crepes",
    "price": 5.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?crepes"
  },
  {
    "id": 23,
    "name": "Club Sandwich",
    "price": 6.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?club_sandwich"
  },
  {
    "id": 24,
    "name": "Falafel",
    "price": 5.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?falafel"
  },
  {
    "id": 25,
    "name": "Curry",
    "price": 9.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?curry"
  }
];
function getMenu() {
  return new Promise((resolve, reject) => {
    let menuDisplay = document.getElementById('menu');
    console.log("Menu items:", menuData); 

    menuData.forEach(item => {
      const menuItem = document.createElement('li');
      menuItem.innerHTML = `
        <img src="${item.imgSrc}" alt="${item.name}" width="100" height="100">
        <strong>${item.name}</strong> - $${item.price.toFixed(2)}
      `;
      menuDisplay.appendChild(menuItem);
    });
    
    resolve(menuData);  
  });
}

function filterMenu() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const filteredItems = menuData.filter(item => item.name.toLowerCase().includes(searchTerm));
  
  const menuDisplay = document.getElementById('menu');
  menuDisplay.innerHTML = '';
  
  filteredItems.forEach(item => {
    const menuItem = document.createElement('li');
    menuItem.innerHTML = `
      <img src="${item.imgSrc}" alt="${item.name}" width="100" height="100">
      <strong>${item.name}</strong> - $${item.price.toFixed(2)}
    `;
    menuDisplay.appendChild(menuItem);
  });
}

function openLogin() {
  alert('Login functionality is not implemented yet.');
}

function openSignup() {
  alert('Signup functionality is not implemented yet.');
}

document.addEventListener('DOMContentLoaded', () => {
  console.log("Page loaded, calling getMenu()"); 
  getMenu(); 
});
