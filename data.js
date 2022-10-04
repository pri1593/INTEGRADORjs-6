
const productsData = [
    {
      id: 1,
      name: 'Sillon gris',
      price: 5600,
      description: 'Individual',
      category: 'sillones',
      cardImg: 'img/sillon individual1.jpg',
    },
    {
      id: 2,
      name: "Sillon Verde",
      price: 11200,
      description: 'Individual',
      category: 'sillones',
      cardImg: 'img/sillon individual2.jpg',
    },
    {
      id: 3,
      name: 'Sillon Vintage',
      price: 18900,
      description: 'Retro',
      category: 'sillones',
      cardImg: 'img/sillon individual3.jpg',   
    },
  
    {
      id: 4,
      name: 'Sofa Verde',
      price: 34500,
      description: 'Familiar',
      category: 'sofa',
      cardImg: 'img/sofa1.jpg',
    },
    {
      id: 5,
      name: 'Sofa Gris',
      price: 30678,
      description: 'Familiar',
      category: 'sofa',
      cardImg: 'img/sofa2.jpg',
    },
    {
      id: 6,
      name: 'Desk Pequeño',
      price: 16400,
      description: 'Tamaño chico',
      category: 'desk',
      cardImg: 'img/desk1.jpg',
    },
    {
      id: 7,
      name: 'Desk Moderno',
      price: 21789,
      description:'Madera y aluminio',
      category: 'desk',
      cardImg: 'img/desk2.jpg',
    },
    {
      id: 8,
      name: 'Desk Retro',
      price: 14567,
      description: 'Vintage',
      category: 'desk',
      cardImg: 'img/desk3.jpg',
    },
    {
      id: 9,
      name: 'Almohadones x2',
      price: 4500,
      description: "Suave,colores claros",
      category: 'almohadones',
      cardImg: 'img/al1.jpg',
    },
    {
      id: 10,
      name: 'Almohadon',
      price: 5600,
      description: 'Colores frios',
      category: 'almohadones',
      cardImg: 'img/al2.jpg',
    },
    {
      id: 11,
      name: 'Almohadon Oriental',
      price: 4500,
      description: 'De tipo Indú',
      category: 'almohadones',
      cardImg: 'img/al3.jpg',
    },
    {
      id: 12,
      name: 'Almohadones x3',
      price: 5600,
      description: 'Colores cálidos',
      category: 'almohadones',
        cardImg: 'img/al4.jpg',
    },
    {
      id: 13,
      name: 'Almohadon Cactus',
      price: 2800,
      description: 'Verde',
      category: 'almohadones',
      cardImg: 'img/al5.jpg',
    },
    {
      id: 14,
      name: 'Banqueta',
      price: 8600,
      description: 'Liviana, segura',
      category: 'sillas',
      cardImg: 'img/silla1.jpg',
    },
    {
      id: 15,
      name: 'Silla Retro',
      price: 7500,
      description: 'Vintage años 80',
      category: 'sillas',
      cardImg: 'img/silla2.jpg',
    },
    {
      id: 16,
      name: 'Orangechair',
      price: 9800,
      description: 'Minimalista',
      category: 'sillas',
      cardImg: 'img/silla3.jpg',
    }
  ]
  
    function products(size){
      let chunk = [];
      for (let i = 0; i < productsData.length; i += size)
        chunk.push(productsData.slice(i, i + size));
      return chunk
    };
  
    const allProducts = {
      productList: products(6),
      next: 1,
      limit: products(6).length,
    }
  