/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import Link from 'next/link'

import IndexNavbar from 'components/Navbars/IndexNavbar.js'
import Footer from 'components/Footers/Footer.js'

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className='header relative pt-16 items-center flex h-screen max-h-860-px'>
        <div className='container w-10/12 mx-auto items-center flex flex-wrap'>
          <div className='w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4'>
            <div className='pt-32 sm:pt-0'>
              <h2 className='font-semibold text-4xl text-blueGray-600'>
                Hi, I'm Jonathan,
                <br /> aka - Jon.S the Web Guy,
              </h2>
              <p className='mt-4 text-lg leading-relaxed text-blueGray-500'>
                A Girls Dad 👯‍♀️, a husband, a trainer/speaker and a Full Stack Software Engineer, with serious experience in web and mobile
                development. I am a JavaScript enthusiast working mostly with the MERN stack (Mongo, Express, React, Node) + React Native + Expo 😎
              </p>
              <br />
              <i className='pt-3 text-sm leading-relaxed text-blueGray-500'>
                I love community building, mentoring and developing awesome applications with good UX/UI design. Adore dogs, and play drums in rock
                pop local Palm Beach Band
              </i>

              <div className='mt-12'>
                <a
                  href='https://www.linkedin.com/in/jonathansanchez199/'
                  target='_blank'
                  className='get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'>
                  Linkedin
                </a>
                <a
                  href='https://github.com/jonathans199'
                  className='github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg'
                  target='_blank'>
                  Github
                </a>
                <a
                  href='https://medium.com/@jonathans199'
                  className='github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg'
                  target='_blank'>
                  Medium
                </a>
              </div>
            </div>
          </div>
          <img
            className='hidden lg:block absolute top-100 b-auto right-0 md:w-6/12 w-10/12 max-h-760-px hero-image '
            src='/img/jonsthewebguy.jpg'
            alt='...'
          />
        </div>
      </section>

      <section className='mt-48 md:mt-40 pb-40 relative bg-blueGray-100'>
        <div className='-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20' style={{ transform: 'translateZ(0)' }}>
          <svg
            className='absolute bottom-0 overflow-hidden'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            version='1.1'
            viewBox='0 0 2560 100'
            x='0'
            y='0'>
            <polygon className='text-blueGray-100 fill-current' points='2560 0 2560 100 0 100'></polygon>
          </svg>
        </div>
        <div className='container mx-auto'>
          <div className='flex flex-wrap items-center'>
            <div className='w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700'>
                <img
                  alt='...'
                  src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
                  className='w-full align-middle rounded-t-lg'
                />
                <blockquote className='relative p-8 mb-4'>
                  <svg
                    preserveAspectRatio='none'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 583 95'
                    className='absolute left-0 w-full block h-95-px -top-94-px'>
                    <polygon points='-30,95 583,95 583,65' className='text-blueGray-700 fill-current'></polygon>
                  </svg>
                  <h4 className='text-xl font-bold text-white'>Specialization is key</h4>
                  <p className='text-md font-light mt-2 text-white'>
                    Is almost impossible to be good at everything, so I've decided to really hone my skills in the JS language, frameworks &amp;
                    libraries. And let the hairstylist focus on making people look good... for example :)
                  </p>
                </blockquote>
              </div>
            </div>

            <div className='w-full md:w-6/12 px-4'>
              <div className='flex flex-wrap'>
                <div className='w-full md:w-6/12 px-4'>
                  <div className='relative flex flex-col mt-4'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-sitemap'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>Front-End Dev</h6>
                      <p className='mb-4 text-blueGray-500'>A true fan of React to build, fast, secure, robust, and scalable user interfaces</p>
                    </div>
                  </div>
                  <div className='relative flex flex-col min-w-0'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-drafting-compass'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>Back-End Dev</h6>
                      <p className='mb-4 text-blueGray-500'>Developed countless APIs in Node.js with Mongo &amp; MySQL databases</p>
                    </div>
                  </div>
                  <div className='relative flex flex-col min-w-0'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-bullhorn'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>Speaker & Trainer</h6>
                      <p className='mb-4 text-blueGray-500'>
                        Love giving talks about tech, whether is about React Native, Expo or Next.js, my talks are very informative and engaging for
                        any audience
                      </p>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-6/12 px-4'>
                  <div className='relative flex flex-col min-w-0 mt-4'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-newspaper'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>Mobile Development</h6>
                      <p className='mb-4 text-blueGray-500'>
                        Built and released more than 10 mobile apps to Apple / Google play stores, in React Native and Vue with Cordova.
                      </p>
                    </div>
                  </div>
                  <div className='relative flex flex-col min-w-0'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-file-alt'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>Cloud Services</h6>
                      <p className='mb-4 text-blueGray-500'>AWS is my confort zone, although really enjoying Firebase within GCP.</p>
                    </div>
                  </div>
                  <div className='relative flex flex-col min-w-0'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-code'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>Tutorials & Articles</h6>
                      <p className='mb-4 text-blueGray-500'>Checkout my tutorials and medium articles about different topics and technologies</p>
                      <a
                        href='https://medium.com/@jonathans199'
                        target='_blank'
                        className='font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150'>
                        https://medium.com/@jonathans199
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container mx-auto overflow-hidden pb-20'>
          <div className='flex flex-wrap items-center'>
            {/* <div className='w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48'>
              <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                <i className='fas fa-sitemap text-xl'></i>
              </div>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>CSS Components</h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can have
                different colours.
              </p>
              <div className='block pb-6'>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Buttons
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Inputs
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Labels
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Menus
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Navbars
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Pagination
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Progressbars
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Typography
                </span>
              </div>
              <a
                href='https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index'
                target='_blank'
                className='font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150'>
                View All <i className='fa fa-angle-double-right ml-1 leading-relaxed'></i>
              </a>
            </div> */}

            {/* <div className='w-full md:w-5/12 px-4 mr-auto ml-auto mt-32'>
              <div className='relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0'>
                <img
                  alt='...'
                  src='/img/component-btn.png'
                  className='w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3'
                />
                <img
                  alt='...'
                  src='/img/component-profile-card.png'
                  className='w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px'
                />
                <img
                  alt='...'
                  src='/img/component-info-card.png'
                  className='w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2'
                />
                <img
                  alt='...'
                  src='/img/component-info-2.png'
                  className='w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px'
                />
                <img
                  alt='...'
                  src='/img/component-menu.png'
                  className='w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px'
                />
                <img
                  alt='...'
                  src='/img/component-btn-pink.png'
                  className='w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px'
                />
              </div>
            </div> */}
          </div>

          <div className='flex flex-wrap items-center pt-32'>
            <div className='w-full md:w-6/12 px-4 mr-auto ml-auto mt-32'>
              <div className='justify-center flex flex-wrap relative'>
                <div className='my-4 w-full lg:w-6/12 px-4'>
                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>
                    <div className='bg-yellow-500 shadow-lg rounded-lg text-center p-8'>
                      <img
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                        src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png'
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>JavaScript</p>
                    </div>
                  </a>
                  <a href='https://reactjs.org/' target='_blank'>
                    <div className='bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8'>
                      <img
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                        src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg'
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>ReactJS</p>
                    </div>
                  </a>

                  <a href='https://nextjs.org/' target='_blank'>
                    <div className='bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8'>
                      <img
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                        src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg'
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>NextJS</p>
                    </div>
                  </a>
                </div>
                <div className='my-4 w-full lg:w-6/12 px-4 lg:mt-16'>
                  <a href='https://nodejs.org/en/' target='_blank'>
                    <div className='bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8'>
                      <img alt='...' className='shadow-md rounded-full max-w-full w-16 mx-auto p-4 bg-white' src='/img/nodejs.png' />
                      <p className='text-lg text-white mt-4 font-semibold'>Node.JS</p>
                    </div>
                  </a>
                  <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank'>
                    <div className='bg-red-400 shadow-lg rounded-lg text-center p-8 mt-8'>
                      <img alt='...' className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white' src='/img/html-css.png' />
                      <p className='text-lg text-white mt-4 font-semibold'>HTML / CSS</p>
                    </div>
                  </a>
                  <a href='https://vuejs.org/' target='_blank'>
                    <div className='bg-emerald-400 shadow-lg rounded-lg text-center p-8 mt-8'>
                      <img
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                        src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg'
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>Vue.js</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className='w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48'>
              <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                <i className='fas fa-drafting-compass text-xl'></i>
              </div>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>More about my tech stack</h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                Building full blown application, requires wearing lots of hats, from the domain registration, the hosting of the API, the web
                application, testing, deployment, continuous integration all the way to release and delivery of app.
              </p>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                If I can't build it by self, I love working with teams and collaborate on the project.
              </p>
              <div className='block pb-6'>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  #AWS
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  #Git
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  #CI / CD
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  #Agile
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  #Bootstrap
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  #SASS / SCSS
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  #Testing
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  #Firebase
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  #Serverless
                </span>
              </div>
              <a href='#' target='_blank' className='font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150'>
                More info <i className='fa fa-angle-double-right ml-1 leading-relaxed'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='container mx-auto px-4 pb-32 pt-48'>
          <div className='items-center flex flex-wrap'>
            <div className='w-full md:w-5/12 ml-auto px-12 md:px-4'>
              <div className='md:pr-12'>
                <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                  <i className='fas fa-bicycle text-xl'></i>
                </div>
                <h3 className='text-3xl font-semibold'>Pedals App</h3>
                <p className='mt-4 text-lg leading-relaxed text-blueGray-500'>Earn money by selling your bikes and gear locally.</p>
                <p className='mt-4 text-lg leading-relaxed text-blueGray-500'>
                  Sellers create accounts, authenticate and upload products with images and information. Buyers browse products, chat with sellers and
                  arrange the puchase.
                </p>
                <ul className='list-none mt-6'>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-2'>
                          <i className='fa fa-atom'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>Build with React Native</h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='fab fa-node-js'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>Back-end in Node.js and Firebase Cloud Functions</h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='fa fa-bell'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500 text-xs'>Push Notifications / Product uploading / Authentication / Analytics </h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='far fa-paper-plane'></i>
                        </span>
                      </div>
                      <div>
                        <p className='text-blueGray-500 text-xs'>Designed by Ande Schultz</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className='w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0'>
              <img
                alt='...'
                className='max-w-full rounded-lg shadow-xl'
                style={{
                  transform: 'scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)',
                }}
                src='/img/pedals.png'
              />
            </div>
          </div>
        </div>

        <div className='container mx-auto px-4 pb-32 pt-48'>
          <div className='items-center flex flex-wrap'>
            <div className='w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0'>
              <img
                alt='...'
                className='max-w-full rounded-lg shadow-xl'
                style={{
                  transform: 'scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)',
                }}
                src='/img/caseyresearch.png'
              />
            </div>

            <div className='w-full md:w-5/12 ml-auto px-12 md:px-4'>
              <div className='md:pr-12'>
                <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                  <i className='fas fa-file-alt text-xl'></i>
                </div>
                <h3 className='text-3xl font-semibold'>Casey Research</h3>
                <p className='mt-4 text-lg leading-relaxed text-blueGray-500'>
                  Subscribers can use the official mobile app for Casey Research to access all their subscriptions, view portfolio pages, and more.
                  <br />
                  <br />
                  Utilizing push notifications, subscribers who use the Casey Research app will be instantly notified whenever Casey publishes
                  something new, including updates, alerts, and monthly issues.
                </p>
                <ul className='list-none mt-6'>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='fas fa-fingerprint'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>Built with VUE with Cordova wrapper</h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='fab fa-html5'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>Released to Apple and Google play store</h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='far fa-paper-plane'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>Dynamic Javascript Components</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='container mx-auto px-4 pb-32 pt-48'>
          <div className='items-center flex flex-wrap'>
            <div className='w-full md:w-5/12 ml-auto px-12 md:px-4'>
              <div className='md:pr-12'>
                <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                  <i className='fas fa-bicycle text-xl'></i>
                </div>
                <h3 className='text-3xl font-semibold'>Pedals App</h3>
                <p className='mt-4 text-lg leading-relaxed text-blueGray-500'>Earn money by selling your bikes and gear locally.</p>
                <p className='mt-4 text-lg leading-relaxed text-blueGray-500'>
                  Sellers create accounts, authenticate and upload products with images and information. Buyers browse products, chat with sellers and
                  arrange the puchase.
                </p>
                <ul className='list-none mt-6'>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-2'>
                          <i className='fa fa-atom'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>Build with React Native</h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='fab fa-node-js'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>Back-end in Node.js and Firebase Cloud Functions</h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='fa fa-bell'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500 text-xs'>Push Notifications / Product uploading / Authentication / Analytics </h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='far fa-paper-plane'></i>
                        </span>
                      </div>
                      <div>
                        <p className='text-blueGray-500 text-xs'>Designed by Ande Schultz</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className='w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0'>
              <img
                alt='...'
                className='max-w-full rounded-lg shadow-xl'
                style={{
                  transform: 'scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)',
                }}
                src='/img/pedals.png'
              />
            </div>
          </div>
        </div> */}

        <div className='justify-center text-center flex flex-wrap mt-24'>
          <div className='w-full md:w-6/12 px-12 md:px-4'>
            <h2 className='font-semibold text-4xl'>Other Projects</h2>
            <p className='text-lg leading-relaxed mt-4 mb-4 text-blueGray-500'>
              Notus NextJS is a completly new product built using our past experience in web templates. Take the examples we made for you and start
              playing with them.
            </p>
          </div>
        </div>
      </section>

      <section className='block relative z-1 bg-blueGray-600'>
        <div className='container mx-auto'>
          <div className='justify-center flex flex-wrap'>
            <div className='w-full lg:w-12/12 px-4  -mt-24'>
              <div className='flex flex-wrap'>
                <div className='w-full lg:w-4/12 px-4'>
                  <h5 className='text-xl font-semibold pb-4 text-center'>Icp Miami Public Web</h5>
                  <Link href='/auth/login'>
                    <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                      <img alt='...' className='align-middle border-none max-w-full h-auto rounded-lg' src='/img/icpmiami.jpeg' />
                    </div>
                  </Link>
                </div>
                <div className='w-full lg:w-4/12 px-4'>
                  <h5 className='text-xl font-semibold pb-4 text-center'>Icp Miami Back Office</h5>
                  <Link href='/auth/login'>
                    <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                      <img alt='...' className='align-middle border-none max-w-full h-auto rounded-lg' src='/img/icp-mexico.jpeg' />
                    </div>
                  </Link>
                </div>

                <div className='w-full lg:w-4/12 px-4'>
                  <h5 className='text-xl font-semibold pb-4 text-center'>Ways Mobile App</h5>
                  <Link href='/landing'>
                    <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                      <img alt='...' className='align-middle border-none max-w-full h-auto rounded-lg' src='/img/ways.jpeg' />
                    </div>
                  </Link>
                </div>
                <div className='w-full lg:w-4/12 px-4'>
                  <h5 className='text-xl font-semibold pb-4 text-white text-center'>All Inclusive Party Rental</h5>
                  <Link href='/profile'>
                    <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                      <img alt='...' className='align-middle border-none max-w-full h-auto rounded-lg' src='/img/allinclusive.jpeg' />
                    </div>
                  </Link>
                </div>

                <div className='w-full lg:w-4/12 px-4'>
                  <h5 className='text-xl font-semibold pb-4 text-white text-center'>Trading Waves</h5>
                  <Link href='/landing'>
                    <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                      <img alt='...' className='align-middle border-none max-w-full h-auto rounded-lg' src='/img/trading-waves.jpeg' />
                    </div>
                  </Link>
                </div>
                <div className='w-full lg:w-4/12 px-4'>
                  <h5 className='text-xl font-semibold pb-4 text-white text-center'>Infinity Dance Studio</h5>
                  <Link href='/landing'>
                    <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                      <img alt='...' className='align-middle border-none max-w-full h-auto rounded-lg' src='/img/ids.jpeg' />
                    </div>
                  </Link>
                </div>

                <div className='w-full lg:w-4/12 px-4'>
                  <h5 className='text-xl font-semibold text-white pb-4 text-center'>Master Miner Backoffice</h5>
                  <Link href='/landing'>
                    <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                      <img alt='...' className='align-middle border-none max-w-full h-auto rounded-lg' src='/img/master-miner.jpeg' />
                    </div>
                  </Link>
                </div>
                <div className='w-full lg:w-4/12 px-4'>
                  <h5 className='text-xl font-semibold text-white pb-4 text-center'>Logos & Designs</h5>
                  <Link href='/landing'>
                    <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                      <img alt='...' className='align-middle border-none max-w-full h-auto rounded-lg' src='/img/logos.jpeg' />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-blueGray-600 overflow-hidden'>
        <div className='container mx-auto pb-64'>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64'>
              <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                <i className='fas fa-code-branch text-xl'></i>
              </div>
              <h3 className='text-3xl mb-2 font-semibold leading-normal text-white'>Lets collaborate</h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400'>
                I'm really passionate about Open Source projects. This is where I'm able to give back to an industry that has given so much for me.
              </p>
              <p className='text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400'>
                Have an <b> Open Source</b> project and need some extra hands?
              </p>
              <a
                href='https://github.com/jonathans199'
                target='_blank'
                className='github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg'>
                Let's Connect
              </a>
            </div>

            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative'>
              <i className='fab fa-github text-blueGray-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80'></i>
            </div>
          </div>
        </div>
      </section>

      <section className='pb-16 bg-blueGray-200 relative pt-32'>
        <div className='-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20' style={{ transform: 'translateZ(0)' }}>
          <svg
            className='absolute bottom-0 overflow-hidden'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            version='1.1'
            viewBox='0 0 2560 100'
            x='0'
            y='0'>
            <polygon className='text-blueGray-200 fill-current' points='2560 0 2560 100 0 100'></polygon>
          </svg>
        </div>

        <div className='container mx-auto'>
          <div className='flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10'>
            <div className='w-full text-center lg:w-8/12'>
              <p className='text-4xl text-center'>
                <span role='img' aria-label='love'>
                  😍
                </span>
              </p>
              <h3 className='font-semibold text-3xl'>Need a human to help you with your Software? </h3>
              <p className='text-blueGray-500 text-lg leading-relaxed mt-4 mb-4'>
                If you do, I'm a Human Being who happen to be a programmer that could help you with your Applications.
              </p>
              <div className='sm:block flex flex-col mt-10'>
                <a
                  href='https://www.linkedin.com/in/jonathansanchez199/'
                  target='_blank'
                  className='get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'>
                  Linkedin
                </a>
                <a
                  href='https://github.com/jonathans199'
                  target='_blank'
                  className='github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg'>
                  <i className='fab fa-github text-lg mr-1'></i>
                  <span>See my repos</span>
                </a>
              </div>
              <div className='text-center mt-16'></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
