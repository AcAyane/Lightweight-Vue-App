import Vue from "vue";

// Simple state management using a shared store

const sharedData = {
  debug: true,
  state: {
    message: "Axios"
  },
  // these methods to simply track which components changed the state
  setMessageAction(newValue) {
    if (this.debug) console.log("setMessageAction triggered with", newValue);
    this.state.message = newValue;
  },
  clearMessageAction() {
    if (this.debug) console.log("clearMessageAction triggered");
    this.state.message = "";
  }
};
export default Vue.observable({
  sharedData: sharedData
});
