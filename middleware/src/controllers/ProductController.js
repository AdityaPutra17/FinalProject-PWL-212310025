const { Products } = require("../../models");

exports.index = async (req, res) => {
  res.json({
    status: 200,
    message: "prefix for end-poin users",
  });
};

//getall data product
exports.getAll = async (req, res) => {
  try {
    const results = await Products.findAll();
    res.json({
      status: 200,
      data: results,
    });
  } catch (error) {
    res.json({
      status: 502,
      message: {
        internal: error.message,
        user: "Failed retrive data",
      },
      errors: error.errors,
    });
  }
};

//get data by id
exports.getByID = async (req, res) => {
  const product_id = req.params.id;
  try {
    const results = await Products.findByPk(product_id);
    res.json({
      status: 200,
      data: results,
    });
  } catch (error) {
    res.json({
      status: 502,
      message: {
        internal: error.message,
        user: "Failed retrive data",
      },
      errors: error.errors,
    });
  }
};

//create data product
exports.createData = async (req, res) => {
  const payloadData = req.body;
  console.log(payloadData);
  try {
    const results = await Products.create(payloadData);
    res.json({
      status: 200,
      data: results,
    });
  } catch (error) {
    res.json({
      status: 502,
      message: {
        internal: error.message,
        user: "Failed create a new data",
      },
      errors: error.errors,
    });
  }
};
