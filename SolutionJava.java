
import java.util.*;

class Main {
	public static void main (String[] args) {
		String str="ABCddE";
		
		//method1
		str=str.toLowerCase();
		System.out.println(str);
		
		//method2
		StringBuilder s=new StringBuilder(str);
		for(int i=0;i<str.length();i++){
		    if(str.charAt(i)>='a' && str.charAt(i)<='z'){
		        continue;
		    }
		    else{
		        s.setCharAt(i,(char)(str.charAt(i)+32));
		    }
		}
		str=s.toString();
		System.out.println(str);
	}
}
