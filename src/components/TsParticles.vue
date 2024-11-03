<template>
  <div id="tsparticles"></div>
</template>

<style>
#tsparticles {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #232741;
}
[data-bs-theme="dark"] #tsparticles {
  background-color: #1B1F39 !important;
}
</style>

<script>
import { loadBaseMover } from "tsparticles-move-base"
import { loadCircleShape } from "tsparticles-shape-circle"
import { loadColorUpdater } from "tsparticles-updater-color"
import { loadOpacityUpdater } from "tsparticles-updater-opacity"
import { loadOutModesUpdater } from "tsparticles-updater-out-modes"
import { tsParticles } from "tsparticles-engine";
let particlesContainer = null
let reduceMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)")
const delay = ms => new Promise(res => setTimeout(res, ms));
export default {

  mounted() {
    this.$nextTick(() => {
      this.initParticlesJS()
      reduceMotionMedia.addEventListener('change', this.setMotionParticles)
    })
  },

  beforeUnmount() {
    particlesContainer.destroy()
    reduceMotionMedia.removeEventListener('change', this.setMotionParticles)
    reduceMotionMedia = null
    particlesContainer = null
  },

  methods: {
    async initParticlesJS() {
      await loadBaseMover(tsParticles)
      await loadCircleShape(tsParticles)
      await loadColorUpdater(tsParticles)
      await loadOpacityUpdater(tsParticles)
      await loadOutModesUpdater(tsParticles)
      particlesContainer = await tsParticles.load("tsparticles", {
        fullScreen: {
          enable: false
        },
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "bubble"
            },
            onclick: {
              enable: false,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
              speed: 3
            },
            repulse: {
              distance: 400,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
      await delay(10)
      this.setMotionParticles()
    },

    setMotionParticles() {
      if (reduceMotionMedia.matches)
        particlesContainer.pause()
      else
        particlesContainer.play()
    }
  }
}
</script>