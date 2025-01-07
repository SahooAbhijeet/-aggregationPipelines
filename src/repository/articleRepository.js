const Article = require('../models/article');

const findByDate = async (date) => {
  const start = new Date(date);
  start.setUTCHours(0, 0, 0, 0);
  const end = new Date(date);
  end.setUTCHours(23, 59, 59, 999);

  return await Article.aggregate([
    {
      $match: {
        timestamp: { $gte: start, $lte: end },
      },
    },
    {
      $group: {
        _id: null,
        count: { $sum: 1 },
        articles: { $push: '$$ROOT' },
      },
    },
  ]);
}


module.exports = {
  findByDate
}
