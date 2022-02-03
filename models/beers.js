const connection = require('../db-config');
const db = connection.promise();

/**Fonction qui recupere toutes les bières dans la BDD */
const findMany = () => {
  return db.query('SELECT * FROM beers').then(result => result[0])
}

/**Fonction qui recupere une bière par id dans la BDD */
const findOne = (id) => {
  return db.query('SELECT * FROM beers WHERE id = ?', [id]).then(result => result[0][0])
}

/** Fonction pour poster une nouvelle biere */
const postBiere = ({
  name,
  description,
  image_url,
  ph,
}) => {
  return db
    .query(
      'INSERT INTO beers (name, description, image_url, ph) VALUES (?, ?, ?, ?)',
      [name, description, image_url, ph]
    )
    .then((result) => result);
};



module.exports = {
  findMany,
  findOne,
  postBiere
}