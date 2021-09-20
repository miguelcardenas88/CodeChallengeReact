import { isEmpty, map, size } from 'lodash'
import React, {useEffect , useState} from 'react'
import shortid from 'shortid'
import axios from 'axios';
function App() {
  const urlBaseApi="https://gnews.io/api/v4/search?q=watches&token=148e7db7f9912b987535ef16fe28babb"
  const urlBaseApiNet="https://reactserviceapp.azurewebsites.net/api/Articulos"
  const [data, setData]=useState([])  
  const [dataNet, setDataNet]=useState([])
  const [titulo, setTitulo]= useState("")
  const [descripcion, setDescripcion]= useState("")
  const [publis, setPublis]= useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState("")
  const [error, setError] = useState(null)
  const [imagen, setImagen] = useState();

  const ValidarFormulario = ()=>{
    let isValidado = true
    setError(null)

    if (isEmpty(titulo))
    {
      setError("Debes ingresar una reloj")
      isValidado = false
    }
    if (isEmpty(descripcion))
    {
      setError("Debes ingresar una reloj")
      isValidado = false
    }
    return isValidado 
  }

  const AgregarTask = (e) =>{
    //evita que recargue la pagina
    e.preventDefault()
    if (!ValidarFormulario())
    {
      return
    }
    const newpubli = {
      id: shortid.generate(),
      title: titulo,
      descripcion:descripcion,
      logo:imagen
    }
    setPublis([ ...publis,newpubli])   
    setTitulo("")
    setDescripcion("")
  }
  const deletePublic = (id) =>{
    const tareasfiltradas = publis.filter(tarea =>tarea.id !== id)
    setPublis(tareasfiltradas)    
  }
  const editarublic = (lapublic) =>{
    setTitulo(lapublic.title)
    setDescripcion(lapublic.descripcion)
    setEditMode(true)
    setId(lapublic.id)   
  }
  const savePublic = (e) =>{
    //evita que recargue la pagina
    e.preventDefault()
    if (!ValidarFormulario())
    {
      return
    } 
    const editPublic = publis.map( item => item.id === id ?{ id, title:titulo,descripcion:descripcion,logo:imagen}: item)
    setPublis(editPublic)   
    setEditMode(false)  
    setId("")      
    setTitulo("")   
    setDescripcion("") 
    
  }

  const changeImagen = e => {
        setImagen(e.target.files[0]);
        console.log(imagen);
        const fileReader = new FileReader();
// fileReader.onload = fileLoadedEvent => {
//   const base64Image = fileLoadedEvent.target.result;
// };
// fileReader.readAsDataURL(imagepath); 
// console.log(imagepath);
        
    }
    const peticion=async()=>
    {
      await axios.get(urlBaseApi)
      .then(response=>{
        setData(response.data.articles);
      }).catch (error=>{
        console.log(error);
      });
    }
    const peticionNet=async()=>
    {
      await axios.get(urlBaseApiNet)
      .then(response=>{       
        setDataNet(response.data);
      }).catch (error=>{
        console.log(error);
      });
    }

    useEffect(()=>{
      peticion();
      peticionNet();
    },[])
  return (  
    <div className="container mt-5">
      <h1>Publicaciones Locales</h1>       
      <hr/>   
      <div className="row">
        <div className="col-8">
           <h4 className="text-center">Lista Articulos</h4> 
           {
             size(publis)===0 ?(
                <li className="list-group-item">No hay articulos</li>
             ):(
              <table className="table">
        <thead> 
          <tr>
            <th>Codigo</th>
            <th>Titulo</th>
            <th>Descripcion</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          { publis.map((publi)=>(
          <tr key={publi.id}>
            <td>{publi.id}</td>   
            <td>{publi.title}</td>
            <td>{publi.descripcion}</td>     
            <td><img src={publi.logo} /></td>  
            <td>
              <button className="btn btn-primary" onClick={()=> editarublic(publi)}>Editar</button> {"   "}
              <button className="btn btn-danger"  onClick={()=> deletePublic(publi.id)}  >Eliminar</button>
              </td>       
          </tr>
          ))}
       </tbody>
      </table>
             )            
          } 
                   
        </div>
        <div className="col-4">
           <h4 className="text-center">
             {editMode ?"Modificar articulo":"Agregar articulo"}
             </h4> 
           <form onSubmit={editMode ? savePublic : AgregarTask}>
           { error && <span className="text-danger mb-2">{error}</span>}
            <input type="text" 
            className="form-control mb-2" 
            placeholder="Ingrese un titulo...." 
            onChange={(text)=> setTitulo(text.target.value)}
            value={titulo}
            /> 
            <textarea className="form-control" type="text" 
            className="form-control mb-2" 
            placeholder="Ingrese un contenido...." 
            onChange={(text)=> setDescripcion(text.target.value)}
            value={descripcion}
            /> 
            <input className="form-control" type="file" name="imagen" onChange={changeImagen} />
            <br />      
            <button className={editMode ? "btn btn-warning btn-block" : "btn btn-success btn-block"} type="submit" 
            >{editMode ?"Modificar":"Agregar"}</button>
           </form>
        </div>
      </div>

      {/* Las publicaciones remotas */}

      <h1>Publicaciones Remotas</h1>       
      <hr/>   
      <div className="row">
        <div className="col-12">
           <h4 className="text-center">Lista Articulos</h4> 
           {
             size(data)===0 ?(
                <li className="list-group-item">No hay articulos</li>
             ):(
              <table className="table">
              <thead> 
                <tr>
                  <th>Titulo</th>
                  <th>Contenido</th>
                  <th>Descripcion</th>
                  <th>Imagen</th>
                </tr>
              </thead>
            <tbody>
              { data.map((publi)=>(
              <tr>
                <td>{publi.title}</td>   
                <td>{publi.content}</td>
                <td>{publi.description}</td>     
                <td><img src={publi.image} height="150px"  margin="auto"/></td>                        
              </tr>
              ))}
            </tbody>
            </table>
             )            
          }                    
        </div>
      </div>

      {/* Las publicaciones remotas  +*/}

      <h1>Publicaciones Remotas +</h1>       
      <hr/>   
      <div className="row">
        <div className="col-12">
           <h4 className="text-center">Lista Articulos</h4> 
           {
             size(dataNet)===0 ?(
                <li className="list-group-item">No hay articulos</li>
             ):(
              <table className="table" >
              <thead> 
                <tr>
                  <th>Titulo</th>
                  <th>Contenido</th>
                  <th>Descripcion</th>
                  <th>Imagen</th>
                </tr>
              </thead>
            <tbody>
              { dataNet.map((publi)=>(
              <tr key={publi.codigo}>
                <td>{publi.title}</td>   
                <td>{publi.content}</td>
                <td>{publi.description}</td>     
                <td><img src={publi.url} height="150px"  margin="auto"/></td>                        
              </tr>
              ))}
            </tbody>
            </table>
             )            
          } 
                   
        </div>
      </div>

    </div>
  );
}

export default App;
