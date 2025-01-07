const articleService = require('../services/articleService');

const getArticlesByTimestamp = async (req, res) => {
  try {
    const { date } = req.params;
    const result = await articleService.findArticlesByDate(date);
    return res.status(200).json({
      success: true,
      message: 'Successfully fetched the articles',
      data: result,
      error: {}
    });
  } catch (error) {
    if (error.message === 'No articles present in DB at this timestamp') {
      return res.status(404).json({
        success: false,
        message: 'Something went wrong',
        data: {},
        error: error.message
      });
    } else {
      return res.status(404).json({
        success: false,
        message: 'Something went wrong',
        data: {},
        error: error.message
      });
    }
  }
}


module.exports = {
  getArticlesByTimestamp,
}
