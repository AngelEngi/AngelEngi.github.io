---
layout: default
title: Aero Design Experience
permalink: /projects/aero-design/
description: Current aerospace design work by Angel G. Lugo Rodriguez.
---

<section class="page-hero shell project-page-hero">
  <a class="text-link project-back-link" href="{{ '/projects/' | relative_url }}"><span aria-hidden="true">←</span> All projects</a>
  <p class="eyebrow">Current project // Active development</p>
  <h1>Aero Design Experience</h1>
  <p>This project is currently in development. The engineering record will expand as research, mission requirements, analysis, design decisions, and validation results are completed.</p>
</section>

<section class="shell aero-current-project" aria-labelledby="aero-status-title">
  <figure class="aero-photo-detail">
    <img src="{{ '/assets/images/aero-design-main.png' | relative_url }}" alt="Aero Design team preparing its competition aircraft on the flight line">
    <figcaption>Flight-line preparation // Aero Design Experience</figcaption>
  </figure>
  <div class="aero-current-copy">
    <p class="eyebrow">Documentation status</p>
    <h2 id="aero-status-title">Engineering record in progress.</h2>
    <p>Project objectives and technical results will be added here as the work advances. This page intentionally avoids publishing unverified performance claims before analysis and validation are complete.</p>
    <div class="tag-list" aria-label="Current project workflow">
      <span>Research</span><span>Analysis</span><span>Design iteration</span><span>Validation</span>
    </div>
  </div>
</section>

<section class="shell aero-analysis-section" aria-labelledby="atmospheric-analysis-title">
  <div class="section-heading">
    <p class="eyebrow">Performance input // Atmospheric conditions</p>
    <h2 id="atmospheric-analysis-title">Modeling the environment before modeling performance.</h2>
    <p>I evaluated Lakeland weather observations from midnight through 6 PM across May 6–8, 2024. The three-day dataset establishes the range of atmospheric conditions the aircraft may encounter, giving the performance model a realistic operating environment rather than a single idealized condition.</p>
  </div>
  <div class="aero-analysis-grid">
    <figure class="aero-data-figure">
      <a href="{{ '/assets/images/aero-weather-analysis.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the atmospheric data table at full resolution">
        <img src="{{ '/assets/images/aero-weather-analysis.png' | relative_url }}" alt="Excerpt of Lakeland atmospheric data and calculated performance inputs for May 6 through May 8, 2024">
      </a>
      <figcaption>Source-table excerpt // Select the image to inspect the full-resolution data.</figcaption>
    </figure>
    <div class="aero-analysis-copy">
      <h3>From observations to design conditions</h3>
      <p>Temperature, dew point, and altimeter readings were converted into the atmospheric values needed for aircraft performance calculations. Those results inform how the design is evaluated under the density and pressure conditions expected during operation.</p>
      <dl class="aero-data-points">
        <div><dt>Pressure altitude</dt><dd>Normalizes the measured pressure into an altitude reference for performance analysis.</dd></div>
        <div><dt>ISA temperature</dt><dd>Provides the standard-atmosphere baseline used to compare the observed conditions.</dd></div>
        <div><dt>Density altitude</dt><dd>Represents the combined effect of pressure and temperature on the air available to the aircraft.</dd></div>
        <div><dt>Design impact</dt><dd>Feeds the performance model used to guide configuration choices for the conditions the aircraft will face.</dd></div>
      </dl>
    </div>
  </div>
</section>

<section class="shell aero-analysis-module" aria-labelledby="airfoil-analysis-title">
  <div class="aero-analysis-media-grid">
    <figure class="aero-analysis-screen">
      <a href="{{ '/assets/images/aero-xflr5-airfoil-analysis.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the XFLR5 airfoil model at full resolution">
        <img src="{{ '/assets/images/aero-xflr5-airfoil-analysis.png' | relative_url }}" alt="XFLR5 direct foil model for the Wortmann FX 63-137 airfoil at a Reynolds number of 300,000">
      </a>
      <figcaption>01 // Airfoil model and fixed-Reynolds-number setup</figcaption>
    </figure>
    <figure class="aero-analysis-screen">
      <a href="{{ '/assets/images/aero-xflr5-results.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the XFLR5 coefficient plots at full resolution">
        <img src="{{ '/assets/images/aero-xflr5-results.png' | relative_url }}" alt="XFLR5 lift, moment, and transition plots for the Wortmann FX 63-137 airfoil">
      </a>
      <figcaption>02 // Lift, moment, and transition analysis plots</figcaption>
    </figure>
  </div>
  <div class="aero-analysis-copy">
    <p class="eyebrow">Aerodynamic analysis // In progress</p>
    <h2 id="airfoil-analysis-title">Connecting airfoil behavior to wing geometry.</h2>
    <p>I modeled the Wortmann FX 63-137 airfoil in XFLR5 using fixed-Reynolds-number polar cases to estimate its maximum lift coefficient, <em>C<sub>L,max</sub></em>, and drag coefficient, <em>C<sub>D</sub></em>. This creates a consistent baseline for comparing the aerodynamic behavior of candidate configurations.</p>
    <p>I am currently extending the study to compare taper ratio and aspect ratio. The objective is to identify the wing geometry that produces the highest practical <em>C<sub>L,max</sub></em> while remaining consistent with the aircraft’s operating conditions and mission constraints.</p>
    <dl class="aero-study-status">
      <div><dt>Airfoil</dt><dd>Wortmann FX 63-137</dd></div>
      <div><dt>Analysis method</dt><dd>Fixed-Re polar cases</dd></div>
      <div><dt>Evaluating</dt><dd>C<sub>L,max</sub> · C<sub>D</sub></dd></div>
      <div><dt>Current trade study</dt><dd>Taper ratio · Aspect ratio</dd></div>
    </dl>
  </div>
</section>

<section class="contact shell section-pad project-contact">
  <p class="eyebrow">Project navigation</p>
  <h2>Review completed engineering work.</h2>
  <a class="button button-primary" href="{{ '/projects/' | relative_url }}">Return to projects</a>
</section>
