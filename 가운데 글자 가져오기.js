function solution(s) {
    // 1.변수 선언
    var answer = '';
    
    // 2. 메인 함수
    // 2-1. 문자열 크기가 짝수인 경우
    if (s.length % 2 == 0)
        {
            // 문자열 값 범위 출력하는 String.substring() 함수 활용
            // 문자열 가운데 -1 위치와 문자열 +1이전 위치까지
            answer = s.substring(((s.length / 2)-1),((s.length / 2)+1));
        }
    // 2-2. 문자열 크기가 홀수인 경우
    else
        {
            // 문자열 값 한개 출력하는 String.charAt() 함수 활용
            // 문자열 가운데 위치
            answer = s.charAt(s.length / 2);
        }
    return answer;
}
