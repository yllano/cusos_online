let cursos=[
    {
        id:1,
        nombre:"Ingles para Todos",
        descripcion:"En este curso aprenderas ingles",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9y47htjOSJ0HEDhCb7OpND3PhLX8XNxOxA&s",
        categoria:"ingles"

    },
    {
        id:1,
        nombre:"Introduccion a la Programacion",
        descripcion:"En este curso aprenderas nociones basicas de programacion",
        imagen:"https://concepto.de/wp-content/uploads/2020/08/Programacion-informatica-scaled-e1724960033513.jpg",
        categoria:"Informatica"

    },
    {
        id:1,
        nombre:"el arte en el romanticismo",
        descripcion:"En este curso hablaremos sobre el arte en el romaticismo",
        imagen:"https://humanidades.com/wp-content/uploads/2018/11/arte-romanticismo-e1543065489588.jpg",
        categoria:"Arte"

    },
    {
        id:1,
        nombre:"literatura clasica griega",
        descripcion:"En este curso conoceras a los tragicos y comicos griegos",
        imagen:"https://cdn.slidesharecdn.com/ss_thumbnails/la-literatura-griega-170421044008-thumbnail.jpg?width=640&height=640&fit=bounds",
        categoria:"Literatura"

    },
    
]

let inscritos=0

function init(){
    MostrarCard(cursos);
}
function MostrarCard(lista) {
  const contenedor = document.getElementById("contenedor-tarjetas");
  contenedor.innerHTML = "";

  lista.forEach(cursos => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("col-md-3", "mb-4");

    tarjeta.innerHTML = `
      <div class="card h-100">
        <img src="${cursos.imagen}" class="card-img-top" alt="${cursos.nombre}">
        <div class="card-body">
          <h2 class="card-title">${cursos.nombre}</h2>
          <h4>Fecha: ${cursos.descripcion}</h4>
          <button class="btn btn-success" onclick="inscribir()">Inscribir</button>
        </div>
      </div>
    `;

    contenedor.appendChild(tarjeta);
  });
}


function Filtrar() { 
    const seleccion = document.getElementById("filtro").value;

    const cursosFiltrados = cursos.filter(curso => curso.categoria === seleccion);

    MostrarCard(cursosFiltrados);
}
function inscribir (){
    inscritos++;
    alert("el curso ha sido inscrito");
    document.getElementById("contador").innerText = inscritos;
}
