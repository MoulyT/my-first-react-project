import axios from "axios";

export default function postComment(text, pngUrl, webpUrl, name) {
  // Simple POST request with a JSON body using axios
  const comment = {
    content: text,

    createdAt: "1 min ago",
    score: 0,
    user: {
      image: {
        png: pngUrl,
        webp: webpUrl,
      },
      username: name,
    },
    replies: [],
  };
  axios
    .post("http://localhost:3004/comments", comment)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
