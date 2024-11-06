const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const axios = require('axios');
const { DISCORD_WEBHOOK_URL, PROPERTY_ID } = require('../config/analytics-config');

// Création du client Analytics
const analyticsDataClient = new BetaAnalyticsDataClient();

// Fonction pour formater les données pour Discord
const formatDiscordMessage = (data) => {
  return {
    embeds: [{
      title: "📊 Rapport Hebdomadaire",
      color: 0x0099ff,
      fields: [
        {
          name: "👥 Visiteurs Uniques",
          value: data.visitors,
          inline: true
        },
        {
          name: "🌍 Pays Principaux",
          value: data.countries,
          inline: true
        },
        {
          name: "📱 Appareils",
          value: data.devices,
          inline: true
        }
      ],
      footer: {
        text: "Données conformes RGPD - Données agrégées uniquement"
      },
      timestamp: new Date()
    }]
  };
};

// Fonction principale pour générer le rapport
async function generateWeeklyReport() {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [{
        startDate: '7daysAgo',
        endDate: 'yesterday'
      }],
      metrics: [
        {name: 'totalUsers'},
        {name: 'screenPageViews'},
        {name: 'averageSessionDuration'}
      ],
      dimensions: [
        {name: 'country'},
        {name: 'deviceCategory'}
      ],
      // Filtre pour exclure votre IP
      dimensionFilter: {
        filter: {
          fieldName: 'ipAddress',
          notInList: {
            values: EXCLUDED_IPS
          }
        }
      }
    });

    // Traitement des données (agrégées pour RGPD)
    const formattedData = {
      visitors: response.rows.reduce((acc, row) => acc + parseInt(row.metrics[0].value), 0),
      countries: response.rows
        .reduce((acc, row) => {
          const country = row.dimensionValues[0].value;
          if (!acc[country]) acc[country] = 0;
          acc[country] += parseInt(row.metrics[0].value);
          return acc;
        }, {})
        .slice(0, 3)
        .map(([country, count]) => `${country}: ${count}`)
        .join('\n'),
      devices: response.rows
        .reduce((acc, row) => {
          const device = row.dimensionValues[1].value;
          if (!acc[device]) acc[device] = 0;
          acc[device] += parseInt(row.metrics[0].value);
          return acc;
        }, {})
    };

    // Envoi sur Discord
    await axios.post(
      DISCORD_WEBHOOK_URL,
      formatDiscordMessage(formattedData)
    );

  } catch (error) {
    console.error('Erreur lors de la génération du rapport:', error);
  }
} 