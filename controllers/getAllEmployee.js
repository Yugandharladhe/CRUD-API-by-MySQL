const db = require("../models");

//create main model
const employee = db.employees;

//main work

const getAllEmployee = async (req, res) => {
  const {p}=req.query
  try {
    //find all employees
    const allEmployee = await employee.findAll({});
    //pagination
    const pageCount = Math.ceil(allEmployee.length / 10);
    let page = parseInt(p);
    if (!page) {
      page = 1;
    }
    if (page > pageCount) {
      page = pageCount;
    }

    res.json({
      page: page,
      pageCount: pageCount,
      allEmployee: allEmployee.slice(page * 10 - 10, page * 10),
    }).status(200);

  } catch (err) {
    res.json({ msg: err }).status(400);
    console.log(err);
  }
};

module.exports = getAllEmployee;
