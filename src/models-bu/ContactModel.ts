// import { StatusCodes } from 'http-status-codes';
// import logger from '../misc/logger';
// import CustomError from '../misc/CustomError';
// import { writeDataToFile } from '../utils/common';
// import Contact, {ContactToInsert} from '../domain/Contact';
// import { CONTACTS_LIST_FILE } from '../constants/common';
// import contacts from '../contacts.json';

// export const getAllContacts = async (): Promise<Contact[]> => {
//   return new Promise((resolve, reject) => {
//     resolve(contacts);
//   });
// };

// export const getContact = async (id: number): Promise<Contact> => {
//   return new Promise((resolve, reject) => {
//     const requiredContact = contacts.find((Contact) => Contact.id === id);
//     if (requiredContact) {
//       resolve(requiredContact);
//     } else {
//       logger.error(`Contact with id: ${id} not found`);
//       reject(new CustomError('Contact not found', StatusCodes.NOT_FOUND));
//     }
//   });
// };

// export const createContact = async (contact: ContactToInsert): Promise<Contact> => {
//   return new Promise((resolve, reject) => {
//     const newContact = { id: Date.now(), ...contact };
//     contacts.push(newContact);
//     writeDataToFile(CONTACTS_LIST_FILE, contacts);
//     resolve(newContact);
//   });
// };

// /**
//  * Update an existing Contact.
//  * @param {Contact} Contact
//  * @returns {Promise<Contact>}
//  */
// export const updateContact = async (contact: Contact): Promise<Contact> => {
//   return new Promise((resolve, reject) => {
//     const otherContacts = contacts.filter((c) => c.id !== contact.id);
//     const newContactsList = [...otherContacts, contact];
//     writeDataToFile(CONTACTS_LIST_FILE, newContactsList);

//     resolve(contact);
//   });
// };

// /**
//  * Delete an existing Contact.
//  * @param {number} ContactId
//  * @returns {Promise<number>}
//  */
// export const deleteContact = async (ContactId: number): Promise<number> => {
//   return new Promise((resolve, reject) => {
//     const otherContacts = contacts.filter((u) => u.id !== ContactId);
//     writeDataToFile(CONTACTS_LIST_FILE, otherContacts);

//     resolve(ContactId);
//   });
// };
