const Api_key = "AIzaSyCt8S2n07rzYNRwqTAxfdde8F1aRuJXxgc";
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  Api_key;

export const search_api =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=" +
  Api_key +
  "&q=";
  export const videoUrl="https://www.youtube.com/embed/";
  export const comment_api="https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=50&key="+Api_key+"&videoId="

  export const replies_api ="https://www.googleapis.com/youtube/v3/comments?part=snippet&maxResults=50&key="+Api_key+"&parentId="