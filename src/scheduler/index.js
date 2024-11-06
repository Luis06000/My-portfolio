const cron = require('node-cron');
const { generateWeeklyReport } = require('../analytics/weeklyReport');

// Programmation pour chaque lundi à 9h
cron.schedule('0 9 * * 1', () => {
  generateWeeklyReport();
}); 