import React, { useContext } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { UserContext } from './UserContext'

export const HomeScreen = () => {

  /**
   * Este hook sirve para obtener la informacion que se envia desde el componente que tiene el context en este caso MainApp.jsx
   */
  const { user } = useContext(UserContext);
  console.log(user);

  const [formValues, handleInput] = useForm({
    searchText: ''
  });

  const { searchText } = formValues;

  /**
   * Forma para obtener los parametros agregados a una url por ejemplo http://localhost:3000/?q=hola+mundo&flag=text
   */
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('q'));
  console.log(searchParams.get('flag'));

  /**
   * Obtener parametros con queryString, es mas recomendable que la libreria de react-router-dom y se instala con la dependencia
   * npm install query-string
   */
  const location = useLocation();
  console.log(location.search);
  console.log( queryString.parse(location.search) ); // estos valores se pueden destructurar segun los parametros que se deseen utilizar
  const {q = ''} = queryString.parse(location.search);
  console.log(q)

  /**
   * Forma de serializar los parametros para una busqueda que se deseen agregar a la URL. 
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    let params = `?q=${searchText}&flag=text`;
    setSearchParams(params);
  }

  return (
    <div>
        <h1>HomeScreen</h1>
        <hr />

        <form onSubmit={handleSubmit}>
          <input type="text" name='searchText' value={searchText} onChange={handleInput} placeholder="Search" />
          <input type="submit" value="submit"/>
        </form>

        <pre>
          { JSON.stringify(user, null, 3) }
        </pre>
    </div>
  )
}
