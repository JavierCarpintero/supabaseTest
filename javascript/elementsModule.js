let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = './style/style_01.css';

function edit(){
    window.alert("hola");
}

function addBasic(text) {
    // create a new div element
    const newDiv = document.createElement("div"); 

    // and give it some content
    const newContent = document.createTextNode(text);

    // add the text node to the newly created div
    newDiv.appendChild(newContent); 
    newDiv.appendChild(link); 
    
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("basic");
    document.body.insertBefore(newDiv, currentDiv);
}

function addRow(row) {
    const button = document.createElement("button");
    button.appendChild(document.createTextNode("edit product")); 
    button.appendChild(link); 
    button.classList.add("editButton");
    button.onclick = edit;
    const newDiv = document.createElement("div"); 
    newDiv.appendChild(link); 
    newDiv.classList.add("row")

    for(let i=0; i<row.length; i++){
        const newColumn = document.createElement("div");
        const newContent = document.createTextNode(row[i]);
        newColumn.appendChild(link);
        newColumn.classList.add("column")
        newColumn.appendChild(newContent);
        newDiv.appendChild(newColumn);
    }

    newDiv.appendChild(button);
    const currentDiv = document.getElementById("final");
    document.body.insertBefore(newDiv, currentDiv);
}

function addStoreRow(row, urlPosition) {
    const a = document.createElement("a");
    a.appendChild(link);
    a.classList.add("linkButton");
    const img = document.createElement("img");
    img.setAttribute('src', 'style\\assets\\openWeb.svg')
    img.appendChild(link); 
    img.classList.add("svgButton");
    const newDiv = document.createElement("div"); 
    newDiv.appendChild(link); 
    newDiv.classList.add("row")

    for(let i=0; i<row.length; i++){
        const newColumn = document.createElement("div");
        const newContent = document.createTextNode(row[i]);
        newColumn.appendChild(link);
        newColumn.classList.add("column")
        newColumn.appendChild(newContent);
        newDiv.appendChild(newColumn);

        a.setAttribute('href', row[urlPosition]);
    }

    a.appendChild(img);
    newDiv.appendChild(a);
    const currentDiv = document.getElementById("final");
    document.body.insertBefore(newDiv, currentDiv);
}

function addBrandRow(row, urlPosition) {
    const a = document.createElement("a");
    a.appendChild(link);
    a.classList.add("linkButton");
    const img = document.createElement("img");
    img.setAttribute('src', 'style\\assets\\openWeb.svg')
    img.appendChild(link); 
    img.classList.add("svgButton");
    const newDiv = document.createElement("div"); 
    newDiv.appendChild(link); 
    newDiv.classList.add("row")

    for(let i=0; i<row.length; i++){
        const newColumn = document.createElement("div");
        const newContent = document.createTextNode(row[i]);
        newColumn.appendChild(link);
        newColumn.classList.add("column")
        newColumn.appendChild(newContent);
        newDiv.appendChild(newColumn);

        a.setAttribute('href', row[urlPosition]);
    }

    a.appendChild(img);
    newDiv.appendChild(a);
    const currentDiv = document.getElementById("final");
    document.body.insertBefore(newDiv, currentDiv);
}

export { addBasic, addRow, addStoreRow, addBrandRow }