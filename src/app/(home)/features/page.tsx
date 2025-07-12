const features = [
  {
    title: "Fluide et léger",
    icon: "🕊️",
  },
  {
    title: "Transparence absolue",
    icon: "🌫️",
  },
  {
    title: "Énergie subtile",
    icon: "✨",
  },
];

const Page = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-purple-50 to-violet-100 overflow-hidden py-20 px-6">
      {/* Fond animé flou */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-300 opacity-20 rounded-full blur-3xl top-10 left-1/2 -translate-x-1/2 animate-pulse" />
        <div className="absolute w-72 h-72 bg-pink-300 opacity-10 rounded-full blur-2xl bottom-0 right-20 animate-ping" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-extralight text-purple-700 mb-12 tracking-wide">
          Fonctionnalités Éthérées
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feat, i) => (
            <div
              key={i}
              className="bg-white/50 backdrop-blur-md rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300 border border-white/30"
            >
              <div className="text-6xl mb-4">{feat.icon}</div>
              <h2 className="text-xl font-semibold text-purple-600">{feat.title}</h2>
            </div>
          ))}
        </div>

        <div className="relative mt-16 flex flex-col items-center space-y-2">
          <div className="flex space-x-4 animate-bounce">
            <span className="text-4xl text-purple-600">⬇️</span>
            <span className="text-4xl text-purple-600">⬇️</span>
            <span className="text-4xl text-purple-600">⬇️</span>
          </div>

          <img
            src="3df13b28ecbb8e9d8020a93d30ee0868.gif" // Remplace par ton gif si besoin
            alt="Gif indicateur"
            className="w-32 h-32 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
