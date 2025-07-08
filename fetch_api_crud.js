function cliente_novo(){
    const nome = document.getElementById("cliente").value;
    const email = document.getElementById("cliente_email").value;
    if (nome === "" && email === ""){
        console.log("Error")
        return -1
    }
    console.log(nome,email);
    fetch("https://crudcrud.com/api/{token-crud-crud}/clients", 
        {method: "POST", headers: {'Content-Type':'application/json'},body: JSON.stringify({name: `${nome}`, email: `${email}`})
        }).then(response => {return response})
        .then(data => console.log(data))
        .catch(err => console.log(err))

};
function remover(id_cliente){
    const objeto_a_excluir = document.getElementById(id_cliente);
    console.log(document.getElementById(id_cliente));
    fetch(`https://crudcrud.com/api/{token-crud-crud}/clientes/${id_cliente}`, 
        {method: "DELETE", headers: {'Content-Type':'application/json'},body: JSON.stringify({name: `${nome}`, email: `${email}`})
        }).then(response => {return response})
        .then(data => console.log(data))
        .catch(err => console.log(err))
};

function listar_clientes(){
    fetch("https://crudcrud.com/api/{token-crud-crud}/clientes", {
        method: "GET",
        headers: {'Content-Type':'application/json'}
    }).then(
        (lista) => {return lista.json().then((data)=>{console.log(data);return data;})}
        ).then(
        data => {
            
            for(a=0;a<data.length;++a){
            document.getElementById("tabela_cliente").innerHTML =  `<tr id="${data[a]['_id']}"><td>nome: ${data[a]['name']}</td><td>email: ${data[a]['email']}</td><button name="clientes" onclick="remover(${data[a]['_id']})">X</button></tr>`
        }
    }
        ).catch(
            error => console.log(error)
        )
    
    //console.log(requeijao)
    
    // document.getElementById("tabela").innerHTML;
};

document.addEventListener('click', function(event) {
        const clickedElement = event.target;
        if (clickedElement.name === "clientes"){
            console.log("excluido cliente")
            console.log(clickedElement._id)
        }
        //console.log("The clicked element is:", clickedElement);
});