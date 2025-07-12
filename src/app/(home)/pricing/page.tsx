const Page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Image de fond subtile */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/background.jpg" // remplace par le nom exact de l'image dans /public
          alt="Background"
          className="w-full h-full object-cover opacity-10 blur-sm"
        />
      </div>

      <div className="p-10 text-white text-3xl font-light">
        Pricing Page
      </div>
    </div>
  );
};

export default Page;
