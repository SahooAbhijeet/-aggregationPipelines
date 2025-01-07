const articleRepository = require('../repository/articleRepository');

const findArticlesByDate = async (date) => {
  const result = await articleRepository.findByDate(date);
  if (!result.length) {
    throw new Error('No articles present in DB at this timestamp');
  }
  return result[0];
}

module.exports = {
  findArticlesByDate
}