import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css';

export default function Profile() {
  return <div className="profile-container">
    <div className="profile-parent">
      <div className="profile-details">
        <div className="colz">
          <div className='colz-icon'>
          <a href="https://www.google.com">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.google.com">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href='https://www.google.com'>
            <i className="fa fa-instagram-square"></i>
          </a>
          </div>
          
        </div>
        <div className="profile-details-name">
          <span className='primary-text'>
            {''}
            Hello, I Am <span className='highlighted-text'>Mehtab Ali</span>

          </span>
        </div>
        <div className="profile-details-role">
          <span className='primary-text'>
            {" "}
            <h1>
              {" "}
              <Typical 
              loop={Infinity}
               steps={[
                 "Full Stack Developer",
                 1000,
                 "Mern Stack Developer",
                 1000,
                 "React/React Native Developer",
                 1000,]} />
            </h1>
            <span className="profile-role-tagline"> 
                Knack of building applications with front and back end operation.
            </span>
          </span>

        </div>
        <div className='profile-option'>
          <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
            Hire Me
          </button>
          <a href="mehtab-updatedd.docx" download='mehtab ali.docx'>
            <button className='btn highlighted-btn'>Get Resume</button>
          </a>
        </div>
        
      </div>
      <div className='profile-picture'>
          <div className='profile-picture-background'>
          </div>
        </div>
    </div>
  </div>;
}
