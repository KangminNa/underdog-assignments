/*
# 2. String 다루기

****String 다루기****

### **특정 위치의 문자열 알아내기**

- `.charAt` 함수 이용
    - 첫 문자 : `str.charAt(0)`
    - 마지막 문자 : `str.charAt(str.length-1)`
- 대괄호([]) 사용
    - 첫 문자 : `str[0]`
    - 마지막 문자 : `str[str.length-1]`

### **부분문자열 구하기**

문자열의 연속된 일부분을 구하는 함수

- .substring(pos1, pos2) : pos1 에서 pos2까지의 부분 문자열 반환
    - pos2 생략시 pos1에서부터 마지막 까지의 문자열 반환
- substr(pos, length) : pos에서 length길이 만큼의 부분 문자열 반환
    - length 생략시, pos에서 마지막까지의 문자열 반환
    - pos 가 음수인 경우, str.length - pos 로 동작

### **문자열 검색하기**

- indexOf(str) :
- lastIndexOf(str) :
*/

//문자열.charAt -> 특정문자
var str = "abcdeabcde";
str.charAt(0);//a
str.length//10
str.charAt(10)//err
str[1];//b
str[10];//undefined
str.substring(2,4);//cd
str.substr(2,4);//cdea
str.substring(2);//cdeabcde
str.substr(2);//cdeabcde
str.substr(-7);//deabcde
str.substr(-7,2);//de

str.indexof("bc");//1
str.lastIndexOf("bc");//6
