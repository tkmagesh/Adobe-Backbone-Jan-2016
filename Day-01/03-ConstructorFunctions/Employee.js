function Employee(id, name, salary){
   var _id = id;
   this.getId = function(){ return _id; }
   this.setId = function(value){ _id = value;}
   this.name = name;
   this.salary = salary;
}

Employee.prototype.display = function(){
      console.log(this.getId(), this.name, this.salary);
   };
