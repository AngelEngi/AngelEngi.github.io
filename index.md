---
layout: default
title:
description: Mechanical engineering student and aerospace engineering minor focused on structural design, simulation, manufacturing, and vehicle systems.
---

<section class="hero shell">
  <div class="hero-copy">
    <p class="eyebrow"><span>Mission profile</span> Mechanical + Aerospace Engineering</p>
    <h1 class="visually-hidden">Angel G. Lugo Rodriguez engineering portfolio</h1>
    <figure class="hero-headshot">
      <img src="{{ '/assets/images/professional-photo.jpeg' | relative_url }}" alt="Professional headshot of Angel G. Lugo Rodriguez" width="400" height="400">
    </figure>
    <p class="hero-lede">I’m Angel G. Lugo Rodriguez, a mechanical engineering student with an aerospace engineering minor. My work is grounded in rigorous research and systems analysis, translating mission parameters into engineered products designed to meet or exceed every performance requirement.</p>
    <div class="hero-actions">
      <a class="button button-primary" href="{{ '/projects/' | relative_url }}">Explore projects <span aria-hidden="true">↗</span></a>
      <a class="button button-secondary" href="mailto:lugorodriguezangel097@gmail.com">Start a conversation</a>
    </div>
    <dl class="mission-stats">
      <div><dt>2028</dt><dd>Expected graduation</dd></div>
      <div><dt>4+</dt><dd>Years of hands-on technical work</dd></div>
    </dl>
  </div>
  <section class="mission-console" aria-labelledby="console-title">
    <header class="console-header">
      <div><strong id="console-title">ORBITAL TRACKING // ALR-01</strong><span>REFERENCE FRAME: ECI</span></div>
      <p><span class="status-dot"></span> PROPAGATION NOMINAL</p>
    </header>
    <div class="console-grid">
      <figure class="orbit-display">
        <svg viewBox="0 0 640 540" role="img" aria-labelledby="orbit-title orbit-description">
          <title id="orbit-title">Animated spacecraft orbit around a wireframe Earth</title>
          <desc id="orbit-description">A minimalist engineering visualization showing a line-drawn Earth, orbital trajectory, predicted path, and moving spacecraft marker.</desc>
          <defs>
            <pattern id="minor-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M24 0H0V24" fill="none" stroke="currentColor" stroke-opacity=".055" stroke-width="1"/>
            </pattern>
            <clipPath id="earth-clip"><circle cx="320" cy="270" r="142"/></clipPath>
            <path id="orbit-path" d="M60 270A260 165 0 1 0 580 270A260 165 0 1 0 60 270Z"/>
          </defs>
          <rect width="640" height="540" fill="url(#minor-grid)"/>
          <g class="axes" aria-hidden="true">
            <path d="M42 270H598M320 35V505"/>
            <path d="M313 65h14M313 475h14M115 263v14M525 263v14"/>
            <text x="320" y="29">N</text><text x="320" y="526">S</text><text x="27" y="274">W</text><text x="609" y="274">E</text>
          </g>
          <g class="earth" aria-hidden="true">
            <circle cx="320" cy="270" r="142"/>
            <ellipse cx="320" cy="270" rx="142" ry="49"/>
            <ellipse cx="320" cy="270" rx="142" ry="101"/>
            <ellipse cx="320" cy="270" rx="55" ry="142"/>
            <ellipse cx="320" cy="270" rx="104" ry="142"/>
            <path d="M184 248C219 224 251 225 274 198C286 184 278 164 301 150C332 141 356 157 378 169C397 180 416 173 445 190C468 210 462 231 482 249"/>
            <path d="M231 291C260 274 286 281 298 303C308 320 302 342 317 359C326 372 338 386 333 405M362 263C388 252 414 258 443 282C455 300 443 320 425 329C409 337 404 355 392 371"/>
            <path d="M198 270H462M320 128V412" opacity=".35"/>
          </g>
          <g class="ground-track" clip-path="url(#earth-clip)" aria-hidden="true">
            <path d="M166 307C221 242 263 230 320 271C374 310 414 311 479 231"/>
            <circle cx="320" cy="271" r="3"/>
          </g>
          <g class="orbit-plane" transform="rotate(-12 320 270)">
            <use href="#orbit-path" class="orbit-line"/>
            <use href="#orbit-path" class="predicted-path"/>
            <g class="spacecraft-marker" aria-hidden="true">
              <circle r="12"/>
              <g class="spacecraft-symbol">
                <path d="M-9-5L11 0L-9 5L-4 0Z"/>
                <path d="M-7-8V8M-13-7H-7M-13 7H-7"/>
                <circle r="1.7"/>
              </g>
              <animateMotion dur="16s" repeatCount="indefinite" rotate="auto"><mpath href="#orbit-path"/></animateMotion>
            </g>
          </g>
          <g class="orbit-annotations" aria-hidden="true">
            <path d="M113 154h73l27 32"/><text x="112" y="145">ASCENDING NODE</text>
            <path d="M445 409h78l27-25"/><text x="444" y="428">PREDICTED PATH</text>
            <text x="337" y="145">i 51.64°</text>
          </g>
        </svg>
        <figcaption><span>ALR-01 // SIMULATED LOW EARTH ORBIT</span><span>TRACK UPDATE 01.0 s</span></figcaption>
      </figure>
    </div>
    <footer class="console-footer"><span>VISUALIZATION // ILLUSTRATIVE ORBITAL DATA</span><span>LINK STABLE</span></footer>
  </section>
</section>

<section class="featured shell section-pad" aria-labelledby="featured-title">
  <div class="section-heading heading-row">
    <div>
      <p class="eyebrow">Selected missions</p>
      <h2 id="featured-title">Engineering in motion.</h2>
    </div>
    <a class="text-link" href="{{ '/projects/' | relative_url }}">View all projects <span aria-hidden="true">→</span></a>
  </div>
  <div class="featured-grid">
    <article class="project-card project-card-large">
      <div class="project-visual project-photo">
        <div class="project-photo-media">
          <img class="project-photo-backdrop" src="{{ '/assets/images/fsae-team.jpg' | relative_url }}" alt="" aria-hidden="true">
          <img class="project-photo-image" src="{{ '/assets/images/fsae-team.jpg' | relative_url }}" alt="Polytechnic University Racing and Engineering team with Formula SAE race car 104">
        </div>
        <p>Formula SAE // Team and vehicle</p>
      </div>
      <div class="project-content">
        <p class="project-type">Structural design · ANSYS · Manufacturing · SolidWorks · Team leadership</p>
        <h3>Polytechnic University Racing and Engineering Experience</h3>
        <p>Led the ergonomics and chassis subsystems in accordance with Formula SAE standards and regulations while maintaining a demanding build schedule, coordinating component purchases, and communicating with other subsystem leads to keep design decisions and manufacturing work aligned.</p>
        <a href="{{ '/projects/pure/' | relative_url }}">Read mission brief <span aria-hidden="true">↗</span></a>
      </div>
    </article>
    <article class="project-card">
      <div class="project-visual project-photo">
        <div class="project-photo-media">
          <img class="project-photo-backdrop" src="{{ '/assets/images/battle-bot-team.jpeg' | relative_url }}" alt="" aria-hidden="true">
          <img class="project-photo-image" src="{{ '/assets/images/battle-bot-team.jpeg' | relative_url }}" alt="Battle Bot team in the workshop holding the completed robot">
        </div>
        <p>Combat robotics // Team and build</p>
      </div>
      <div class="project-content">
        <p class="project-type">SolidWorks · Team leadership · Fabrication</p>
        <h3>Battle Bot Experience</h3>
        <p>Designed and manufactured a competition-ready battle bot while leading the team through a three-month build schedule.</p>
        <a href="{{ '/projects/battle-bot/' | relative_url }}">Read mission brief <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  </div>
</section>

<section class="capabilities shell section-pad" aria-labelledby="capabilities-title">
  <div class="section-heading">
    <p class="eyebrow">Core systems</p>
    <h2 id="capabilities-title">From concept to validated hardware.</h2>
    <p>My work combines digital engineering tools with practical experience in fabrication, diagnostics, operations, and project coordination.</p>
  </div>
  <div class="capability-grid">
    <article>
      <span class="capability-index">01</span>
      <h3>CAD &amp; Design</h3>
      <p>SolidWorks and CREO Parametric workflows for mechanical assemblies.</p>
    </article>
    <article>
      <span class="capability-index">02</span>
      <h3>Structural Analysis</h3>
      <p>ANSYS finite element analysis used to evaluate load paths, validate tube selection, and remove unnecessary mass with confidence.</p>
    </article>
    <article>
      <span class="capability-index">03</span>
      <h3>Manufacturing</h3>
      <p>Hands-on experience taking designs into fabrication while working within technical regulations, safety requirements, and tight timelines.</p>
    </article>
    <article>
      <span class="capability-index">04</span>
      <h3>Systems Diagnostics</h3>
      <p>Mechanical and electrical troubleshooting across engine, transmission, suspension, and vehicle electrical systems.</p>
    </article>
  </div>
</section>

<section class="education-band">
  <div class="shell education-inner">
    <div>
      <p class="eyebrow">Current trajectory</p>
      <h2>B.S. Mechanical Engineering</h2>
      <p>Minor in Aerospace Engineering · Polytechnic University of Puerto Rico · Expected May 2028</p>
    </div>
    <div class="tool-stack" aria-label="Technical tools">
      <span>SolidWorks</span><span>ANSYS</span><span>CREO</span><span>MATLAB</span>
    </div>
  </div>
</section>

<section class="contact shell section-pad">
  <p class="eyebrow">Open channel</p>
  <h2>Let’s build something that has to perform.</h2>
  <p>I’m interested in internships and engineering opportunities involving aerospace, automotive systems, manufacturing, structural design, and simulation.</p>
  <div class="hero-actions">
    <a class="button button-primary" href="mailto:lugorodriguezangel097@gmail.com">Email Angel</a>
    <a class="button button-secondary" href="https://www.linkedin.com/in/aglr-engi" rel="me">LinkedIn profile <span aria-hidden="true">↗</span></a>
  </div>
</section>

