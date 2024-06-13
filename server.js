const express = require('express');
const app = express();
const PORT = 8000;

const players = {
    'josh allen': {
        'name': 'Josh Allen',
        'age': 28,
        'college': 'Wyoming',
        'experience': 7
    },
    'lamar jackson': {
        'name': 'Lamar Jackson',
        'age': 27,
        'college': 'Louisville',
        'experience': 7
    },
    'patrick mahomes': {
        'name': 'Patrick Mahomes',
        'age': 28,
        'college': 'Texas Tech',
        'experience': 8
    },
    'brock purdy': {
        'name': 'Brock Purdy',
        'age': 24,
        'college': 'Iowa State',
        'experience': 3
    },
    'cj stroud': {
        'name': 'CJ Stroud',
        'age': 22,
        'college': 'Ohio State',
        'experience': 2
    },
    'jalen hurts': {
        'name': 'Jalen Hurts',
        'age': 25,
        'college': 'Oklahoma',
        'experience': 5
    },
    'joe burrow': {
        'name': 'Joe Burrow',
        'age': 27,
        'college': 'LSU',
        'experience': 5
    },
    'unknown': {
        'name': 'unknown',
        'age': 0,
        'college': 'unknown',
        'experience': 0
    }
}

app.get('/api/players', (req, res) => {
    res.json(players);
})

app.get('/api/players/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    if(players[name]) {
        return res.json(players[name]);
    }
    else {
        res.json(players['unknown']);
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});