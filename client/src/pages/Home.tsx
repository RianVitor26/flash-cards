import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { SpeedDialWithTextOutside } from "../components/SpeedDial";
import { motion } from "framer-motion";

export const Home = () => {
  const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: .8 } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <Navigation />
      <header className="w-full break-words text-center flex items-center justify-center flex-col md:flex-row gap-y-5">
        <div className="w-full h-1/2 md:h-full md:w-1/2 flex justify-start flex-col gap-5 p-5 md:p-10 shadow-md rounded-br-md  bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600">
          <motion.h1
            className="text-gray-100 text-3xl font-black text-center md:text-start"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            Flash Cards
          </motion.h1>
          <motion.h2
            className="text-gray-300 font-bold text-md text-center md:text-start"
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
          >
            Crie baralhos com o objetivo de memorizar o significado de algum termo do seu interesse.
          </motion.h2>
          <div className="w-full flex justify-center md:justify-start">
            <Link className="w-fit" to="/decks">
              <button className="bg-blue-600 border px-3 py-3 text-white font-bold rounded-md">
                Memorizar!
              </button>
            </Link>
          </div>
          <img
            className="object-contain w-full h-96 levitating"
            src="/spaceship.svg"
            alt="Imagem de uma espaçonave" />
        </div>
        <div className="w-full h-1/2 md:h-full md:w-1/2 flex items-center justify-center md:p-10">
          <img
            className="w-full h-full object-contain"
            src="./home.svg"
            alt="Imagem do undraw de uma pessoa e um coração"
          />
        </div>
      </header>
      <SpeedDialWithTextOutside />
      <Footer />
    </>
  );
};
