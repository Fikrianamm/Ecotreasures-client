import { Link } from "react-router-dom";

export const LogoMainGreen = () => {
    return (
      <Link to={"/"}>
        
        <h1
          title="EcoTreasures"
          className="cursor-pointer font-breeSerif text-green-700 text-2xl"
        >
          EcoTreasures
        </h1>

      </Link>
    );
};

export const LogoMainWhite = () => {
    return (
        <Link to={"/"}>

          <h1
            title="EcoTreasures"
            className="cursor-pointer font-breeSerif text-gray-50 text-2xl"
          >
            EcoTreasures
          </h1>
          
        </Link>
      );
};