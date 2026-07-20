import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {

    try {

      const res = await fetch('http://localhost:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      });


      if (res.ok) {
        setMessage('✅ Login exitoso');
      } else {
        setMessage('❌ Usuario o contraseña incorrectos');
      }

    } catch(error) {
      setMessage('⚠️ Error al conectar con el servidor');
    }

  };


  return (

    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Hola, este es mi nuevo cambio
      </h1>


      <motion.div

        className="card p-4"

        initial={{opacity:0, y:-20}}

        animate={{opacity:1, y:0}}

        transition={{duration:1}}

      >

        <h3 className="mb-4 text-center">
          Iniciar Sesión
        </h3>


        <input

          className="form-control mb-3"

          placeholder="Usuario"

          value={username}

          onChange={(e)=>setUsername(e.target.value)}

        />


        <input

          className="form-control mb-3"

          type="password"

          placeholder="Contraseña"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

        />


        <button

          className="btn btn-primary w-100"

          onClick={handleLogin}

        >

          Entrar

        </button>


        {
          message &&

          <div className="alert alert-info mt-3">

            {message}

          </div>
        }


      </motion.div>

    </div>

  );

}


export default App;