// ### while문 - 실습(2)

// ### **문제 설명**

// 함수 solution은 n을 인자로 받아서 1부터 n까지 더한 값을 return하는 함수입니다. 예를들어 solution(3)을 호출하면 1+2+3인 6을 return합니다.

// 코드 4번째줄과와 코드 5번째줄의 빈칸을 채워 solution을 완성해 보세요.

function solution(n){
    var count = 1;
    var sum=0;
    while( count <= n){
        sum = sum + count;
        count++;
    }
    return sum;
}