
    let productosBD = [
        { foto: './assets/img/imagen1.jpg', nombre: "PKB-BP", precio: '$150.000', descripcion: "Rifle Automatico PKB-BP" },
        { foto: './assets/img/imagen2.jpg', nombre: "12M AUTO", precio: '$50.000' , descripcion: "Escopeta Automatica 12M AUTO"},
        { foto: './assets/img/imagen3.jpg', nombre: "GVT 46-70", precio: '$25.000' , descripcion: "Rifle tactico de accion simple GVT 46-70"},
        { foto: './assets/img/imagen4.jpg', nombre: "DM7", precio: '$335.500' , descripcion: "Rifle tactico DMR DM7"},
        { foto: './assets/img/imagen5.jpg', nombre: "SVK", precio: '$95.000' , descripcion: "Rifle de francotirador SVK"},
        { foto: './assets/img/imagen6.jpg', nombre: "AK-24", precio: '$250.000' , descripcion: "Rifle automatico AK-24"},
        { foto: './assets/img/imagen7.jpg', nombre: "LCMG", precio: '$1.500' , descripcion: "Ametralladora ligera LCMG"},
        { foto: './assets/img/imagen8.jpg', nombre: "Tier1 M5A3", precio: '$350.000' , descripcion: "Rifle de asalto Tier1 M5A3"},
        { foto: './assets/img/imagen9.jpg', nombre: "GVT 46-70 MODIFICADO", precio: '$187.000' , descripcion: "Rifle tactico de accion simple GVT 46-70"},
        { foto: './assets/img/imagen10.jpg', nombre: "PP-29", precio: '$170.000' , descripcion: "Subfusil cortas distancias PP-29"},
        { foto: './assets/img/imagen11.jpg', nombre: "Arnes para rifle", precio: '$50.000' , descripcion: "Arnes para sostener tus Armas"},
        { foto: './assets/img/imagen12.jpg', nombre: "Audifonos GAMERS", precio: '$450.000' , descripcion: "Audifonos gamer tipo Battlefield"},
        { foto: './assets/img/imagen13.jpg', nombre: "Estuche para celular", precio: '$130.000' , descripcion: "Estuche para celular con tematica de battlefield"},
        { foto: './assets/img/imagen14.jpg', nombre: "Camiseta Battlefield", precio: '$50.000' , descripcion: "Camiseta de BATTLEFIELD todas las tallas"},
        { foto: './assets/img/imagen15.jpg', nombre: "Tasa battlefield", precio: '$250.000' , descripcion: "tasa para tomar cafecito mientras juegas"},
        { foto: './assets/img/imagen16.jpg', nombre: "Buzo battlefield", precio: '$40.000' , descripcion: "Buzo de BATTLEFIELD todas las tallas"},
        { foto: './assets/img/imagen17.jpg', nombre: "Camiseta Battlefield", precio: '$780.000' , descripcion: "Camiseta de BATTLEFIELD todas las tallas"},        
        { foto: './assets/img/imagen18.jpg', nombre: "Termo battlefield", precio: '$20.000' , descripcion: "Termo Battlefield para hidratarte durante tus partidas"},
        { foto: './assets/img/imagen19.jpg', nombre: "Video juegos saga battlefield", precio: '$30.000' , descripcion: "VideoJuegos Saga battlefield completa"},
        { foto: './assets/img/imagen20.jpg', nombre: "Teclado GAMER", precio: '$50.000' , descripcion: "Teclado gamer con tematica de battlefield "}
    ]

    //necesito recorrer un arreglo en JS

    //1.Creo una variable para la base sobre la cual voy a pintar
    let fila=document.getElementById("fila")
    productosBD.forEach(function(producto){
        console.log(producto.nombre)
        console.log(producto.precio)
        console.log(producto.foto)

        //2.pintando etiquetas

        //div con la clase col
        let columna=document.createElement("div")
        columna.classList.add("cols")

        //div con las clases card h-100
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        //img con la clase card-img-top
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src=producto.foto

        //h4 con la clase text-center
        let titulo=document.createElement("h2")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre

        let descripcion=document.createElement("h3")
        descripcion.classList.add("text-center")
        descripcion.textContent=producto.descripcion

        let precio=document.createElement("h4")
        precio.classList.add("text-center")
        precio.textContent=producto.precio



        //3.padres e hijos
        tarjeta.appendChild(foto)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(precio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
    


