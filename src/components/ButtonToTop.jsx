export default function ButtonToTop () {

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}

return (
    
    <button  onClick={topFunction} id="myBtn"> 
    <svg width="48" height="48" className = "rightSvg" xmlns="http://www.w3.org/2000/svg" stroke-linecap = "round">
           <line x1="12" y1="24" x2="36" y2="24" stroke="black" stroke-width="3" stroke-linecap = "round"/>
           <line x1="36" y1="24" x2="28" y2="17" stroke="black" stroke-width="3" stroke-linecap = "round"/>
            <line x1="36" y1="24" x2="28" y2="30" stroke="black" stroke-width="3" stroke-linecap = "round"/>

         </svg>
    </button>
)
}