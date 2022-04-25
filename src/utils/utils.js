export const convertMiliSeconds = (miliSeconds) => {
  const minutes = Math.floor(miliSeconds / 60000);
  const seconds = ((miliSeconds % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export const filterByReference = (arr1, arr2) => {
  let res = [];
  res = arr1.filter(el => {
    return arr2[0].find(element => {
     return element.id === el.album;
    });
  });
  if(res){
    const results = res.sort(() => Math.random() - Math.random()).slice(0, 3);
    return results.map(item => {
      return item.songs.slice(0, 1)
    })
  }
}