export default function MobileApp() {
  return (

    
       <div className="flex justify-between items-center mt-6 container mx-auto bg-[#5d3ebc] bg-[url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)] rounded-lg">
      <div className="text-white flex flex-col  p-10 ">
        <h3 className="text-2xl font-bold tracking-tight">Getir'i indir!</h3>
        <p className="text-base font-semibold">
          İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
        </p>
        <nav className="flex items-center gap-x-2 pt-8">
          <a href="#" className="transitions-all transform hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt=""
            />
          </a>{" "}
          <a href="#" className="transitions-all transform hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt=""
            />
          </a>{" "}
          <a href="#" className="transitions-all transform hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt=""
            />
          </a>
        </nav>
      </div>
      <picture>
        <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" />
      </picture>
    </div>
    
   
  );
}
