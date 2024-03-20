import { useEffect } from 'react';
import './card.css';

const Card = () => {

    useEffect(() => {

        var c = document.getElementById('canv');
        var $ = c.getContext('2d');
        
        
        var col = function(x, y, r, g, b) {
          $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          $.fillRect(x, y, 1,1);
        }
        var R = function(x, y, t) {
          return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
        }
        
        var G = function(x, y, t) {
          return( Math.floor(192 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
        }
        
        var B = function(x, y, t) {
          return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
        }
        
        var t = 0;
        var fps = 60;
        var run = function() {
          for(var x=0;x<=35;x++) {
            for(var y=0;y<=35;y++) {
              col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
            }
          }
          t = t + (0.05 /1) ;
        
          setTimeout(() => {
            window.requestAnimationFrame(run);
          }, 1000 / fps);
        
        }
        
        run();
        
    }, [])

    return (
        <div className='cardContainer'>
        <div className='card'>
            <div class="hero-wrapper">
                <div class="hero">
                    <canvas id="canv" width="32" height="20"></canvas>
                    <h1 class="title">
                        Admission Open 2023-24
                    </h1>
                </div>
                <div class="hero hero-behind">
                    <span class="title" aria-hidden="true">
                        Admission Open 2023-24
                    </span>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card;