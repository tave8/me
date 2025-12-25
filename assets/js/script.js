const typewriterMyDescription = new TypeWriter({
  elementSelector: "main > .title > .my-description",
  text: "i love solving problems and writing code that humans love reading_",
  speed: "fast",
  onFinishTypewrite: () => {},
});

const typewriterMyTitle = new TypeWriter({
  elementSelector: "main > .title > .my-title",
  text: "{ software developer }",
  onFinishTypewrite: () => {},
});

const typewriterMyName = new TypeWriter({
  elementSelector: "main > .title > .my-name",
  text: "Giuseppe Tavella_",
  speed: "slow",
  onFinishTypewrite: () => {},
});

TypeWriter.runOneAfterAnother([typewriterMyName, typewriterMyTitle, typewriterMyDescription]);
