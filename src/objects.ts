type User = {
  firstName: string;
  age: number;
  contact: Contacts;
}

type Contacts ={
  email: string;
  phone: string;
}

const MyUser: User ={
  age: 20,
  firstName: "Wallace",
  contact: {
    email: "wallace@gmail.com",
    phone: "99999999"
  }
}

interface Wallace {
  readonly genere: string;
  age: number;
  Login(): boolean;
}

const teste: Wallace = {
  age: 21,
  genere: "h",
  Login() {
    return true
  },
}
