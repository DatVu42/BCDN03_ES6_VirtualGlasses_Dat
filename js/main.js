let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];


let hienThiKinh = () => {
    let content = "";
    dataGlasses.map((glass) => {
        content += `
            <div class="vglasses__items col-4">
                <img onclick="deoKinh('${glass.id}')" src="${glass.src}">
            </div>
        `
    });
    return content;
}

document.getElementById("vglassesList").innerHTML = hienThiKinh();

let deoKinh = (id) => {
    let kinh = "";
    let thongTinKinh = "";
    dataGlasses.map((glass) => {
        if (glass.id == id) {
            kinh += `<div id="selectedGlass">
                <img src="${glass.virtualImg}">
            </div>`;
            thongTinKinh += `
                <div class="vglasses__title">${glass.name} - ${glass.brand} (${glass.color})</div>
                <div class="vglasses__price">$${glass.price}</div> <span style="color:green;">Stocking</span>
                <div>${glass.description}</div>
            `
        }
    });
    document.getElementById("avatar").innerHTML = kinh;
    document.getElementById("glassesInfo").innerHTML = thongTinKinh;
}

window.deoKinh = deoKinh;

let removeGlasses = (status) => {
    if ((status == false) && (document.getElementById("selectedGlass") != null)) {
        document.getElementById("selectedGlass").classList.add("display__none");
    } 
    if ((status) && (document.getElementById("selectedGlass") != null)) {
        document.getElementById("selectedGlass").classList.remove("display__none");
    }
}

window.removeGlasses = removeGlasses;