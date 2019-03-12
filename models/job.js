const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  id: { type: String, required: true },
  type: { type: String, required: true },
  url: { type: String, required: false },
  created_at: { type: String, required: false },
  company: { type: String, required: true },
  company_url: { type: String, required: true },
  location: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  how_to_apply: { type: String, required: false },
  company_logo: { type: String, required: false }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
