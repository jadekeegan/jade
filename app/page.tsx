import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-10 px-35 bg-amber-100">
      <div className="flex flex-row justify-between items-center mb-2">
        <p className="highlight italic text-xl py-1 px-2 font-bold">jade keegan</p>
        <div className="flex flex-row gap-4">
          <p className="highlight text-xl py-1 px-2 font-bold">about</p>
          <p className="highlight text-xl py-1 px-2 font-bold">contact</p>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center gap-5 w-full">
        {/* Main / About */}
        <div className="w-full flex flex-row justify-between bg-amber-50 border-1 border-green-950">
          <div className="w-7/12 p-5">
            <p className="text-4xl font-bold">JADE ☆</p>
            <hr className="mt-2 border-t-2 border-green-950" />
            <hr className="mt-1 mb-2 border-t-2 border-green-950" />
            <p className="text-lg mb-4">Hello! I am a graduate student at UNC Chapel Hill pursuing a Masters in Computer Science. Currently, I'm working part-time as a SWE Intern at Genesys and serving as a Graduate Teaching Assistant for COMP 426 at UNC-CH.</p>
          </div>
          <div className="p-5">
            <Image
              src="/placeholder.png"
              alt="Jade Keegan"
              width={300}
              height={300}
            />
            <p className="highlight italic text-sm mt-1">Me @ ____ (2025)</p>
          </div>
        </div>

        {/* Work */}
        <div className="w-full flex flex-col bg-amber-50 border-1 border-green-950">
          <div className="flex flex-row w-full items-center pt-5 px-5">
            <p className="text-2xl font-bold pr-2">work</p>
            <div className="flex flex-col w-full">
              <hr className="mt-2 border-t-2 border-green-950" />
              <hr className="mt-1 border-t-2 border-green-950" />
              <hr className="mt-1 mb-2 border-t-2 border-green-950" />
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="w-full pt-2 pb-5 px-5">
            </div>
            <div className="w-full p-5"></div>
          </div>
        </div>
      </div>
      <footer className="mt-auto text-center py-4">
        <p className="text-sm text-gray-600">Thanks for stopping by!</p>
      </footer>
    </div>
  );
}