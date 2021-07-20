import React,{useState, useEffect} from 'react';
import Navbar from './Navbar';
import sample from "../asserts/images/sample.png";
import Slider from "react-slick";
import swiflearn5 from "../asserts/images/swiflearn5.png";
import swiflearn6 from "../asserts/images/swiflearn6.png";
import swiflearn7 from "../asserts/images/swiflearn7.png";
import swiflearn8 from "../asserts/images/swiflearn8.png";
import swiflearn9 from "../asserts/images/swiflearn9.png";
import "../asserts/scss/Dashboard.scss";
import tutor from "../asserts/images/tutor.png";
import ReactPlayer from 'react-player'

const videos= ['https://youtu.be/nRPJC7K0miU',
              'https://youtu.be/JgenG0tgQAo',
              'https://youtu.be/Tr-TVt5JAWY',
              'https://youtu.be/L88uuqmAioU',
              'https://youtu.be/BtU1Z0PCq4I']

const images = [swiflearn7, swiflearn8, swiflearn9, swiflearn6, swiflearn5,swiflearn6, swiflearn5];

const classArray = [{ name:'Atul Patel',class:'12',topic:'P & C'},{ name:'Rahul Modi',class:'12',topic:'Conic Section'},
                    { name:'Rajat Kumar',class:'12',topic:'Organic Chemistry'},{ name:'Mayank Kumar',class:'12',topic:'NLM'},
                    { name:'Atul Patel',class:'11',topic:'P & C'},{ name:'Rahul Modi',class:'11',topic:'Conic Section'},
                    { name:'Rajat Kumar',class:'11',topic:'P-Block'},{ name:'Atul Patel',class:'10',topic:'Circle'},
                    { name:'Rajat Kumar',class:'10',topic:'Reproduction'},{ name:'Atul Patel',class:'10',topic:'topic 1'},
                    { name:'Atul Patel',class:'9',topic:'P & C'},{ name:'Tutor 1',class:'9',topic:'P & C'},
                    { name:'Tutor 2',class:'9',topic:'P & C'},{ name:'Tutor 1',class:'8',topic:'P & C'},
                    { name:'Tutor 2',class:'8',topic:'P & C'},{ name:'Tutor 3',class:'8',topic:'P & C'},
                    { name:'Tutor 1',class:'7',topic:'P & C'}, { name:'Tutor 2',class:'7',topic:'P & C'},
                    { name:'Tutor 3',class:'7',topic:'P & C'},{ name:'Tutor 1',class:'6',topic:'P & C'},
                    { name:'Tutor 2',class:'6',topic:'P & C'},{ name:'Tutor 3',class:'6',topic:'P & C'},
                    { name:'Tutor 1',class:'5',topic:'P & C'},{ name:'Tutor 2',class:'5',topic:'P & C'},
                    { name:'Tutor 3',class:'5',topic:'P & C'},];

const allGrade = [5,6,7,8,9,10,11,12];

const Dashboard = () => {
    const [grade, setGrade] = useState(11);
    const [allClasses, setAllClasses]= useState([]);

    useEffect(()=>{
        const temp = classArray.filter((t) => t.class.toString() === grade.toString());
        setAllClasses(temp);
    },[grade]);

    const liveClasses = allClasses.map((t) => (
        <div className="live-card">
            <div className="content">
            <div><img src={tutor} /></div>
            <div className="header">
            <div className="class-no"><span>Class : </span>{t.class}</div><div className="live">Live</div>   
           <div className="tutor-name">{t.name}</div>
           <div className="subject-live">Topic : {t.topic}</div>
          </div>
           </div>
           
           <div className="live-card-buttons">
           <hr className="below-subject"></hr>
               
               <button type="button" className="btn btn-large joinbtn"   > Join Now</button>
               
           </div>
        </div>
    ));

    const handleClick = (id) =>{
        setGrade(id);
    }
    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
           <i class="fas fa-arrow-circle-right"></i>

          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <i class="fas fa-arrow-circle-left"></i>
          </div>
        );
      };
    
      const [imageIndex, setImageIndex] = useState(0);
    
      const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
        centerMode: true,
        centerPadding: 0,
        autoplay:true,
        autoplaySpeed:2000,
        adaptiveHeight:true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
      };

      const[liveC, setLive]=useState(true);
      
      const handleClick1=() =>{
        setLive(!liveC);
        }

    
    return (
        <div>
            <Navbar />
            <div className="concept fluid-container">
            <h1>Concept Videos</h1>
            
            <div className="video-part">
            <Slider {...settings}>
                {videos.map((url, idx) => (
                <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                    <ReactPlayer className="videos-img" width="400px" height="300px" controls url={url} />
                </div>
            ))}
            </Slider>
            </div>

            <div className="classes">
                <h1>Live Classes</h1>
                <div className="class-btn">

                { allGrade.map((t) =>{
                    if(t === grade){
                        return <button className="btn btn-large grade selected" onClick={() => handleClick(t)}>{t}th</button>
                    }
                    else{
                        return <button className="btn btn-large grade" onClick={() => handleClick(t)}>{t}th</button>
                    }
                })}
                </div>

                <div className="selected-tab">
                <div class="livenow">
                <div className="live-now-div"></div>
                <div type="button" className="live-all" onClick={handleClick1}>{liveC? <h4>View All</h4>:<h4>Go Back</h4>}</div>
                </div>
                { liveC ? <div className="tutor-cards">
                {liveClasses[0]}{liveClasses[1]}
                </div>:<div className="tutor-cards">
                {liveClasses}
                </div>}
                </div>
            </div>
      </div>
        </div>
    )
}

export default Dashboard
