const shoes = [
    { name: 'Nike', price: 200 },
    { name: 'Adidas', price: 120 },
    { name: 'Puma', price: 100 },
    { name: 'Reebok', price: 80 },
    { name: 'Vans', price: 60 },
    { name: 'Converse', price: 40 },
    { name: 'Crocs', price: 1 }
]

const shoesList = document.getElementById('shoes-list')

shoes.forEach(shoe => {
    const li = document.createElement('li')
    li.textContent = `${shoe.name} - $${shoe.price}`
    li.className = "classe1 classe2"
    shoesList.appendChild(li)
})