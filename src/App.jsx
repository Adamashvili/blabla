
import { useForm } from 'react-hook-form'
import './App.css'
import { yupResolver } from '@hookform/resolvers/yup';
import { validation } from './validation';
import { useState } from 'react';

function App() {

  const [info, setInfo] = useState( {} )

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(validation)
  })

  function registerLogic(data) {
    console.log(data);
    setInfo(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(  registerLogic  )}>
        <div className="area">
          <label htmlFor="">User Name</label>
          <input type="text"  {...register("saxeli")}/>
          {errors.saxeli && <p className='errText'>{errors.saxeli.message}</p> }
        </div>
        <div className="area">
          <label htmlFor="">Password</label>
          <input type="password" {...register("paroli")}/>
          {errors.paroli && <p className='errText'>{errors.paroli.message}</p> }
        </div>
        <div className="area">
          <label htmlFor="">Email</label>
          <input type="email" {...register("email")}/>
          {errors.email && <p className='errText'>{errors.email.message}</p> }
        </div>
        <button>Register</button>
      </form>

     <div className="personalInfo">
      <h1>{info.saxeli}</h1>
      <h6>{info.email}</h6>
     </div>
    </>
  )
}

export default App
