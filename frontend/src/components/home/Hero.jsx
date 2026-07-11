import { FaArrowRight } from "react-icons/fa";
import heroImage from "../../assets/images/hero.png";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 items-center gap-12">

          {/* Left */}

          <div>

            <span className="bg-orange-500 px-4 py-2 rounded-full text-sm">
              Up To 50% OFF
            </span>

            <h1 className="text-6xl font-extrabold mt-6 leading-tight">
              Shop Smarter.
              <br />
              Live Better.
            </h1>

            <p className="text-gray-300 mt-6 text-lg">
              Discover premium electronics,
              fashion, accessories and home
              essentials at unbeatable prices.
            </p>

            <div className="flex gap-4 mt-10">

              <Button>
                Shop Now
              </Button>

              <Button variant="secondary">
                Explore
              </Button>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <img
              src={heroImage}
              alt="Shopping"
              className="w-full max-w-lg hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;