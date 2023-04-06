// 試し関数その１
export const hoge = () => {
  const a = 'あっぱれ';
  return a;
};

// 試し関数その２
// ここではサンプルとして海上保安庁が無料公開しているAPIを取得している（岩手県の海上データを取得しています）
export async function getHoantyoData() {
  const { data, error } = await useFetch('https://tide736.net/api/get_tide.php/?pc=3&hc=7&yr=2023&mn=3&dy=31&rg=day', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return data;
}
