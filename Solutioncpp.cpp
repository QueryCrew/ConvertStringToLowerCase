//First Method , Built in fuction i.e tolower()

#include<iostream>
#include<string>
using namespace std;

int main()
{
	string message;
	
	cout << "Enter the String=  ";
	getline(cin, message);
	
	for (int i = 0; i < message.length(); i++)
  	{
  		message[i] = tolower(message[i]);
  	}
  	
	cout << message;
		
 	return 0;
}


//Second Method i.e using ASCII value.

#include<iostream>
#include<string>
using namespace std;

int main()
{
	string message;
	
	cout << "Enter the String =  ";
	getline(cin, message);
	
	for (int i = 0; i < message.length(); i++)
  	{
  		if(message[i] >= 'A' && message[i] <= 'Z')
  		{
  			message[i] = message[i] + 32;
		}
  	}
  	
	cout<< message;
		
 	return 0;
}
