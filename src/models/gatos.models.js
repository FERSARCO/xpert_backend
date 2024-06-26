const mongoose = require('mongoose');
const { Schema } = mongoose;

const gatoSchema = new Schema({
  weight:{ type: String },
  id:{ type: String },
  name:{ type: String },
  cfa_url:{ type: String },
  vetstreet_url:{ type: String },
  vcahospitals_url:{ type: String },
  temperament:{ type: String },
  origin:{ type: String },
  country_codes:{ type: String },
  country_code:{ type: String },
  description:{ type: String },
  life_span:{ type: String },
  indoor:{ type: String },
  lap:{ type: String },
  alt_names :{ type: String },
  adaptability:{ type: Number },
  affection_level:{ type: Number },
  child_friendly:{ type: Number },
  dog_friendly:{ type: Number },
  energy_level:{ type: Number },
  grooming:{ type: Number },
  health_issues:{ type: Number },
  intelligence:{ type: Number },
  shedding_level:{ type: Number },
  social_needs:{ type: Number },
  stranger_friendly:{ type: Number },
  vocalisation:{ type: Number },
  experimental:{ type: Number },
  hairless:{ type: Number },
  natural:{ type: Number },
  rare:{ type: Number },
  rex:{ type: Number },
  suppressed_tail:{ type: Number },
  short_legs:{ type: Number },
  wikipedia_url:{ type: String },
  hypoallergenic:{ type: Number },
  reference_image_id:{ type: String }
});

module.exports = mongoose.model('Gato', gatoSchema);
