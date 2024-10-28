import { Button } from '@/components/ui/button'
import React from 'react'


const page = () => {


  return (
    <div>
      <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
            <div className="nav w-nav">
                <div className="container">
                    <nav role="navigation" className="nav-menu">
                        <div >
                            <a href="/" aria-current="page" >
                              <img src="./notelo-bigicon.png" loading="lazy" alt="" className="logo" style={{ height: '150px', width: 'auto', marginTop: '5px' }}/>
                            </a>                          
                        </div>
                        <div >
                            <a href="/dashboard">
                                <Button size={'lg'}>Get Started</Button>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="w-slider-mask">
                <div className="w-slide">
                    <div className="hero-section">
                        <div className="hero-content">
                            <h1 className="hero-heading">
                                Analyze lectures and take notes at <span className="text-span-2">speed</span>
                            </h1>
                            <div className="hero-subheading">
                                End research headaches: Let AI handle summarizing, extracting data, and organizing papers at superhuman speed.<br/>
                            </div>
                            <div className="buttons-row">
                                <a href="/dashboard" className="cta-button w-inline-block">
                                    <Button  size={'lg'}>Get Started</Button>
                                </a>
                            </div>
                        </div>
                        <div className="bg-video-wrapper">
                            <div className="bg-gradient-to-r from-rose-100 to-teal-100"></div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div id="Features">
                <div className="section overflow">
                    <div className="container flex" style={{display: "flex"}}>
                        <div className="half-side left"  style={{flex: "1"}}>
                            <div className="div-block-10">
                                <div className="label">Discovery</div>
                                <div>
                                    <h2 className="section-heading">Upload papers and lectures</h2>
                                    <div className="section-subheading">
                                        Effortlessly transform lectures and papers into organized, editable notes with a single click<br/>
                                    </div>
                                </div>
                                <div className="feature-block">
                                    <div className="feature-icon-wrap">
                                        <div className="feature-icon w-embed">
                                            <svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 5V15H9V11C7.93913 11 6.92172 10.5786 6.17157 9.82843C5.42143 9.07828 5 8.06087 5 7C5 5.93913 5.42143 4.92172 6.17157 4.17157C6.92172 3.42143 7.93913 3 9 3H17V5H15V15H13V5H11ZM9 5C8.46957 5 7.96086 5.21071 7.58579 5.58579C7.21071 5.96086 7 6.46957 7 7C7 7.53043 7.21071 8.03914 7.58579 8.41421C7.96086 8.78929 8.46957 9 9 9V5ZM17 17V14.5L21 18L17 21.5V19H5V17H17Z" fill="currentColor"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="feature-heading">
                                        Click on "generate" to create organized notes and summaries.<br/>
                                    </h3>
                                </div>
                                <div className="feature-block">
                                    <div className="feature-icon-wrap">
                                        <div className="feature-icon w-embed">
                                            <svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 4H5V20H19V8H15V4ZM3 2.992C3 2.444 3.447 2 3.999 2H16L21 7V20.993C21.0009 21.1243 20.976 21.2545 20.9266 21.3762C20.8772 21.4979 20.8043 21.6087 20.7121 21.7022C20.6199 21.7957 20.5101 21.8701 20.3892 21.9212C20.2682 21.9723 20.1383 21.9991 20.007 22H3.993C3.73038 21.9982 3.47902 21.8931 3.29322 21.7075C3.10742 21.5219 3.00209 21.2706 3 21.008V2.992ZM13.529 14.446C12.6903 14.936 11.7021 15.1043 10.7485 14.9195C9.79488 14.7346 8.94106 14.2093 8.34623 13.4414C7.75139 12.6735 7.45614 11.7154 7.51553 10.7459C7.57492 9.77639 7.98489 8.86156 8.669 8.172C9.35745 7.48368 10.2733 7.07006 11.2449 7.00865C12.2165 6.94725 13.1771 7.24228 13.9467 7.83845C14.7163 8.43463 15.2421 9.29101 15.4255 10.2471C15.6089 11.2032 15.4374 12.1934 14.943 13.032L17.153 15.242L15.739 16.657L13.529 14.447V14.446ZM12.911 12.414C13.102 12.2295 13.2544 12.0088 13.3592 11.7648C13.464 11.5208 13.5192 11.2584 13.5215 10.9928C13.5238 10.7272 13.4732 10.4639 13.3726 10.2181C13.2721 9.9723 13.1236 9.749 12.9358 9.56121C12.748 9.37342 12.5247 9.22492 12.2789 9.12436C12.0331 9.02379 11.7698 8.97319 11.5042 8.9755C11.2386 8.97781 10.9762 9.03298 10.7322 9.1378C10.4882 9.24262 10.2675 9.39498 10.083 9.586C9.71868 9.9632 9.5171 10.4684 9.52165 10.9928C9.52621 11.5172 9.73655 12.0188 10.1074 12.3896C10.4782 12.7605 10.9798 12.9708 11.5042 12.9753C12.0286 12.9799 12.5338 12.7783 12.911 12.414V12.414Z" fill="currentColor"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="feature-heading">
                                        Review notes and make any necessary edits.<br/>
                                    </h3>
                                </div>
                                <div className="feature-block">
                                    <div className="feature-icon-wrap">
                                        <div className="feature-icon w-embed">
                                            <svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 8H20V5H4V8ZM14 19V10H10V19H14ZM16 19H20V10H16V19ZM8 19V10H4V19H8ZM3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3V3Z" fill="currentColor"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="feature-heading">
                                        Save or export the notes for future use.<br/>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="half-side right"  style={{flex: '1'}}>
                            <div className="div-block-11">
                                <div className="label">Synthesis</div>
                                <h2 className="section-heading">Extract key points and themes from lectures.</h2>
                                <div className="section-subheading">
                                    organizing notes into clear and concise summaries. Identify and highlight important concepts and details, and combine multiple lecture notes to find overarching themes and concepts. Get a synthesized summary of lecture content across different sessions or subjects.<br/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            <div className="section less-top">
                <div className="container">
                    <div className="section-header-wrap">
                        <div className="label">Features</div>
                        <h2 className="section-heading">Tons of features to speed up your research</h2>
                    </div>
                    <div className="features-cards">
                        <div className="feature-card-block">
                            <div data-w-id="a6041903-efde-fbac-57f1-c835a53656db" className="feature-cards">
                            <div style={{ borderColor: 'rgb(235,236,237)' }} className="upload-outline">
                            <div className="pdf-icon">
                                        <div className="upload-icon w-embed">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M248,128a87.34,87.34,0,0,1-17.6,52.81,8,8,0,1,1-12.8-9.62A71.34,71.34,0,0,0,232,128a72,72,0,0,0-144,0,8,8,0,0,1-16,0,88,88,0,0,1,3.29-23.88C74.2,104,73.1,104,72,104a48,48,0,0,0,0,96H96a8,8,0,0,1,0,16H72A64,64,0,1,1,81.29,88.68,88,88,0,0,1,248,128Zm-90.34-5.66a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L144,147.31V208a8,8,0,0,0,16,0V147.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="drag-text">Drag and drop PDFs here</div>
                                    <div className="click-to-browse">or click to browse</div>
                                    <div className="uploaded-doc-graphic">
                                        <div className="document-icon white w-embed">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"></path>
                                            </svg>
                                        </div>
                                        <div className="text-block-13">physics.pdf</div>
                                        <img src="https://cdn.prod.website-files.com/6516f50e7a19045d3d7b12f2/65170b9ffe2476bf79d172ec_closedhand.svg" loading="lazy" alt="" className="grab-hand"/>
                                    </div>
                                    <div style={{opacity:'0'}} className="upload-bg"></div>
                                </div>
                                <div className="uploaded-document">
                                    <div className="align-row">
                                        <div className="document-icon w-embed">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"></path>
                                            </svg>
                                        </div>
                                        <div className="text-block-14">chemistry.pdf</div>
                                    </div>
                                    <div className="close-icon w-embed">
                                        <svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.0002 10.586L16.9502 5.63599L18.3642 7.04999L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.04999L7.05023 5.63599L12.0002 10.586Z" fill="currentColor"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="uploaded-document">
                                    <div className="align-row">
                                        <div className="document-icon w-embed">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"></path>
                                            </svg>
                                        </div>
                                        <div>Biology.pdf</div>
                                    </div>
                                    <div className="close-icon w-embed">
                                        <svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.0002 10.586L16.9502 5.63599L18.3642 7.04999L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.04999L7.05023 5.63599L12.0002 10.586Z" fill="currentColor"/>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="card-heading">

                                    Upload your own PDFs<br/>
                                </h3>
                            </div>
                        </div>
                        <div data-w-id="c9ddbd33-26a5-3631-b928-8574c682a1ef" className="feature-card-block">
                            <div data-w-id="c9ddbd33-26a5-3631-b928-8574c682a1f0" className="feature-cards quick-summary">
                                <h3 className="card-heading">
                                    Quick summary for your Lectures<br/>
                                </h3>
                                <div className="how-to-improve-page">
                                    <div className="search-row">
                                        <div className="search-circle">
                                            <div className="search-icon w-embed">
                                                <svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875V15.875Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-block-2">What is photon superposition?</div>
                                    </div>
                                    <div className="mock-paper-text">
                                        Photon superposition is a fundamental concept in quantum mechanics where a photon, the basic unit of light, exists simultaneously in multiple states or modes until it is measured. (<span className="text-span-4">APS Link</span>
                                        ). his means that a photon can exhibit different properties, such as being in multiple locations or having different polarizations, at the same time. (<span className="text-span-3">ar5iv</span>)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-card-block">
                            <div data-w-id="295f4bbc-56a4-d6ea-6600-b522f8e43d03" className="feature-cards view-sources">
                                <h3 className="card-heading">
                                    View sources for every answer<br/>
                                </h3>
                                <div className="source-quotes">
                                    <div className="sources-top">
                                        <div className="left-align-row">
                                            <div className="text-block">Source Quotes</div>
                                            <div className="arrows-row">
                                                <div className="arrow-circle">
                                                    <div className="toggle-arrow-icon w-embed">
                                                        <svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.63599L15.778 7.04999L10.828 12Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="_1of2">
                                                    1 <span className="of-mid">of</span>
                                                    2
                                                </div>
                                                <div className="arrow-circle">
                                                    <div className="toggle-arrow-icon w-embed">
                                                        <svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.1722 12L8.22217 7.04999L9.63617 5.63599L16.0002 12L9.63617 18.364L8.22217 16.95L13.1722 12Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right-align-row">
                                            <div className="open-paper-button">
                                                <div className="text-block-15">Open paper</div>
                                                <div className="diagonal-arrow-icon w-embed">
                                                    <svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414V9.414Z" fill="currentColor"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="close-x-icon w-embed">
                                                <svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.0002 10.586L16.9502 5.63599L18.3642 7.04999L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.04999L7.05023 5.63599L12.0002 10.586Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-mock">
                                        <div style={{opacity:'0'}} className="mock-results-text">
                                            “A meta-analysis of 30 randomized, double-blind, placebo-controlled trials concluded that fish oil consumption can significantly reduce heart rate (<span className="text-span-5">Mozaffarian 2005</span>
                                            ). In particular, the effect was greater in people whose baseline heart rate was higher: in the overall pooled estimate, fish oil decreased heart rate by 1.6 bpm compared to placebo, but reduced heart rate by 2.5 bpm in trials with a median baseline heart rate of ≥ 69 bpm. Furthermore, the ability of fish oil to reduce heart rate appeared to depend on the length of treatment.
                                        </div>
                                        <div className="top-gradient bottom"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-card-block">
                            <div data-w-id="395c37b5-50d3-9c6e-75bb-98167c6fcec5" className="feature-cards stacked">
                                <h3 className="card-heading">
                                    Ask questions to papers<br/>
                                </h3>
                                <div className="ask-question-text">
                                    <div className="prod-mock-card">
                                        <div className="ask-question">Ask a question</div>
                                        <div className="form-field">
                                            <div className="search-term">What was the equation used?</div>
                                            <div style={{opacity:'0.1'}} className="go-arrow-block">
                                                <div className="go-arrow-icon w-embed">
                                                    <svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.172 10.9999L10.808 5.63592L12.222 4.22192L20 11.9999L12.222 19.7779L10.808 18.3639L16.172 12.9999H4V10.9999H16.172Z" fill="currentColor"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mock-search-text">In the research paper discussing high photon number entangled states and coherent state superposition, several equations are used to describe the states and transformations involved. One of the key equations is:

                                        ∣
                                        Ψ
                                        ⟩
                                        =
                                        ∑
                                        𝑛
                                        =
                                        0
                                        ∞
                                        𝑐
                                        𝑛
                                        ∣
                                        𝑛
                                        ⟩
                                        ∣Ψ⟩=∑ 
                                        n=0
                                        ∞
                                        ​
                                         c 
                                        n
                                        ​
                                         ∣n⟩
                                        
                                        This represents the superposition of photon number states, wherecn are the coefficients that describe the probability amplitudes of having n photons in the state.</div>
                                </div>
                                <div className="top-gradient bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default page