function Employee(id, name, salary){
   this._id = id;
   this.name = name;
   this.salary = salary;
}

Employee.prototype.display = function(){
      console.log(this.getId(), this.name, this.salary);
   };

Employee.prototype.getId = function(){ return this._id; }
Employee.prototype.setId = function(value){ this._id = value;}

