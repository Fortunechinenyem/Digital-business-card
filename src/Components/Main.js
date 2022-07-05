import React from "react";
import Fortune from "../Images/fortune.jpg"

export default function Main() {
    return(
        <>
        <div class="card w-75">
        <img src={Fortune} className="Card-img-top" alt="Fortune"/>
        <div class="card-body">
            <p>Web Developer</p>
        <a href="#" class="btn btn-primary gap-3px">Email</a>
        <a href="linkedin.com/in/fortune-chinenyem-aribido-6578b8185" class="btn btn-secondary">LinkedIn</a>
        <p class="card-text">About</p>
        <h5 class="card-title">Fortune is a customer-centric web developer with a keen interest in technology who pays attention to detail and is excited to create innovative solutions to complex problems</h5>
         <h6 class="card-text">Skilled in HTML, CSS, Bootstrap, Figma, JavaScript, React JS, Git/GitHub</h6>
         <div className="Icons">
        <i class="fa fa-envelope"></i>
        <i class="fa fa-facebook"></i>
        <i class="fa fa-twitter"></i>
        <i class="fa fa-github"></i>
        </div>
        </div>
        </div>
        
        </>
    )
}

