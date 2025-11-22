import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="w-full flex justify-center">
        <Navbar />
      </div>
      <div className="w-[95%] sm:w-[90%] md:w-[80%] flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-linear-to-r from-amber-400 via-fuchsia-500 to-sky-500">Welcome to my website</h1>
        
      </div>
      <Footer />
    </div>
);                                    
}
