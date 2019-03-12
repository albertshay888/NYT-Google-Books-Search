import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  // Gets all books
  getResumes: function() {
    return axios.get("/api/resumes");
  },
  // Gets the book with the given id
  getResume: function(id) {
    return axios.get("/api/resumes/" + id);
  },
  // Deletes the book with the given id
  deleteResume: function(id) {
    return axios.delete("/api/resumes/" + id);
  },
  // Saves a book to the database
  saveResume: function(resumeData) {
    return axios.post("/api/resumes", resumeData);
  },
   // Gets jobs from the Github API
   getJobs: function(q) {
    // console.log(q);
    // console.log(loc);
    return (axios.get(`http://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${q.search}&location=${q.location}`));

  },
  // Gets all saved jobs
  getSavedJobs: function() {
    return axios.get("/api/jobs");
  },
  // Deletes the saved job with the given id
  deleteJob: function(id) {
    // return axios.delete("/api/jobs/" + id);
    return axios.delete("/api/jobs/" + id);
  },
  // Saves a job to the database
  saveJob: function(jobData) {
    return axios.post("/api/jobs/", jobData);  
    // return axios.post(`/api/jobs/${jobData.user}`, jobData);  
  },


};
