import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-2xl font-semibold mb-6">Contact Page</h1>

      <div className="flex flex-wrap justify-center gap-8 items-start">
        <div className="flex flex-col items-center">
          <img
            src="/cf5e04b3cd7fabef7a3167b99250e017.jpg"
            alt="Image 1"
            className="max-w-[300px] border-4 border-blue-300 rounded-lg p-1"
          />
          <p className="mt-2 font-bold italic text-gray-700">
            nathanenguehard@gmail.com
          </p>
        </div>

        {/* Image violette modifiée pour effet flottant */}
        <div className="transform -rotate-6 translate-x-8 -translate-y-4 transition-all duration-500">
          <img
            src="/cf5e04b3cd7fabef7a3167b99250e017.jpg"
            alt="Image 2"
            className="max-w-[300px] border-4 border-violet-300 rounded-lg p-1 shadow-xl"
          />
        </div>
      </div>

      <div className="mt-8">
        <a href="/CV informatique.pdf" download>
          <Button
            variant="elevated"
            className="border border-black transition-transform duration-300 hover:scale-105 hover:bg-black hover:text-white"
          >
            Télécharger mon CV
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Page;
