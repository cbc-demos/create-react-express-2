const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// define middleware available to all routes here
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// TODO: define your api routes here

// *** The following api routes are for example only. ***
const users = [
  {
    id: 1,
    email: 'user1@email.com',
    username: 'user1'
  },
  {
    id: 2,
    email: 'user2@email.com',
    username: 'user2'
  }
];

app.get('/api/users/:id', (req, res) => {
  const user = users.find(({ id }) => id === parseInt(req.params.id));
  if (user) {
    return res.json(user);
  }
  return res.status(404).send('Not a valid user id.');
});

// Send every other request to the React app (production build only)
// !!! Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, function() {
  console.log('App now listening at localhost:' + PORT);
});
