import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
       From the Heart of Bushahr, 
        <span className="bg-gradient-to-r from-red-700 to-red-950 text-transparent bg-clip-text">
          {" "}
          For the Love of the Game
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your passion and elevate your game with FC Bushahr. Whether you're dreaming of the pitch or training to dominate it, take your first step toward football excellence today.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-red-700 to-red-950 py-3 px-4 mx-3 rounded-md"
        >
          Enroll now!
        </a>
       
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
