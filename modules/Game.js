var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Schema = new Schema({
    name:{
        type:String,
        require:true
    },    
    highscore:{
        type:Number,
        require:true
    }
});

mongoose.model("highscore", Schema);