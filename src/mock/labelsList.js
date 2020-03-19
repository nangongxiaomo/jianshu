import Mock from "mockjs";

export default Mock.mock("/api/labelsList", "get", {
  code: 200,
  "list": {
    banner: "@image(625x270,@color)",
    "label|8": [
      {
        name: "@cword(2, 4)",
        image: "@image(32x32,@color)"
      }
    ]
  }
});
