import React from 'react';
import Project from './Project.js';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export default class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      technologies: []
    };
    this.detailsRef = React.createRef();
  }
  componentDidUpdate = () => {
    if(this.detailsRef.current) {
      this.detailsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
     
    }
  }
  showDetails = async (title, description, technologies) => {
    this.setState({title, description, technologies});
    console.log(technologies);
  }
  hideDetails = () => {
    this.setState({title: "", description: "", technologies: []});
  }
  render() {
    return (
      <div id="projects-container" className={this.state.title.length === 0 ? "" : "top-50"}>
        <div className="container">
          <h1>Projects</h1>
          <div className="row">
            
            <div className="project col-lg-3 col-md-6 col-sm-12">
              <Zoom>
                <Project 
                  title="Memeversity" 
                  imageSrc="./images/meme.png" 
                  description="bye"
                  technologies={["HTML", "CSS", "JavaScript", "PHP"]}
                  onClick={this.showDetails}
                />
              </Zoom>
            </div>
            <div className="project col-lg-3 col-md-6 col-sm-12">
              <Zoom>
                <Project 
                  title="Memeversity" 
                  imageSrc="./images/meme.png" 
                  description="bye"
                  technologies={["HTML", "CSS", "JavaScript", "PHP"]}
                  onClick={this.showDetails}
                />
              </Zoom>
            </div>
            
            
            <Zoom>
              <div className="project col-lg-3 col-md-6 col-sm-12">
                <Project 
                  title="NASA Images" 
                  imageSrc="./images/nasa.jpg" 
                  description="This is a web application deployed through Heroku that displays images of space from NASA's photo of the day and Mars rover APIs. Users can view the last 7 photos of the day and search through all photos taken from the Curiosity Rover. There is also a 'like' feature similar to Instagram where users can double tap an image to save it, however the data is only temporarily saved on the client side using Express  and is a 'public' list of favorites so any changes will be reflected to all users. Some optimizations improvements that have yet to be implemented: using a real database and creating a login so users have their own favorite list. to save favorithat need to be implemented all favorites are temporarily saved on the client side using Express. "
                  technologies={["HTML", "CSS", "React", "BootStrap", "Express"]}
                  onClick={this.showDetails}
                />
              </div>
            </Zoom>
            <Zoom>
              <div className="project col-lg-3 col-md-6 col-sm-12">
                <Project 
                  title="NASA Images" 
                  imageSrc="./images/nasa.jpg" 
                  description="This is a web application deployed through Heroku that displays images of space from NASA's photo of the day and Mars rover APIs. Users can view the last 7 photos of the day and search through all photos taken from the Curiosity Rover. There is also a 'like' feature similar to Instagram where users can double tap an image to save it, however the data is only temporarily saved on the client side using Express  and is a 'public' list of favorites so any changes will be reflected to all users. Some optimizations improvements that have yet to be implemented: using a real database and creating a login so users have their own favorite list. to save favorithat need to be implemented all favorites are temporarily saved on the client side using Express. "
                  technologies={["HTML", "CSS", "React", "BootStrap", "Express"]}
                  onClick={this.showDetails}
                />
              </div>
            </Zoom>
            <Zoom>
              <div className="project col-lg-3 col-md-6 col-sm-12">
                <Project 
                  title="NASA Images" 
                  imageSrc="./images/nasa.jpg" 
                  description="This is a web application deployed through Heroku that displays images of space from NASA's photo of the day and Mars rover APIs. Users can view the last 7 photos of the day and search through all photos taken from the Curiosity Rover. There is also a 'like' feature similar to Instagram where users can double tap an image to save it, however the data is only temporarily saved on the client side using Express  and is a 'public' list of favorites so any changes will be reflected to all users. Some optimizations improvements that have yet to be implemented: using a real database and creating a login so users have their own favorite list. to save favorithat need to be implemented all favorites are temporarily saved on the client side using Express. "
                  technologies={["HTML", "CSS", "React", "BootStrap", "Express"]}
                  onClick={this.showDetails}
                />
              </div>
            </Zoom>
            <Zoom>
              <div className="project col-lg-3 col-md-6 col-sm-12">
                <Project 
                  title="NASA Images" 
                  imageSrc="./images/nasa.jpg" 
                  description="This is a web application deployed through Heroku that displays images of space from NASA's photo of the day and Mars rover APIs. Users can view the last 7 photos of the day and search through all photos taken from the Curiosity Rover. There is also a 'like' feature similar to Instagram where users can double tap an image to save it, however the data is only temporarily saved on the client side using Express  and is a 'public' list of favorites so any changes will be reflected to all users. Some optimizations improvements that have yet to be implemented: using a real database and creating a login so users have their own favorite list. to save favorithat need to be implemented all favorites are temporarily saved on the client side using Express. "
                  technologies={["HTML", "CSS", "React", "BootStrap", "Express"]}
                  onClick={this.showDetails}
                />
              </div>
            </Zoom>
            <Zoom>
              <div className="project col-lg-3 col-md-6 col-sm-12">
                <Project 
                  title="NASA Images" 
                  imageSrc="./images/nasa.jpg" 
                  description="This is a web application deployed through Heroku that displays images of space from NASA's photo of the day and Mars rover APIs. Users can view the last 7 photos of the day and search through all photos taken from the Curiosity Rover. There is also a 'like' feature similar to Instagram where users can double tap an image to save it, however the data is only temporarily saved on the client side using Express  and is a 'public' list of favorites so any changes will be reflected to all users. Some optimizations improvements that have yet to be implemented: using a real database and creating a login so users have their own favorite list. to save favorithat need to be implemented all favorites are temporarily saved on the client side using Express. "
                  technologies={["HTML", "CSS", "React", "BootStrap", "Express"]}
                  onClick={this.showDetails}
                />
              </div>
            </Zoom>
          </div>
          <div className="project-details" >
            {this.state.title.length !== 0 ? 
              
                <div id="details-row" ref={this.detailsRef} className="row">
                  <Fade>
                    <div className="">
                      <h2>{this.state.title} <i id="close-details-icon" className="icon-minus arrow-toggle" onClick={this.hideDetails}></i></h2> 
                      <p>{this.state.description}</p>
                      
                      {this.state.technologies.map(technology => {
                        return (
                          <a className="skill">{technology}</a>
                        );
                        
                      })}
                    </div>
                  </Fade>
                </div>  : <div/>
            }
          </div>
        </div>
      </div>
      
    );
  }
}


// export default class Projects extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       web: [],
//       prog: [],
//       micro: [],
//       loading: false
//     };
//   }
//   componentDidMount = async () => {
//     this.setState({ loading: true });
//     const projects = await getProjects();
//     this.setState({ web: projects.web_development, prog: projects.programming, micro: projects.microcontrollers });
//     this.setState({ loading: false });
//   }
//   render() {
//     return (
//       <div>
//         {this.state.loading ? <Loading /> :
//           <div id="projects-page" className="container" >
//             <br/><br/>
//             <h1>Web Projects</h1>
//             <div className="row rowOfUnits">
//               {this.state.web.map(project => {
//                 return (
//                   <WebLink title={project.title} imageSrc={project.thumbnail} url={`/projects/web_development/${project.id}`}/>
//                 );
//               })}
//             </div>
//             <br/><br/>
//             <h1>Programming Projects</h1>
//             <div className="row rowOfUnits">
//               {this.state.prog.map(project => {
//                 return (
//                   <WebLink title={project.title} imageSrc={project.thumbnail} url={`/projects/programming/${project.id}` }/>
//                 );
//               })}
//             </div>
//             <br/><br/>
//             <h1>Microcontroller Projects</h1>
//             <div className="row rowOfUnits">
//               {this.state.micro.map(project => {
//                 return (
//                   <WebLink title={project.title} imageSrc={project.thumbnail} url={`/projects/microcontrollers/${project.id}` }/>
//                 );
//               })}
//             </div>
//           </div>
//         }
//       </div>
//     );
//   }
// }
// export default function Projects(props) {
//   //try onHover and create a function to fill in link-desc
// 	return (
//     <div>
// 	    <div id="web-body" className="container" >
//         <br/><br/>
//         <h1>Web Projects</h1>
//         <div className="row rowOfUnits">
//           <WebLink title={"Movie Database"} imageSrc={"./images/movies.png"} url={"http://303.itpwebdev.com/~yangphil/assignment5/movie.html"} isWeb={false}/>
//           <WebLink title={"Memeversity"} imageSrc={"./images/meme.png"} url={"http://303.itpwebdev.com/~yangphil/final_project/login.php"} isWeb={false}/>
//         </div>
//         <br/><br/>
//         <h1>C++ Projects</h1>
//         <div className="row rowOfUnits">
//           <WebLink title={"Sieve of Erastosthenes"} imageSrc={"./images/github.png"} url={"/projects/sieveoferastothenes"} isWeb={false}/>
//           <WebLink title={"Sieve of Erastosthenes"} imageSrc={"./images/github.png"} url={"/projects/sieveoferastothenes"} isWeb={false}/>
//           <WebLink title={"Sieve of Erastosthenes"} imageSrc={"./images/github.png"} url={"/projects/sieveoferastothenes"} isWeb={false}/>
//           <WebLink title={"Sieve of Erastosthenes"} imageSrc={"./images/github.png"} url={"/projects/sieveoferastothenes"} isWeb={false}/>
//         </div>
//       </div>
//     </div>
// 	);
// }