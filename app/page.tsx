import Image from "next/image";
import hero from "./hero-image.png";
{/*import { headers } from "next/headers";*/}
import Header from "./components/Header";



export default function Home() {
  return (

    <>
      <section>
      <div>
        <Header/>
      </div>
    
      <div className="flex justify-center item-center h-[490px]" id="hero-sec">
      <div className="w-[800px] h-[200px] m-[50px] text-zinc-950 font-bold text-[35px] pl-[10px] nl-[20px]">
       Hey,
       <br />
       My Name is <span className="span1">Javeria</span>
      <br />
      <h2>I am a Student at <span className="span1">GIAIC</span></h2>
      <br />
      <p className="text-[20px]">I have learned <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> and <span>TypeScript</span>. Currently I'm learning <span className="span3">Next.JS</span> and <span className="span2">This is my First <span className="span3">Next.JS</span> Project!</span></p>
      </div>

      <div className="h-[250px] w-[250px]  justify-center mt-[60px] item-center">
      <Image src={hero} alt="profile pic"></Image>
      </div>
      </div>
  
    </section>

    <footer className="footer">This is a Footer!</footer>
    

  
    </>
  
    
  )
}