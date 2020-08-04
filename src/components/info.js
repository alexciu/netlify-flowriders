import React from "react"
import { RiShieldUserLine, RiEmotionHappyLine, RiBookMarkLine } from "react-icons/ri";

const Info = () => (
  <div className="info-grid-container grids sm-1 lg-3 xl-3">
    <div className="section">

      <h2 className="center"><span className="icon -info"><RiShieldUserLine /></span> Be Safe</h2>

      <p className="light">You will get fittet with a helmet, knee and elbow pads, wrist guards, and a backpack that
      will protect your back. The mountainboard also has a brake, so you can stop no matter what. A great rider
              never gets injured. Safety is our number one priority.</p>
    </div>
    <div className="section">

      <h2 className="center"><span className="icon -info"><RiEmotionHappyLine /></span> Have Fun</h2>

      <p className="light">That's why you're here for right? We choose a track based on your level of expenrience, to
      make it challenging, but also doable. There are many tracks, and the levels go from beginners to extreme.
              We guarantee a smile on your face at the end of the session.</p></div>
    <div className="section">

      <h2 className="center"><span className="icon -info"><RiBookMarkLine /></span> Learn</h2>

      <p className="light">Snowboarding and mountainboarding are very similar sports. Mountainboarding is easier to
      learn (because you have a brake) and you will be ready for snowboarding when winter comes. If you already
              are a good snowboarder, mountainboarding will fit like a glove.</p></div>
  </div>
)

export default Info