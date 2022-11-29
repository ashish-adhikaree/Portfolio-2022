import Typewriter from "typewriter-effect";

const Title = () => {
  return (
    <div className="text-center space-y-5">
      <Typewriter
        options={{
          wrapperClassName: "text-3xl font-bold text-yellow-300",
          cursorClassName: "text-3xl text-gray-300 animate-pulse",
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Hey, Ashish Adhikari here!")
            .pauseFor(2500)
            .deleteAll()
            .typeString("Designer and Front-End Developer")
            .deleteAll()
            .pauseFor(2500)
            .start();
        }}
      />
      <p className="text-xl font-medium">I design and code user-friendly and eye-catching websites.</p>
    </div>
  );
};

export default Title;
