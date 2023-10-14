import "./style.css";
import my from './img/124.jpg'; // Import the image
export function Home() {
    return (
        <div>
            <div id="hero" class="hero route bg-image" style={{ backgroundColor: "black" }}>
                <div class="overlay-itro"></div>
                <div class="hero-content display-table">
                    <div class="table-cell">
                        <div class="container">
                            <h1 class="hero-title mb-4">Hello, I am Jnanendra</h1>
                            <p class="hero-subtitle"><span class="typed" data-typed-items="Designer, Developer, Photographer"></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function About() {
    return (
        <div>
            <section id="about" class="about-mf sect-pt4 route">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="box-shadow-full">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-sm-6 col-md-5">
                                                <div class="about-img">
                                                    <img src={my} class="img-fluid rounded b-shadow-a" alt="" />
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-md-7">
                                                <div class="about-info">
                                                    <p><span class="title-s">Name: </span> <span>Sampathirao<br />Venkata Jnanendra</span></p>
                                                    <p><span class="title-s">Profile: </span> <span>Full stack developer</span></p>
                                                    <p><span class="title-s">Email: </span> <span>jnanendra2003@gmail.com</span></p>
                                                    <p><span class="title-s">Phone: </span> <span>+91 8008 095 043</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="skill-mf">
                                            <p class="title-s">Skill</p>
                                            <span>HTML</span> <span class="pull-right">85%</span>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{
                                                    width: "85%", ariavaluenow: "85",
                                                    ariavaluemin: "0", ariavaluemax: "100"
                                                }}></div>
                                            </div>
                                            <span>CSS</span> <span class="pull-right">75%</span>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{
                                                    width: "75%", ariavaluenow: "75",
                                                    ariavaluemin: "0", ariavaluemax: "100"
                                                }}></div>
                                            </div>
                                            <span>JAVASCRIPT</span> <span class="pull-right">80%</span>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{
                                                    width: "80%", ariavaluenow: "80",
                                                    ariavaluemin: "0", ariavaluemax: "100"
                                                }}></div>
                                            </div>
                                            <span>REACT</span> <span class="pull-right">70%</span>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{
                                                    width: "70%", ariavaluenow: "70",
                                                    ariavaluemin: "0", ariavaluemax: "100"
                                                }}></div>
                                            </div>
                                            <span>JAVA</span> <span class="pull-right">85%</span>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{
                                                    width: "85%", ariavaluenow: "85",
                                                    ariavaluemin: "0", ariavaluemax: "100"
                                                }}></div>
                                            </div>
                                            <span>PYTHON</span> <span class="pull-right">70%</span>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{
                                                    width: "70%", ariavaluenow: "70",
                                                    ariavaluemin: "0", ariavaluemax: "100"
                                                }}></div>
                                            </div>
                                            <span>MySQL</span> <span class="pull-right">60%</span>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{
                                                    width: "60%", ariavaluenow: "60",
                                                    ariavaluemin: "0", ariavaluemax: "100"
                                                }}></div>
                                            </div>
                                            <span>MONGO DB</span> <span class="pull-right">60%</span>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{
                                                    width: "60%", ariavaluenow: "60",
                                                    ariavaluemin: "0", ariavaluemax: "100"
                                                }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="about-me pt-4 pt-md-0">
                                            <div class="title-box-2">
                                                <h5 class="title-left">
                                                    About me
                                                </h5>
                                            </div>
                                            <p class="lead">
                                                As a core student, I am passionate about using technology to solve real-world problems. I believe
                                                that technology has the potential to make a positive impact on many aspects of our lives, from
                                                healthcare and education to climate change and sustainability.
                                            </p>
                                            <p class="lead">
                                                I am particularly interested in using technology to develop innovative solutions to some of the
                                                most pressing challenges facing our world today. For example, I am interested in developing
                                                AI-powered tools to diagnose diseases more accurately and efficiently, create personalized
                                                learning experiences for students, and reduce our reliance on fossil fuels.
                                            </p>
                                            <p class="lead">
                                                I am committed to developing the skills and knowledge necessary to make a meaningful contribution
                                                to this field. I am also committed to staying up-to-date on the latest trends and technologies in
                                                order to develop the most effective solutions possible.

                                                I am excited to use my skills and passion to make a difference in the world, and I am confident
                                                that technology can help us to create a better future for all.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export function Education() {
    return (
        <div>
            <section id="Education" class="portfolio-mf sect-pt4 route">
                <div class="container">

                    <div class="section-title">
                        <h2>Education</h2>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <div class="Education-item">
                                <h4>Secondary Education
                                </h4>
                                <p><em>Sri Chaitanya Techno School, AP</em></p>
                                <h5>2018 - 2019</h5>
                                <p><em>GPA secured : 9.8 </em></p>


                            </div>


                            <div class="Education-item">
                                <h4>Intermediate </h4>
                                <p><em>Akash, Vizag, AP</em></p>
                                <h5>2019 - 2021</h5>
                                <p><em>MARKS secured : 850 </em></p>
                            </div>

                        </div>
                        <div class="col-lg-6">
                            <h3 class="Education-title">Bachelor of Technology</h3>
                            <div class="Education-item">
                                <h4>

                                    Vellore Institute of Technology

                                </h4>
                                <h5>2021 - Present</h5>
                                <p><em>GPA secured : 8.56 </em></p>
                                <p>
                                    <ul>
                                        <li>Designer
                                        </li>
                                        <li>Nominated as Designer on numerous occasions and also
                                            been complimented by supervisor or co-workers
                                        </li>
                                    </ul>
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export function Projects() {
    return (
        <div>
            <section class="section bg-custom-gray" id="portfolio">
                <div class="container">
                    <h1 class="mt-2"><b>MY PROJECTS</b> </h1>
                    <div class="portfolio">

                        <div class="portfolio-container">
                            <div class="row">
                                <div class="col-md-6 col-lg-4 web new">
                                    <div class="portfolio-item">
                                        <img src="https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F816e9a65e49d4f1cbce272f86a59890f%2Fprojects%2Fec51a1316a334b02b5b377588578773d%2Fac1a8ba5-0acd-4a26-b06d-1c33e59089a3.png&w=1440&q=75" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"  style={{width:"500px",height:"327px"}}/>
                                        <div class="content-holder">
                                            <a class="img-popup" href="assets/imgs/web-1.jpg"></a>
                                            <div class="text-holder">
                                                <h6 class="title">HOTSTAR CLONE</h6>
                                                <p class="subtitle">Cloning of HOTSTAR using HTML, CSS and JavaScript</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 web new">
                                    <div class="portfolio-item">
                                        <img src="https://techatronic.com/wp-content/uploads/2022/12/Screenshot-2022-12-30-at-11.46.10-AM-800x631.png" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                                        <div class="content-holder">
                                            <a class="img-popup" href="assets/imgs/web-2.jpg"></a>
                                            <div class="text-holder">
                                                <h6 class="title">FIRE FIGHTING ROBOT</h6>
                                                <p class="subtitle">Using Aurdino </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 advertising new">
                                    <div class="portfolio-item">
                                        <img src="https://content.instructables.com/F3E/CF90/J20PG5PP/F3ECF90J20PG5PP.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=27d6e658a0fa5483e6c3c64631aa108b" style={{width:"500px",height:"327px"}}/>
                                        <div class="content-holder">
                                            <a class="img-popup" href="assets/imgs/advertising-2.jpg"></a>
                                            <div class="text-holder">
                                                <h6 class="title">FLOOR CLEANING ROBOT</h6>
                                                <p class="subtitle">Using Aurdino</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}



