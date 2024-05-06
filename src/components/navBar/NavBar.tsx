import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
         <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
              <div className="container flex justify-between text-lg">
              <Link to='/home' className='text-2xl font-bold uppercase'>Loja De Games</Link>
    
                <div className='flex gap-4'>
                <div className='hover:underline'>Produto</div>
                <Link to='/categoria' className='hover:underline'>Categoria</Link>
                <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
                <div className='hover:underline'>Perfil</div>
                <div className='hover:underline'>Sair</div>
                 
                </div>
              </div>
            </div>
        </>
      )
    }
    
    export default Navbar