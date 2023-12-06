// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

// Hardcoded data for each quarter
const quartersData = {
  q1: {
    revenue: '716.57 B',
    netIncome: '154.77 B',
    netProfit: '21.60%',
    operatingIncome: '213.55 B',
  },
  q2: {
    revenue: '607.66 B',
    netIncome: '180.94 B',
    netProfit: '29.78%',
    operatingIncome: '049.95 B',
  },
  q3: {
    revenue: '711.87 B',
    netIncome: '185.37 B',
    netProfit: '26.04%',
    operatingIncome: '252.08 B',
  },
  q4: {
    revenue: '805.33 B',
    netIncome: '161.00 B',
    netProfit: '19.99%',
    operatingIncome: '219.36 B',
  },
};

// API endpoint to get data for a specific quarter
app.get('/api/quarter/:id', (req, res) => {
  const { id } = req.params;
  const quarterData = quartersData[id];

  if (quarterData) {
    res.json(quarterData);
  } else {
    res.status(404).json({ error: 'Quarter not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
