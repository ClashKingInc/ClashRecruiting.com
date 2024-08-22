import Head from 'next/head';

export default function Home() {
  return (
      <main className="relative h-[700px]">
        <div className="absolute left-0 top-0 w-[40%] h-full">
          <img src="/clouds.jpg" alt="Banner Image" className="object-cover w-full h-full"/>
          <div className="absolute inset-0 bg-black opacity-70"></div>

        </div>

        <div className="absolute left-0 top-0 w-[40%] h-full flex flex-col items-center justify-center z-20">
          <div className="relative flex items-center justify-center mb-4">
            <img src="/shield.png" alt="Shield Icon" className="w-[60%]  h-auto"/>
            <img src="/titan.png" alt="Second Shield Icon"
                 className="absolute bottom-[-18%] right-[10%] w-[50%] h-auto"/>
          </div>
          <h2 className="text-9xl font-bold mt-4">1000’s of</h2>
        </div>


        <header className="relative z-10 flex justify-between items-center py-4 px-8">
          <div className="flex space-x-4 ml-auto">
            <button className="bg-customOrange text-white py-2 px-4 rounded-md">Recruit Now!</button>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Join Our Discord</button>
          </div>
        </header>

        <div className="absolute right-0 top-0 w-[56%] h-full flex flex-col justify-center px-8 z-30 text-white -mt-14">
          <div className="flex items-center mb-8">
            <img src="/logo.png" alt="Logo" className="h-[75px] mr-4"/>
            <div>
              <h1 className="text-4xl font-bold">ClashRecruiting.com</h1>
              <p className="text-lg">by ClashKing</p>
            </div>
          </div>
          <div className="text-left">
            <p className="text-8xl font-extrabold leading-none">Recruiting has</p>
            <p className="text-8xl font-extrabold leading-none text-customOrange">never</p>
            <p className="text-8xl font-extrabold leading-none">been easier!</p>
          </div>
        </div>

        <hr className="absolute right-[37.5%] w-1/6 border-t-2 border-white z-30 my-4" style={{top: `calc(100% - 20% - 3rem)`}}/>

        <div className="absolute right-0 bottom-0 w-[65%] h-[26%] flex justify-evenly items-center px-8 z-30 text-white">
          <span className="text-6xl font-bold">Clans!</span>
          <span className="text-6xl font-bold text-customOrange">Players!</span>
          <span className="text-6xl font-bold">Events!</span>
        </div>


      </main>
  );
}
