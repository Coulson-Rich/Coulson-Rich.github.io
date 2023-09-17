export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Coulson.
              <br className="hidden lg:inline-block" /> Developer. Engineer. <br/> Life-long Learner.
            </h1>
            <p className="mb-8 leading-relaxed">
              I'm a Senior at Brigham Young University studying Computer Science. I love to learn new skills, hobbies, or almost anything else. I'm passionate about using technology to make the world accessable to all.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="text-center inline-flex text-white bg-blue-500 border-0 py-2 px-3 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Work With Me
              </a>
              <a
                href="#projects"
                className=" text-center ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded brightness-90"
              alt="Coulson"
              src="/Coulson.jpeg"
            />
          </div>
        </div>
      </section>
    );
  }