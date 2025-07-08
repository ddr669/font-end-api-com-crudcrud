function cliente_novo(){
    const nome = document.getElementById("cliente").value;
    const email = document.getElementById("cliente_email").value;
    if (nome === "" && email === ""){
        console.log("Error")
        return -1
    }
    console.log(nome,email);
    fetch("https://crudcrud.com/api/c80eec3a09f040e5bea3f0373b9daca1/clients", 
        {method: "POST", headers: {'Content-Type':'application/json'},body: JSON.stringify({name: `${nome}`, email: `${email}`})
        }).then(response => {return response})
        .then(data => console.log(data))
        .catch(err => console.log(err))

};
function remover(id_cliente){
    
    console.log(id_cliente);
    const url_ = "https://crudcrud.com/api/c80eec3a09f040e5bea3f0373b9daca1/clients/"+`${id_cliente}`
    fetch(url_, 
        {method: "DELETE"})
        .then(response => {return response})
        .then(data => console.log(data))
        .catch(err => console.log(err))
};

function listar_clientes(){
    
    fetch("https://crudcrud.com/api/c80eec3a09f040e5bea3f0373b9daca1/clients", {
        method: "GET",
        headers: {'Content-Type':'application/json'}
    }).then(
        (lista) => {return lista.json().then((data)=>{return data;})}
        ).then(
        data => {
            
            for(a=0;a<data.length;++a){
                console.log(data[a])
                const new_text = `<tr><td>nome: ${data[a]['name']}</td><td>email: ${data[a]['email']}</td><button name="clientes" onclick="remover('${data[a]['_id']}')">X</button></tr>`
                const elemento = document.getElementById("tabela_cliente")
                elemento.insertAdjacentHTML('beforeend', new_text)
        }
    }
        ).catch(
            error => console.log(error)
        )
    
    //console.log(requeijao)
    
    // document.getElementById("tabela").innerHTML;
};

//document.addEventListener('click', function(event) {
//        const clickedElement = event.target;
//        if (clickedElement.name === "clientes"){
//            console.log("excluido cliente")
           
//        }
        //console.log("The clicked element is:", clickedElement);
//});