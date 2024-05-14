class MyHTMLDocument {
  head: MyHTMLHeadElement;
  body: MyHTMLBodyElement;

  constructor() {
    this.head = new MyHTMLHeadElement();
    this.body = new MyHTMLBodyElement();
  }
}

class MyHTMLHeadElement {
  title: string;

  constructor() {
    this.title = "Title goes here";
  }
}

class MyHTMLBodyElement {
  h2: string;

  constructor() {
    this.h2 = "Body goes here";
  }
}
