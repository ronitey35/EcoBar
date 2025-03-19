import FeatureCard from "../layout/feature-card";

const featuresData = [
  {
    title: "100% Fresh Cow Milk",
    description: "Starting at $14.99",
    image: "milk.png",
    buttonText: "Shop Now",
  },
  {
    title: "Water & Soft Drink",
    description: "Drink Sale",
    image: "drink.png",
    buttonText: "Shop Now",
  },
  {
    title: "Quick Breakfast",
    description: "100% Organic",
    image: "breakfast.png",
    buttonText: "Shop Now",
  },
];

const Features = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-width   ">
      {featuresData.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default Features;
