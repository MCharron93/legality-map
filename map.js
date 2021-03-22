// import stateCollection from "./stateCollection.js"
// const allStates = stateCollection

// Creates the map onLoad with default colour values
window.onload = function () {
    addListeners()

    var R = Raphael("map-container"),
    attr = {
        "fill": "#d3d3d3",
        "stroke": "#fff",
        "stroke-opacity": "1",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "4",
        "stroke-width": "0.75",
        "stroke-dasharray": "none",
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
          let greenStates = Boolean(state != "al" && state != "ar" && state != "wi" && state != "in" && state != "vt" && state != "ri" && state != "ca" && state != "co" && state != "il" && state != "tn" && state != "ms" && state != "fl" && state != "nc" && state != "nh" && state != "nv" && state != "ut" && state != "az" && state != "ga")
          let redStates = Boolean(state != "ca" && state != "co" && state != "il" && state != "tn" && state != "ms" && state != "fl" && state != "nc" && state != "nh" && state != "nv" && state != "ut" && state != "az" && state != "ga")
          let yellowStates = Boolean(state != "nv" && state != "ut" && state != "az" && state != "ga")

          if (greenStates) {
            st.animate({ fill: "green" }, 500);
            st.toFront();
            R.safari();
          } 
          else if(redStates){
            st.animate({fill: "red"}, 500);
            st.toFront();
            R.safari();
          }
          else if(yellowStates){
            st.animate({fill: "yellow"}, 500);
            st.toFront();
            R.safari();
          }
          else {
            st.animate({ fill: "blue" }, 500);
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

    let arkModal = document.getElementById("arkansas-modal")
    let alabModal = document.getElementById("alabama-modal")
    let indModal = document.getElementById("indiana-modal")

    if(!arkModal.classList.contains("hidden")){
        arkModal.classList.add("hidden")

    } else if(!alabModal.classList.contains("hidden")){
        alabModal.classList.add("hidden")

    } else if(!indModal.classList.contains("hidden")){
        indModal.classList.add("hidden")

    }
  }

  // NOTE Will need to change modal info based on the state that is being selected, passed state which can be used in filter function
  function handleClick(position, state) {
    let selectedState = state

    let arkModal = document.getElementById("arkansas-modal")
    let alabModal = document.getElementById("alabama-modal")
    let indModal = document.getElementById("indiana-modal")
    
    let modalParent = document.getElementById("modal-one")
    modalParent.classList.remove("hidden")


    if(state === "ar" && arkModal.classList.contains("hidden")){
        arkModal.classList.remove("hidden")
    } else if(state === "al" && alabModal.classList.contains("hidden")){
        alabModal.classList.remove("hidden")
    } else if(state === "in" && indModal.classList.contains("hidden")){
        indModal.classList.remove("hidden")
    }

  }