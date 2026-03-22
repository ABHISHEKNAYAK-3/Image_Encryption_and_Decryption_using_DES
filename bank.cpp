#include <iostream>
#include <string>
using namespace std;
class bank{
    private:
    double balance;
    public:
    string holdername;
    string acoountnumber;
    
    double getbalance(){
        return balance;
    }
    void setbalance(double newbalance){
        balance=newbalance;

    }
    

};
int main(){
    bank b1;
    b1.holdername="SONALIN";
    b1.acoountnumber="13235455354t6";

    b1.setbalance(100000);

    cout<<b1.holdername<<endl;
    cout<< b1.getbalance()<<endl;
}