
    let productosBD = [
        { foto: 'img/imagen1.jpg', nombre: "", precio: '$150.000', descripcion: "" },
        { foto: 'img/imagen2.jpg', nombre: "", precio: '$50.000' },
        { foto: 'img/imagen3.jpg', nombre: "", precio: '$25.000' },
        { foto: 'img/imagen4.jpg', nombre: "", precio: '$335.500' },
        { foto: 'img/imagen5.jpg', nombre: "", precio: '$95.000' },
        { foto: 'img/imagen6.jpg', nombre: "", precio: '$250.000' },
        { foto: 'img/imagen7.jpg', nombre: "", precio: '$1.500' },
        { foto: 'img/imagen8.jpg', nombre: "", precio: '$350.000' },
        { foto: 'img/imagen9.jpg', nombre: "", precio: '$187.000' },
        { foto: 'img/imagen10.jpg', nombre: "", precio: '$170.000' },
        { foto: 'img/imagen11.jpg', nombre: "", precio: '$50.000' },
        { foto: 'img/imagen12.jpg', nombre: "", precio: '$450.000' },
        { foto: 'img/imagen13.jpg', nombre: "", precio: '$130.000' },
        { foto: 'img/imagen14.jpg', nombre: "", precio: '$50.000' },
        { foto: 'img/imagen15.jpg', nombre: "", precio: '$250.000' },
        { foto: 'img/imagen16.jpg', nombre: "", precio: '$40.000' },
        { foto: 'img/imagen17.jpg', nombre: "", precio: '$780.000' },        
        { foto: 'img/imagen18.jpg', nombre: "", precio: '$20.000' },
        { foto: 'img/imagen19.jpg', nombre: "", precio: '$30.000' },
        { foto: 'img/imagen20.jpg', nombre: "", precio: '$50.000' }
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
        let titulo=document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre



        //3.padres e hijos
        tarjeta.appendChild(foto)
        tarjeta.appendChild(titulo)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
    


