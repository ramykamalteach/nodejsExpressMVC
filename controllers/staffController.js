const staffController = (req, res) => {
    var staffTitle = "Mean Full Stack Staff";
    var staffCount = 15;
    var emps = [
        { name: "Ali Reda", job: "frontend" },
        { name: "Waleed Mohammed", job: "backtend", address: "mansoura" },
        { name: "FAthy Farouk", job: "AI-dev" },
    ];
    res.render('pages/staff', {
        depName: staffTitle,
        staffCount: staffCount,
        emps: emps
    });
}

module.exports = staffController;