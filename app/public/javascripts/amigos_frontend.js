const btnSearch = document.querySelector(".search");
const inputSearch = document.querySelector(".input-search");
const tabela = document.querySelector(".amigos")

// const listar = async()=>{
//     try{
//         const data = await collection.find({}, {_id:0, email: 0, password:0, __v:0}).sort({name:1});
//         let lis_objetcs = JSON.parse(JSON.stringify(data));
//         let list_names = [];
//         for(let i = 0; i < lis_objetcs.length; i++){
//           list_names.push(JSON.parse(JSON.stringify(data))[i].name);
//           console.log(list_names[i])
//         }
//         console.log(list_names);
//         return list_names;
//       }catch{
//         console.log("error");
//       }
// }

btnSearch.addEventListener("click",()=>{
    // var lista = listar();
    console.log(global.list_names);
    var linha = document.createElement("tr");
    console.log(list_names.length);
    for(let i = 0; i<list_names.length; i++){
      if (inputSearch.value in list_names[i]){
        var celula = document.createElement("td");
        celula.innerHTML = list_names[i];
        linha.appendChild(celula);
        console.log("Elemento ", list_names[i]," adicionado com sucesso" );
      }else{
        continue;
      }
    }
    tabela.appendChild(linha);
 });

const check_value  = (value)=>{
    if(value===""){
        return null;
    }else{
        return value;
    }
};