const axios = require("axios");
const db = require("../models");

// Defining methods for the githubController

// findAll searches the Github Jobs API and returns only the entries we haven't already saved

// It also makes sure that the jobs returned from the API all contain a id, type, title, company, description, url, 
module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get("https://jobs.github.com/positions.json?description=node&location=san+francisco", {
        params
      })
      .then(results =>
        results.data.items.filter(
          result =>
            result.id &&
            result.type &&
            result.url &&
            result.created_at &&
            result.company &&
            result.company_url &&
            result.location &&
            result.title &&
            result.description &&
            result.how_to_apply &&
            result.company_logo 
        )
      )
      .then(apiJobs =>
        db.Job.find().then(dbJobs =>
          apiJobs.filter(apiJob =>
            dbJobs.every(dbJob => dbJob.githubId.toString() !== apiJob.id)
          )
        )
      )
      .then(jobs => res.json(jobs))
      .catch(err => res.status(422).json(err));
  }
};
