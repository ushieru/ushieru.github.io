import React from "react";
import profileImage from "./../assets/profile-large.jpg";
import githubSvg from "./../assets/github.svg";
import googleDeveloperSvg from "./../assets/googleDeveloper.svg";
import linkedinSvg from "./../assets/linkedin.svg";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-5 sm:container">
      <img
        alt="ushieru's image"
        src={profileImage}
        style={{ objectFit: "contain" }}
        className="bg-cover h-64 w-64 rounded-full border-4 border-gray-100"
      />
      <p className="font-bold text-5xl sm:text-7xl mt-10">I'm Ushieru</p>
      <p className="text-3xl sm:text-5xl mt-3">Software Engineer</p>
      <p className="text-center text-md sm:text-xl mt-3">
        Entrepreneur, dance, theater and acrobatics enthusiast.
      </p>
      <div className="flex mt-10">
        <a
          href="https://github.com/ushieru/"
          target="_blank"
          className="flex flex-col items-center"
        >
          <img
            alt="ushieru's github"
            src={githubSvg}
            className="h-16 w-16 bg-gray-100 border-2 border-gray-100 rounded-full mx-7 mb-2"
          />
          <p>Github</p>
        </a>
        <a
          href="https://g.dev/ushieru"
          target="_blank"
          className="flex flex-col items-center"
        >
          <img
            alt="ushieru's google developer"
            src={googleDeveloperSvg}
            className="h-16 w-16 bg-gray-100 border-2 border-gray-100 rounded-full mx-7 mb-2"
          />
          <p style={{textOverflow: 'ellipsis', textAlign: 'center'}}>Google Developer</p>
        </a>
        <a
          href="https://www.linkedin.com/in/uzielcocolan/"
          target="_blank"
          className="flex flex-col items-center"
        >
          <img
            alt="ushieru's linkedin"
            src={linkedinSvg}
            className="h-16 w-16 bg-gray-100 border-2 border-gray-100 rounded-full mx-7 mb-2"
          />
          <p>Linkedin</p>
        </a>
      </div>
    </div>
  );
};

export default Home;
