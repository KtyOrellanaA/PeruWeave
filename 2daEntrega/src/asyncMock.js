const products = [
    // Categoría ROPA
    {
        id: "RCA1",
        name: "Casaca 1",
        price: 200,
        category: "ropa",
        img: "../public/Ropa/Casaca/01.jpeg",
        stock: 5,
        description: "Casacas tejidas con diseños andinos únicos.",
    },
    {
        id: "RCA2",
        name: "Casaca 2",
        price: 200,
        category: "ropa",
        img: "../public/Ropa/Casaca/02.jpeg",
        stock: 5,
        description: "Casacas artesanales que combinan estilo y tradición.",
    },
    {
        id: "RCA3",
        name: "Casaca 3",
        price: 200,
        category: "ropa",
        img: "../public/Ropa/Casaca/03.jpeg",
        stock: 5,
        description: "Casacas tejidas con diseños andinos únicos.",
    },
    {
        id: "RCA4",
        name: "Casaca 4",
        price: 200,
        category: "ropa",
        img: "../public/Ropa/Casaca/04.jpeg",
        stock: 5,
        description: "Casacas artesanales que combinan estilo y tradición.",
    },
    //
    {
        id: "RCH1",
        name: "Chompa 1",
        price: 200,
        category: "ropa",
        img: "../public/Ropa/Chompa/01.jpeg",
        stock: 5,
        description: "Chompas cálidas con patrones peruanos.",
    },
    {
        id: "RCH2",
        name: "Chompa 2",
        price: 200,
        category: "ropa",
        img: "../public/Ropa/Chompa/02.jpeg",
        stock: 5,
        description: "Chompas hechas a mano con lana de alta calidad.",
    },
    {
        id: "RCH3",
        name: "Chompa 3",
        price: 200,
        category: "ropa",
        img: "../public/Ropa/Chompa/03.jpeg",
        stock: 5,
        description: "Chompas cálidas con patrones peruanos.",
    },
    {
        id: "RCH4",
        name: "Chompa 4",
        price: 200,
        category: "ropa",
        img: "../public/Ropa/Chompa/04.jpeg",
        stock: 5,
        description: "Chompas hechas a mano con lana de alta calidad.",
    },
    //
    {
        id: "RPO1",
        name: "Poncho 1",
        price: 200,
        category: "ropa",
        img: "../public/Ropa/Poncho/01.jpeg",
        stock: 5,
        description: "Ponchos auténticos con detalles culturales peruanos.",
    },
    {
        id: "RPO2",
        name: "Poncho 2",
        price: 200,
        category: "ropa",
        img: "../public/Ropa/Poncho/02.jpeg",
        stock: 5,
        description: "Ponchos de lana con elegantes diseños andinos.",
    },
    {
        id: "RPO3",
        name: "Poncho 3",
        price: 200,
        category: "ropa",
        img: "../public/Ropa/Poncho/03.jpeg",
        stock: 5,
        description: "Ponchos auténticos con detalles culturales peruanos.",
    },
    {
        id: "RPO4",
        name: "Poncho 4",
        price: 200,
        category: "ropa",
        img: "../public/Ropa/Poncho/04.jpeg",
        stock: 5,
        description: "Ponchos de lana con elegantes diseños andinos.",
    },

    // Categoría ACCESORIO
    {
        id: "ABU1",
        name: "Bufanda 1",
        price: 200,
        category: "accesorio",
        img: "../public/Accesorio/Bufanda/01.jpeg",
        stock: 5,
        description: "Bufandas suaves y cálidas con motivos andinos.",
    },
    {
        id: "ABU2",
        name: "Bufanda 2",
        price: 200,
        category: "accesorio",
        img: "../public/Accesorio/Bufanda/02.jpeg",
        stock: 5,
        description: "Bufandas tejidas que reflejan la riqueza cultural peruana.",
    },
    {
        id: "ABU3",
        name: "Bufanda 3",
        price: 200,
        category: "accesorio",
        img: "../public/Accesorio/Bufanda/03.png",
        stock: 5,
        description: "Bufandas suaves y cálidas con motivos andinos.",
    },
    {
        id: "ABU4",
        name: "Bufanda 4",
        price: 200,
        category: "accesorio",
        img: "../public/Accesorio/Bufanda/04.png",
        stock: 5,
        description: "Bufandas tejidas que reflejan la riqueza cultural peruana.",
    },
    //
    {
        id: "AGO1",
        name: "Gorro 1",
        price: 200,
        category: "accesorio",
        img: "../public/Accesorio/Gorro/01.jpeg",
        stock: 5,
        description: "Gorros de lana con patrones tradicionales.",
    },
    {
        id: "AGO2",
        name: "Gorro 2",
        price: 200,
        category: "accesorio",
        img: "../public/Accesorio/Gorro/02.jpeg",
        stock: 5,
        description: "Gorros hechos a mano, perfectos para el innvierno.",
    },
    {
        id: "AGO3",
        name: "Gorro 3",
        price: 200,
        category: "accesorio",
        img: "../public/Accesorio/Gorro/03.jpeg",
        stock: 5,
        description: "Gorros de lana con patrones tradicionales.",
    },
    {
        id: "AGO4",
        name: "Gorro 4",
        price: 200,
        category: "accesorio",
        img: "../public/Accesorio/Gorro/04.jpeg",
        stock: 5,
        description: "Gorros hechos a mano, perfectos para el innvierno.",
    },
    //
    {
        id: "AGN1",
        name: "Guante 1",
        price: 200,
        category: "accesorio",
        img: "../public/Accesorio/Guante/01.jpeg",
        stock: 5,
        description: "Guantes artesanales con diseños únicos.",
    },
    {
        id: "AGN2",
        name: "Guante 2",
        price: 200,
        category: "accesorio",
        img: "../public/Accesorio/Guante/02.jpeg",
        stock: 5,
        description: "Guantes cálidos inspirados en la tradición textil andina.",
    },
    {
        id: "AGN3",
        name: "Guante 3",
        price: 200,
        category: "accesorio",
        img: "../public/Accesorio/Guante/03.jpeg",
        stock: 5,
        description: "Guantes artesanales con diseños únicos.",
    },
    {
        id: "AGN4",
        name: "Guante 4",
        price: 200,
        category: "accesorio",
        img: "../public/Accesorio/Guante/04.jpeg",
        stock: 5,
        description: "Guantes cálidos inspirados en la tradición textil andina.",
    },

    // Categoría HOGAR
    {
        id: "HCO1",
        name: "Cojín 1",
        price: 200,
        category: "hogar",
        img: "../public/Hogar/Cojin/01.jpeg",
        stock: 5,
        description: "Cojines decorativos con tejidos andinos.",
    },
    {
        id: "HCO2",
        name: "Cojín 2",
        price: 200,
        category: "hogar",
        img: "../public/Hogar/Cojin/02.jpeg",
        stock: 5,
        description: "Cojines artesanales que añaden un toque cultural a tu hogar.",
    },
    {
        id: "HIN1",
        name: "Individual 1",
        price: 200,
        category: "hogar",
        img: "../public/Hogar/Individual/01.png",
        stock: 5,
        description: "Individuales tejidos con motivos peruanos.",
    },
    {
        id: "HIN2",
        name: "Individual 2",
        price: 200,
        category: "hogar",
        img: "../public/Hogar/Individual/02.jpeg",
        stock: 5,
        description: "Individuales únicos para embellecer tu mesa.",
    },
    {
        id: "HMA1",
        name: "Manta 1",
        price: 200,
        category: "hogar",
        img: "../public/Hogar/Manta/01.jpeg",
        stock: 5,
        description: "Mantas cálidas con diseños andinos.",
    },
    {
        id: "HMA2",
        name: "Manta 2",
        price: 200,
        category: "hogar",
        img: "../public/Hogar/Manta/02.jpeg",
        stock: 5,
        description: "Mantas de lana con patrones peruanos.",
    },

    // Categoría BOLSO
    {
        id: "BBO1",
        name: "Bolso 1",
        price: 200,
        category: "bolso",
        img: "../public/Bolso/Bolso/01.png",
        stock: 5,
        description: "Bolsos artesanales con detalles andinos.",
    },
    {
        id: "BBO2",
        name: "Bolso 2",
        price: 200,
        category: "bolso",
        img: "../public/Bolso/Bolso/02.png",
        stock: 5,
        description: "Bolsos de tela con elegantes motivos culturales.",
    },
    {
        id: "BBO3",
        name: "Bolso 3",
        price: 200,
        category: "bolso",
        img: "../public/Bolso/Bolso/03.png",
        stock: 5,
        description: "Bolso elegante con motivos culturales.",
    },
    {
        id: "BMO1",
        name: "Mochila 1",
        price: 200,
        category: "bolso",
        img: "../public/Bolso/Mochila/01.png",
        stock: 5,
        description: "Mochilas resistentes con tejidos tradicionales.",
    },
    {
        id: "BMO2",
        name: "Mochila 2",
        price: 200,
        category: "bolso",
        img: "../public/Bolso/Mochila/02.png",
        stock: 5,
        description: "Mochilas prácticas y llenas de historia.",
    },
    {
        id: "BMO3",
        name: "Mochila 3",
        price: 200,
        category: "bolso",
        img: "../public/Bolso/Mochila/03.png",
        stock: 5,
        description: "Mochilas prácticas y llenas de historia.",
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve (products);
        }, 1000);        
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve (products.filter ((prod) => prod.category === categoryId));
        }, 1000); 
    });
};

export const getProductById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productoId));
        }, 1000);
    });
};