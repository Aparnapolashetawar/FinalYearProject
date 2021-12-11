import React from "react";
import PoliceStation from "./images/PoliceStation1.jpg";
import singham from "./images/singham.jpg";
const About = () => {
  return (
    <>
      <div className="aboutbg">
        <div className="container">
          <center>
            <div>
              <br></br>
              <br></br>
              <h1>
                Public Officer for legal investigations and criminal
                emergencies.
              </h1>
            </div>
            <br></br>
          </center>

          <div className="container-fluid">
            <div className="policestation">
              <img src={PoliceStation} width="200px" height="200px" />
              <p className="policeinfo">
                A police station is a building where police officers work. These
                buildings often contain offices and accommodation for staff. A
                small police station may have nothing apart from office space.
                Some police stations have cells for holding people who have been
                arrested.The foundation of the Police is the Police Station. It
                ensures public order, does investigation of crimes and performs
                innumerable other tasks. The Police Station is also the primary
                point of communication between the citizen and the police.The
                police station helps us to keep the neighbourhood safe. We go to
                the police station to complain about stolen things and about
                accidents. We call the fire station when there is a fire at home
                or in the neighbourhood.
              </p>
            </div>
          </div>

          <div className="container-fluid">
            <div className="policeman">
              <img src={singham} width="200px" height="200px" />
              <p className="policemaninfo">
                A police officer, also known as a policeman/policewoman, is a
                warranted law employee of a police force. In most countries,
                "police officer" is a generic term not specifying a particular
                rank. In some, the use of the rank "officer" is legally reserved
                for military personnel.Laws should state that the primary duties
                of police are to protect victims and potential victims and
                promote offender accountability by consistently enforcing laws
                and procedures so that all “honour” crimes and killings are
                investigated and addressed by the criminal justice system.Police
                officers can work for the city, county, state, or federal
                government. Their jurisdiction and the size of the police
                department they work for play a major role in shaping their day
                to day duties.
              </p>
            </div>
          </div>

          <div className="container-fluid">
            <div className="box">
              <center>
                <h2>The role and functions of the police shall broadly be:-</h2>
              </center>
              <br></br>
              <hr></hr>
              <ol>
                <li>
                  to uphold and enforce the law impartially, and to protect
                  life, liberty, property, human rights, and dignity of the
                  members of the public
                </li>
                <br></br>
                <li>to promote and preserve public order</li>
                <br></br>
                <li>
                  to protect internal security, to prevent and control terrorist
                  activities, breaches of communal harmony, militant activities
                  and other situations affecting Internal Security
                </li>
                <br></br>
                <li>
                  to protect public properties including roads, railways,
                  bridges, vital installations and establishments etc. against
                  acts of vandalism, violence or any kind of attack
                </li>
                <br></br>
                <li>
                  to prevent crimes, and reduce the opportunities for the
                  commission of crimes through their own preventive action and
                  measures as well as by aiding and cooperating with other
                  relevant agencies in implementing due measures for prevention
                  of crimes
                </li>
                <br></br>
                <li>
                  to create and maintain a feeling of security in the community,
                  and as far as possible prevent conflicts and promote amity
                </li>
                <br></br>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
