 class emplyoe{
     constructor(name, id, salary){
         this.name=name;
         this.id=id;
         this.salary=salary;
     }  
     display(){
         console.log(`Name: ${this.name}, ID: ${this.id}, Salary: ${this.salary}`);
     }   
     increasSalary(per){
         this.salary+=this.salary*(per/100);
         console.log(`New Salary: ${this.salary}`);
     }
 }
 class menejarn extends emplyoe{
            constructor(name, id, salary, department){          
                 super(name, id, salary);
                 this.department=department;
                 this.bonus=0;
                 this.overtime=0;
                 this.salary=salary+this.bonus+this.overtime;
                 this.display();
            }
            display(){
                 super.display();
                 console.log(`Department: ${this.department}`);
            }
            increasBonus(amount){
                 this.bonus+=amount;
                 this.salary=this.salary+this.bonus;
                 console.log(`New Salary: ${this.salary}`);
            }
            overtimePay(amount){
                 this.overtime+=amount;
                 this.salary=this.salary+this.overtime;
                 console.log(`New Salary: ${this.salary}`);
            }
            displayBonus(){
                 console.log(`Bonus: ${this.bonus}`);
            }
            displayOvertime(){
                 console.log(`Overtime: ${this.overtime}`);
            }
            displayAll(){
                 super.display();
                 this.displayBonus();
                 this.displayOvertime();
            }
        }
 let emp=new menejarn("shrey", 123, 5000, "Marketing");
 emp.increasBonus(1000);
 emp.overtimePay(500);
 emp.displayAll();
 
 let emp2=new emplyoe("shrey", 456, 3000);
 emp2.display();
 