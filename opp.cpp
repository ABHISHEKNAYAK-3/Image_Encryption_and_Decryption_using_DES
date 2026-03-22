#include <iostream>
#include <string>
using namespace std;
class Teacher{
    public:
    Teacher(string n, string d, string s, float sal){
        name=n;
        deparment=d;
        subject=s;
        salary=sal;
    }
    string name;
    string deparment;
    string subject;
    float salary;
     void getinfo(){
        cout<<"name : "  <<name<<endl;
        cout <<"deparment : "<<deparment<<endl;
        cout<<"subject : "<<subject<<endl;
        cout<<"salary : "<<salary<<endl; 
     }
    void changedep(string newdep){
        deparment=newdep;
    }
    //void setsalary(float s ){
       // salary = s;
    //}
    //double getsalary() {
        //return salary;
    //}

};
int main() {
    Teacher t1("abhishek","computer science","opp",100000);
    t1.getinfo();
    //cout<< "TEACHER 2 INFO <<endl;"
    Teacher t2(t1);
    t2.getinfo();
    

    //cout<<t1.subject<<endl;
   //cout<<t1.getsalary()<<endl;

}