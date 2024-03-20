import { useState } from 'react';
import './testimonial.css';
// import pic0 from '../../assets/pic1.jpg';

const Testimonial = () => {

    const [ testInd, setTestInd ] = useState(0);

    const testimonials = [
        {
            id: 0,
            text: "I'm indeed getting an error, When I include both the libraries my combined JS file starts with jQuery and slick.js comes right after that.. I've also tried adding the library/libraries in the body of the desired page, but that gives the same error.",
            name: "Shalini Dubey",
            designation: "(Parent)",
            imgPath: '',
        },
        {
            id: 1,
            text: "I'm indeed getting an error, I include both the libraries my combined JS file starts with jQuery and slick.js comes right after that.. I've also tried adding the library/libraries in the body of the desired page, but that gives the same error.",
            name: "Ankita Sharma",
            designation: "(Parent)",
            imgPath: '',
        }
    ]

    const moveRight = (className) => {
        document.getElementsByClassName(className)[0].classList.add("moveRight");
        setTimeout(() => {
            document.getElementsByClassName(className)[0].classList.remove("moveRight");
        }, 500)
    }
    const moveLeft = (className) => {
        document.getElementsByClassName(className)[0].classList.add("moveLeft");
        setTimeout(() => {
            document.getElementsByClassName(className)[0].classList.remove("moveLeft");
        }, 500)
    }

    const increment = () => {
        setTimeout(() => {
            if(testInd>=testimonials.length-1) setTestInd(0);
            else setTestInd(testInd+1);
        }, 250)
        moveRight("testimonialText");
        moveRight("person");
    }
    const decrement = () => {
        setTimeout(() => {
            if(testInd<=0) setTestInd(testimonials.length-1);
            else setTestInd(testInd-1);
        }, 250)
        moveLeft("testimonialText");
        moveLeft("person");
    }

    return (
        <div style={{marginTop:150}}>
            <h1 style={{textAlign:'center'}}>Testimonials</h1>
            <div className="testimonial">
                <div className='container'>
                    <p className='testimonialText'>
                        "{testimonials[testInd].text}"
                    </p>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <span onClick={decrement}><i className="fa fa-4x fa-angle-left" style={{color:'#bbb'}}></i></span>
                        <div className="person" style={{
                                width: 200,
                                display:'flex', 
                                flexDirection:'column', 
                                justifyContent:'center', 
                                alignItems:'center',
                            }}>
                            <div>
                                <img className="pic" style={{borderRadius:"50%"}} src={`/assets/pic${testInd}.jpg`} alt="Logo" />    
                            </div><br />
                            <h5>{testimonials[testInd].name}</h5>
                            <h6>{testimonials[testInd].designation}</h6>
                        </div>
                        <span onClick={increment}><i className="fa fa-4x fa-angle-right" style={{color:'#bbb'}}></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;