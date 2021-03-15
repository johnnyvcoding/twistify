function simplifyData(data) {
  let newData = []
  let id = 0

  for (let i = 0; i < data.length; i++) {
    let obj = {
      id: id,
      date: data[i].created_at,
      name: data[i].user.screen_name,
      likes: data[i].favorite_count,
      retweets: data[i].retweet_count,
      text: data[i].text

    }
    id = id + 1;
    newData.push(obj)
  }

  return newData

}


export default simplifyData;
