import { useState, useEffect, useCallback } from 'react';
import CommentRs from '../constants/CommentRs';

function useJsonPlaceholder(): CommentRs | null {
  const [data, setData] = useState<CommentRs | null>(null);

  /**
   * TODO 4.
   * [리액트 개발자 도구 - Components hooks 기명 함수 사용하기]
   */

  const fetchData = useCallback(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments/1');
    const data = await res.json();
    setData(data);
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return data;
}

export default useJsonPlaceholder;
