namespace MyHTML {
  export class Document {
    head: HeadElement;
    body: BodyElement;

    constructor() {
      this.head = new HeadElement();
      this.body = new BodyElement();
    }
  }

  export class HeadElement {
    meta: MetaElement;

    constructor() {
      this.meta = new MetaElement();
    }
  }

  export class MetaElement {
    charset: string;

    constructor() {
      this.charset = "UTF-8";
    }
  }

  export class BodyElement {
    div: DivElement;

    constructor() {
      this.div = new DivElement();
    }
  }

  export class DivElement {
    form: FormElement;

    constructor() {
      this.form = new FormElement();
    }
  }

  export class FormElement {
    action: string;
    method: string;
    inputs: InputElement[];

    constructor() {
      this.action = "/form";
      this.method = "POST";
      this.inputs = [];
      this.inputs.push(new InputElement("text", "name"));
      this.inputs.push(new InputElement("text", "address"));
      this.inputs.push(new InputElement("submit", "", "Submit"));
    }
  }

  export class InputElement {
    type: string;
    name: string;
    value: string;

    constructor(type: string, name: string, value: string = "") {
      this.type = type;
      this.name = name;
      this.value = value;
    }
  }
}

const myDocument = new MyHTML.Document();
