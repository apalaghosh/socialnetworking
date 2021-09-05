module.exports = function (err, req, res, next) {
  console.log("Backend Error");
  console.log(err.message, { metadata: err });
  res
    .status(500)
    .send({ success: false, message: "Something is wrong at the backend" });
};
