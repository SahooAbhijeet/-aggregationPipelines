module.exports = (req, res, next) => {
  const { date } = req.params;
  if (!Date.parse(date)) {
    return res.status(400).json({ error: 'Invalid date format' });
  }
  next();
};
