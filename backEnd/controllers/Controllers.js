const ToDoModel = require("../models/Model");

module.exports.getToDo = async (req, res) => {
    const todo = await ToDoModel.find();
    res.send(todo);
}

module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;
    
    ToDoModel.create({ text }).then((data) => {
        console.log("Added successfully...")
        console.log(data);
        res.send(data)

    })
    
    const todo = await ToDoModel.find();
    res.send(todo);
}

module.exports.updateToDo = async (req, res) => {
    const {_id, text } = req.body;
    
    ToDoModel.findByIdAndUpdate(_id, { text })
        .then(() => {
           res.send("Updated successfully...")
        }).catch((er) => {
            console.error("you have error",er)
        })
}
   
module.exports.deleteToDo = async (req, res) => {
    const {_id} = req.body;
    
    ToDoModel.findByIdAndDelete(_id)
        .then(() => {
           res.send("Deleted successfully...")
        }).catch((er) => {
            console.error("you have error",er)
        })
   }