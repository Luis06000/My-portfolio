require('dotenv').config();

module.exports = {
  GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  DISCORD_WEBHOOK_URL: process.env.DISCORD_WEBHOOK_URL,
  EXCLUDED_IPS: [process.env.MY_IP], // Votre IP à exclure
  PROPERTY_ID: process.env.GA_PROPERTY_ID
}; 