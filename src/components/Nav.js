
import React from 'react';

class Nav extends React.Component {
  render() {
    return (

      <div className="App p-2 text-lg text-[#a4b1cd] bg-[#111927]">
        <a href="/"><img className="float-left ml-4 h-20" src="/Sakshyam.png" alt="Sakshyam"/></a>
        <div className="flex justify-end">
          <div className="m-6">
            <a href="/">Home</a>
          </div>
          <div className="m-6">
            <a href="/contact">Contact</a>
          </div>
          <div className="m-6">
            <a href="/about">About</a>
          </div>
          <div className="m-6">
            <a href="/work">Work</a>
          </div>
        </div>
      </div>
  );
}
};

export default Nav;
