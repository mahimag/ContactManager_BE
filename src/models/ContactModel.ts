import db from "../db/db";
import Contact, { ContactToInsert } from "../domain/Contact";

class ContactModel {
  public static table = "contact_table";

  public static async getAllContacts(id: number) {
    const contacts = await db(ContactModel.table)
      .select()
      .where({ user_id: id });

    return contacts;
  }

  public static async createContact(contact: ContactToInsert) {
    try {
      const newContact = await db(ContactModel.table).insert(contact, [
        "id",
        "firstname",
        "lastname",
        "number",
        "email",
        "address",
        "photo",
        "user_id",
        "is_fav",
      ]);
      return newContact;
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  public static async getContact(contactId: number): Promise<Contact> {
    const contact = await db(ContactModel.table)
      .where({ id: contactId })
      .select()
      .first();

    return contact;
  }

  public static async getContactByEmail(email: string): Promise<Contact> {
    const contact = await db(ContactModel.table)
      .where({ email: email })
      .select()
      .first();

    return contact;
  }

  public static async updateContact(contact: Contact): Promise<Contact> {
    const [updatedContact] = await db(ContactModel.table)
      .where({ id: contact.id })
      .update(contact)
      .returning([
        "firstname",
        "lastname",
        "number",
        "email",
        "address",
        "photo",
        "user_id",
        "is_fav",
      ]);

    return updatedContact;
  }

  public static async deleteContact(contactId: number): Promise<void> {
    await db(ContactModel.table).where({ id: contactId }).delete();
  }
}

export default ContactModel;
