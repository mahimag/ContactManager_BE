import db from "../db/db";
import Contact, { ContactToInsert } from "../domain/Contact";

class ContactModel {
  public static table = "contact_table";

  public static async getAllContacts() {
    const contacts = await db(ContactModel.table).select();

    return contacts;
  }

  public static async createContact(Contact: ContactToInsert) {
    try {
      const newContact = await db(ContactModel.table).insert(Contact, [
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

  public static async getContact(ContactId: number): Promise<Contact> {
    const contact = await db(ContactModel.table)
      .where({ id: ContactId })
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

  public static async deleteContact(ContactId: number): Promise<void> {
    await db(ContactModel.table).where({ id: ContactId }).delete();
  }
}

export default ContactModel;
