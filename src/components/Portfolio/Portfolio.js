import React from 'react'
import './style.css';

export default function portfolio() {
    return (
        <section id="work" class="work">
            <h2>
                Work
            </h2>
            <div class="posts">
                <article class="post-1">
                    <h3>
                        <a href="https://github.com/btempini/Dream-Journal" target="_blank" rel="noreferrer">
                            dreamStream
                        </a>
                    </h3>
                        <a href="https://dream-stream69.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img class="img-1" src="./Assets/Images/dreamStreamSS.png" alt="Screenshot of the deployed project."></img>
                        </a>
                </article>
                <article class="post-2">
                    <h3>
                        <a href="https://github.com/RyanStephens6/distance-from-ISS" target="_blank" rel="noreferrer">
                            Where ISS it?
                        </a>
                    </h3>
                    <a href="https://ryanstephens6.github.io/distance-from-ISS/" target="_blank" rel="noreferrer">
                        <img class="img-2" src="./Assets/Images/Website Screenshot.png" alt="Screenshot of the deployed project."></img>
                    </a>
                </article>
                <article class="post-3">
                    <h3>
                        <a href="https://github.com/mandresp/portfolio-website" target="_blank" rel="noreferrer">
                        Portfolio Website
                        </a>
                    </h3>
                    <a href="https://mandresp.github.io/portfolio-website/" target="_blank" rel="noreferrer">

                        <img class="img-3" src="./Assets/Images/PortfolioWebsite Screenshot.png" alt="Screenshot of the deployed project."></img>
                    </a>
                </article>
            </div>
        </section>
    )
}