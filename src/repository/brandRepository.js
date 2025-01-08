const Article = require('../models/article');

const getBrandsWithEanCount = async () => {
  return await Article.aggregate([
    {
      $group: {
        _id: "$manufacturer_name",
        eanCount: {
          $sum: {
            $cond: [{
              $ne: ["$ean", null]
            },
              1, 0]
          }
        },
      },
    },
    {
      $sort: {
        eanCount: -1
      },
    },
    {
      $project: {
        _id: 0,
        manufacturer_name: "$_id",
        eanCount: 1,
      },
    },
  ]);
}


module.exports = {
  getBrandsWithEanCount
}
