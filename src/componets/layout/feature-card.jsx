const FeatureCard = ({ title, description, price, image, buttonText }) => {
    return (
      <div
        className="relative w-full h-48 rounded-lg overflow-hidden flex items-center justify-center text-white"
        style={{ 
          backgroundImage: `url(/home/features/${image})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 text-center p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
          {price && <p className="text-yellow-300 font-semibold">{price}</p>}
          <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg">{buttonText}</button>
        </div>
      </div>
    );
  };
  
  export default FeatureCard;
  