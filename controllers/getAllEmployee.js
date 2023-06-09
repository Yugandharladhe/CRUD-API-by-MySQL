const db = require("../models");

//create main model
const employee = db.employees;

//main work

const getAllEmployee = async (req, res) => {
  const {p}=req.query
  try {
    const allEmployee = await employee.findAll({});
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
    });

  } catch (err) {
    res.json({ msg: err });
    console.log(err);
  }
};

module.exports = getAllEmployee;
