const Page = () => {
  return (
    <div className="relative min-h-screen">
      
      <div className="absolute inset-0 -z-10">
        <img
          src="d82f759105d6d95940420f255f95c649.jpg" 
          alt="Background"
          className="w-full h-full object-cover opacity-10 blur-sm"
        />
      </div>

      <div className="p-10 text-gray-800 text-3xl font-light">
        Pricing Page
      </div>
    </div>
  );
};

export default Page;
