Derek Hickman

[Video Demo, as this project requires a local web server to run.](https://youtu.be/TNpDNJE3W3w)

# Final Project

## Introduction
I was inspired to do my final project by a music video which had a very pulsing and rhythmic looking visualizer, and I wanted to make something similar in p5. I started out with the concept of paint on a speaker, and went from there. My main influence for the visualizer was [this video](https://www.youtube.com/watch?v=KVmvJlEZFOo). I really liked the "trippy" feel, and decided I wanted to make an audio visualizer. I set my ambitions high with an idea of paint on a speaker, but did not quite reach that.

## Research/Making
I started my research on the p5 sound classes and how to implement both them and sound files into a sketch. After figuring out the logistics of that, I had to figure out how to get my sketch to "see" the beat of the music, and draw based of that. That was the most challenging part of the project for me. In order to run this sketch, I also had to be using a local server to host the sketch, and had to learn a little bit of PHP to do so. This wasn't as hard as I thought, and made it very easy to test in the end. I utilized an algorithm called fft, which stands for fast Fourier transform, which, from what I gathered, splits something into various frequency signals. I used this to make the sketch "see" the music, and was able to make it draw based on both that and where the mouse is at. As I was attempting to make an almost stretchy aesthetic to it, I couldn't get it to look like paint, and wanted a cleaner looking project, so I decided to stick to simpler shapes.

## Successes and Failures
I was successful in making a visualizer, but was not successful in making it look like paint on a speaker. As I progressed, I realized how difficult it was to make the aesthetic that I was trying to make, so I pivoted to plain geometric shapes that would not require any physics involved. I was very successful in utilizing the fft algorithm in the p5 library to integrate the beat into the drawing, and learned a lot about the sound libraries. I also was successful in learning a little bit of PHP to run a local web host, which was a whole fiasco to discover.

## Afterword
I enjoyed making this sketch immensely. It was fun to go blindly into the weeds and figure out how to do something we hadn't really gone into that much. It was also interesting to learn about the fft algorithms and how that functions, which I still don't fully understand. I'm glad we got to pick the direction of our project, and plan on looking into more projects I can do in javascript.
