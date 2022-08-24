interface Contact {
  id: number;
  firstname: string;
  lastname: string;
  number: string;
  email: string;
  address: string;
  photo: string;
  user_id: string;
  is_fav: string;
}

export type ContactToInsert = Omit<Contact, "id">;

export default Contact;
