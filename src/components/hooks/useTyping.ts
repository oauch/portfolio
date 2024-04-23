import { useEffect, useState } from "react";

function useTyping(typingWord: string) {
  const [word, setWord] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWord(word + typingWord[count]); // 이전 set한 문자 + 다음 문자
      setCount(count + 1); // 개수 만큼 체크
    }, 135);

    // 문자열 체크를 통해 setInterval을 해제해야 무한 반복을 막을 수 있다.
    if (count === typingWord.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
  }, [word]);
  return { word };
}

export default useTyping;
