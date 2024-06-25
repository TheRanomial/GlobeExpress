module.exports = (req, res, next) => {
  setTimeout(next, 1000); // Delay for 1 second (1000 milliseconds)
};
