function solution(targets) {
  let answer = 1;
  //겹치는 애들 구하는 문제임.

  //오름차순 정렬 시는 뒤 앞 비교  내림차순 시는 앞 뒤 비교

  //어차피 시작점이 다음 친구의 끝점보다 클경우 미포함됨

  //다음 끝점이 시작점보다 작을 경우에만 안겹침

  //내림으로 정렬 후  구함
  targets.sort((a, b) => b[0] - a[0]);

  let [s, e] = targets.shift();
  for (const target of targets) {
    const [targetS, targetE] = target;
    if (targetE <= s) {
      answer += 1;
      s = targetS;
    }
  }
  return answer;
}
