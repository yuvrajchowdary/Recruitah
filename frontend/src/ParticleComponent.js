import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      position: "relative",
      width: "100%",
    }}
  ><Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 12,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 1,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "image",
	            ],
	            "image": [
	                {
	                    "src": "https://angular.io/assets/images/logos/angular/angular.png",
	                    "height": 20,
	                    "width": 23
	                },
	                {
	                    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png",
	                    "height": 20,
	                    "width": 20
	                },
	                {
	                    "src": "data:image/png;base64,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",
	                    "height": 20,
	                    "width": 20
	                }
	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 30,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
	}} />
  </div>
);
