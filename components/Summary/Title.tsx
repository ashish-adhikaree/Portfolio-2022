import Typewriter from "typewriter-effect";

const Title = () => {
  return (
    <div className="text-center space-y-5">
      <Typewriter
        options={{
          strings: ["Hey, Ashish Adhikari here!", "Designer and Front-End Developer", "Mechanical Engineering Enthusiast"],
          wrapperClassName: "title tracking-normal",
          cursorClassName: "text-3xl text-gray-300 animate-pulse",
          delay:  10,
          deleteSpeed: 20,
          autoStart:true,
          loop: true,
        }}
        
      />
      <p className="text-xl font-medium animate-descrip-entry">Mech engineering enthusiast with extreme <br/>love for computer science and business</p>
    </div>
  );
};

export default Title;
