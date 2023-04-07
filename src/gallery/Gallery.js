import { useState } from "react";
import './gallery.css';

const Gallery = () => {
    const [ testInd, setTestInd ] = useState(0);

    const videos = [
        {
            id: 0,
            url: "https://www.youtube.com/embed/kZpIuG4n7Hk"
        },
        {
            id: 1,
            url: "https://www.youtube.com/embed/nx9_bqxZjRs"
        },
        {
            id: 2,
            url: "https://www.youtube.com/embed/-arh-e3fLnY"
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
        if(testInd>=videos.length-1) setTestInd(0);
        else setTestInd(testInd+1);
        moveRight("video");
    }
    const decrement = () => {
        if(testInd<=0) setTestInd(videos.length-1);
        else setTestInd(testInd-1);
        moveLeft("video");
    }
    return (
        <div style={{marginTop:150}}> 
            <h1 style={{textAlign:'center'}}>Gallery</h1>
            <div className="gallery">
                <span onClick={decrement}><i className="fa fa-4x fa-angle-left" style={{color:'#bbb'}}></i></span>
                <iframe 
                    className="video" 
                    width="1000" 
                    height="500" 
                    src={videos[testInd].url} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen></iframe>
                <span onClick={increment}><i className="fa fa-4x fa-angle-right" style={{color:'#bbb'}}></i></span>
            </div>
        </div>
    )
}

export default Gallery;