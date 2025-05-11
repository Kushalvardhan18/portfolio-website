import React from "react";

function AboutMe() {
  return (
    <>
      <div id="info" className="mx-10 text-xl my-10">
        <p>
          Hi, I'm Kushal Vardhan, a 24-year-old{" "}
          <span style={{ color: "#c778dd" }}>Software Developer</span> with a passion
          for problem-solving and exploring the intricacies of technology. I
          specialize in Java programming, with expertise in{" "}
          <span style={{ color: "#c778dd" }}>Algorithms</span>,{" "}
          <span style={{ color: "#c778dd" }}>Data Structures</span>,{" "}
          <span style={{ color: "#c778dd" }}>JAVA</span>, and{" "}
          <span style={{ color: "#c778dd" }}>Web Development</span>.
        </p>
        <p>
          With a strong foundation in software development and a track record of
          achievements like a <span style={{ color: "#c778dd" }}>200-day</span> streak
          on LeetCode, I thrive on tackling challenges and continuously
          expanding my skill set.
        </p>
        <p>
          In my free time, you might find me experimenting with projects or
          enhancing my GitHub portfolio. Let's connect and create something
          impactful together!
        </p>
        <button className="Download">Download Resume!!</button>
      </div>
    </>
  );
}

export default AboutMe;
