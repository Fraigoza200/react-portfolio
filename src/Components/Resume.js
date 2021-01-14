import React, { Component } from 'react';
import "./Resume.css"

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

            
				{/* <div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div> */}
        <div className="tech__image">
          <img className='image' src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_1e0d62f445e6448af1e125f5702c8227/reactjs-development-services.png" alt="react__photo"/>
          <img className='image' src="https://img.stackshare.io/service/7374/react-redux.png" alt="Redux__Logo"/>
          <img className='image' src="data:image/png;base64,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" alt="Javascript__Logo"/>
          <img className='image' src="https://openwebsolutions.in/blog/wp-content/uploads/2018/01/banner-1.jpg" alt="HTML__CSS"/>
          <img className='image' src="https://www.bloorresearch.com/wp-content/uploads/2013/03/MONGO-DB-logo-300x470-.png" alt="MongoDB"/>
          <img className='image' src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png" alt="MYSQL__Logo"/>
          <img className='image' src="https://www.sqlsplus.com/wp-content/uploads/2020/09/NoSQL.jpg" alt="NoSQL__LOGO"/>
          <img className='image image__node' src="https://img.icons8.com/color/452/nodejs.png" alt="NodeJS__Logo"/>
          <img className='image image__express' src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" alt="Express__Logo"/>
        </div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
