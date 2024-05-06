import homeLogo from '../../assets/gameLogo.png'

function Home() {
    return (
        <>
        <div className="bg-purple-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde a loja de games!</h2>
              <p className='text-xl'>A sua diversão na palma da mão</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white bg-purple-950 py-2 px-4'>Veja nossos produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;