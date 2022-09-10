import React from 'react'
import './about.css'
import ABOUTME from '../../assets/about-me.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ABOUTME} alt='Me' />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>100+ Clients Worldwide</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>125+ Completed Projects</small>
                        </article>
                    </div>

                    <p>Hi, I'm Azim and I'm a Computer Science and Engineering Graduate. Previously I worked as a WordPress Theme Developer at a IT Company. I washighly interested to switch to career track to a Fullstack Developer by Learning React and Django. So I left the job and purchased fullstack web development course. And nowadays I belive that I'm ready to get hired as a Fullstack Developer.</p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About