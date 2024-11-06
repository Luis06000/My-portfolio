const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const axios = require('axios');

const analyticsDataClient = new BetaAnalyticsDataClient();

const formatDiscordMessage = (data) => {
  return {
    embeds: [{
      title: "📊 Rapport Hebdomadaire",
      color: 0x0099ff,
      fields: [
        {
          name: "👥 Visiteurs Uniques",
          value: data.visitors.toString(),
          inline: true
        },
        {
          name: "🌍 Pays Principaux",
          value: data.countries || "Aucune donnée",
          inline: true
        },
        {
          name: "📱 Appareils",
          value: data.devices || "Aucune donnée",
          inline: true
        }
      ],
      footer: {
        text: "Données conformes RGPD - Données agrégées uniquement"
      },
      timestamp: new Date().toISOString()
    }]
  };
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA_PROPERTY_ID}`,
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
      ]
    });

    const formattedData = {
      visitors: response.rows.reduce((acc, row) => acc + parseInt(row.metrics[0].value), 0),
      countries: Object.entries(response.rows
        .reduce((acc, row) => {
          const country = row.dimensionValues[0].value;
          if (!acc[country]) acc[country] = 0;
          acc[country] += parseInt(row.metrics[0].value);
          return acc;
        }, {}))
        .slice(0, 3)
        .map(([country, count]) => `${country}: ${count}`)
        .join('\n'),
      devices: Object.entries(response.rows
        .reduce((acc, row) => {
          const device = row.dimensionValues[1].value;
          if (!acc[device]) acc[device] = 0;
          acc[device] += parseInt(row.metrics[0].value);
          return acc;
        }, {}))
        .map(([device, count]) => `${device}: ${count}`)
        .join('\n')
    };

    await axios.post(
      process.env.DISCORD_WEBHOOK_URL,
      formatDiscordMessage(formattedData)
    );

    return res.status(200).json({ message: 'Report sent successfully' });
  } catch (error) {
    console.error('Error generating report:', error);
    return res.status(500).json({ error: 'Failed to generate report' });
  }
} 