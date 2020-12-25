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
          <img className='image' src="https://lh3.googleusercontent.com/proxy/C8pc0iJsLTG416MEgjvVsW4f1FDX-GMZi9BPtBEtpFkNnH2ZfqSvkEHNsQayd8Ryxgn6mwKJhN8vuQV8B7qXNbCabjx-M3LsUzSLGzC6oY1W96vpPzf8jU_NhzJYi_lU8F8ZshfNkiowh-9Phxe9ZOkrRA" alt="react__photo"/>
          <img className='image' src="https://img.stackshare.io/service/7374/react-redux.png" alt="Redux__Logo"/>
          <img className='image' src="https://lh3.googleusercontent.com/proxy/Yo2bE4bjCKnpVBYDsNAkIj_xP7XvprvFBn-clkXLgVJytijyBi2EPlJURF92oSTEnbuRtHgEjPxFHOhcN5D_CVfsLQg1TVQPcUjdwpbMbEyxMV7_X2F9Zb7I1vYWh-ZIObo5oJLpWUGvmQ" alt="Javascript__Logo"/>
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
