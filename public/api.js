// JSON methods for --> 
// API = { 
//   {getLastWorkout(): return}, 
//   {createWorkout(data = {}): return}, 
//   {addExercise(data): return}, 
//   {getWorkoutsInRange(): return}
// };
// then we will call the methods eg. API.getLastWorkout();
const API = {
  //response must wait for fetching '/api/workouts'
  //and get all response in a json format out of which need the last one
  //i.e. if there are 10 json response last one is 10-1 = 9 b/c json format counts from 0. 
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();
    return json[json.length - 1];
  },
  //add excercise 
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    return json;
  },
  //create or post new excercise
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
    const json = await res.json();
    return json;
  },
  //get the data renge
  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();
    return json;
  },

};
