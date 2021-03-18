import stateCollection from "./stateCollection.js"
const allStates = stateCollection

// Creates the map onLoad with default colour values
window.onload = function () {
    addListeners()

    var R = Raphael("map-container", 1000, 900),
    attr = {
        "fill": "#d3d3d3",
        "stroke": "#fff",
        "stroke-opacity": "1",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "4",
        "stroke-width": "0.75",
        "stroke-dasharray": "none"
      },
      usRaphael = {};

    //Draw Map and store Raphael paths
    for (var state in usMap) {
      usRaphael[state] = R.path(usMap[state]).attr(attr);
    }

    //Do Work on Map
    for (var state in usRaphael) {
      // console.log("hello from state in usRaphael")

      (function (st, state) {
        // Draws changes when creating the map, st[0] is the whatever state the user is currently on

        st[0].style.cursor = "pointer";

        // Changes the colour on mouseover, can be changed to any color
        st[0].onmouseover = function () {
          // Redraws the element with the desired color
          // console.log(state)
          if (state != "al" && state != "ar" && state != "wi" && state != "in" && state != "vt" && state != "ri") {
            st.animate({ fill: "green" }, 500);
            st.toFront();
            R.safari();
          }
          else {
            st.animate({ fill: "red" }, 500);
            st.toFront();
            R.safari();
          }

        };

        st[0].onmouseout = function () {
          // console.log("hello from mouseout")
          st.animate({ fill: "#d3d3d3" }, 500);
          st.toFront();
          R.safari();
        };

        // NOTE new section to handle onclick events with mouse
        st[0].onclick = function () {
          handleClick(st, state)
        }

      })(usRaphael[state], state);
    }
  };

  function addListeners(){
      let modal = document.getElementById("modal-one")
      modal.addEventListener("click", closeModal)

      let modalClose = document.getElementById("close-modal")
      modal.addEventListener("click", closeModal)
  }


  function closeModal() {
    let modal = document.getElementById('modal-one')
    modal.classList.add("hidden")
  }

  // NOTE Will need to change modal info based on the state that is being selected, passed state which can be used in filter function
  function handleClick(position, state) {
    // console.log(position, state)
    let selectedState = state
    // console.log(allStates)

    if (position[0]) {
      let modal = document.getElementById('modal-one')

      if (modal.classList.contains("hidden")) {
        modal.classList.remove("hidden")
      } else {
        modal.classList.add("hidden")
      }
    }
  }