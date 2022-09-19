import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

export const FormWhithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
      });
    
      const { name, email, password } = formValues;

      useEffect(() => {
        console.log('EL email cambio.')
      }, [email])
      

      const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues)
      }
    
      return (
        <form onSubmit={handleSubmit}>
            <h1>FormWhithCustomHook</h1>
            <hr/>
    
            <div className="form-group">
              <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
              />
    
              <input 
                type="text"
                name="email"
                className="form-control"
                placeholder="Tu email"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
              />

              <input 
                type="password"
                name="password"
                className="form-control"
                placeholder="****"
                value={password}
                onChange={handleInputChange}
              />
    
            </div>

            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
      )
}
