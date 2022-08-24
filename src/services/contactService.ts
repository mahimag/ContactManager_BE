import logger from "../misc/logger";
import Success from "../domain/Success";
// import * as ContactModel from "../models-bu/ContactModel";
import ContactModel from "../models/ContactModel";
import Contact, { ContactToInsert } from "../domain/Contact";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

export const getAllContacts = async (): Promise<Success<Contact[]>> => {
  logger.info("Getting all Contacts");
  const contacts = await ContactModel.getAllContacts();

  return {
    data: contacts,
    message: "Contacts fetched successfully",
  };
};

export const getContact = async (
  contactId: number
): Promise<Success<Contact>> => {
  logger.info(`Getting Contact with id: ${contactId}`);
  const contact = await ContactModel.getContact(contactId);

  return {
    data: contact,
    message: "Contact fetched successfully",
  };
};
export const createContact = async (
  contact: ContactToInsert
): Promise<Success<Contact>> => {
  logger.info("Contact created successfully");
  try {
    if (!fs.existsSync(contact.photo)) {
      throw new Error("File not found!!");
    }

    const result = await cloudinary.uploader.upload(contact.photo, {
      resource_type: "image",
      use_filename: true,
      width: 500,
      height: 500,
      crop: "limit",
    });

    fs.unlinkSync(contact.photo);

    const insertedContact = await ContactModel.createContact({
      ...contact,
      photo: result.url,
    });

    return {
      data: insertedContact,
      message: "Contact created successfully",
    };
  } catch (error) {
    logger.error(error);
    return {
      message: "Contact could not be created",
    };
  }
};

export const updateContact = async (
  contact: Contact
): Promise<Success<Contact>> => {
  try {
    if (!fs.existsSync(contact.photo)) {
      throw new Error("File not found!!");
    }

    const result = await cloudinary.uploader.upload(contact.photo, {
      resource_type: "image",
      use_filename: true,
      width: 500,
      height: 500,
      crop: "limit",
    });

    fs.unlinkSync(contact.photo);

    const updatedContact = await ContactModel.updateContact({
      ...contact,
      photo: result.url,
    });

    return {
      data: updatedContact,
      message: "Contact created successfully",
    };
  } catch (error) {
    logger.error(error);
    return {
      message: "Contact could not be updated",
    };
  }
};

export const deleteContact = async (
  ContactId: number
): Promise<Success<Contact>> => {
  await ContactModel.deleteContact(ContactId);
  logger.info("Contact deleted successfully");

  return {
    message: "Contact deleted successfully",
  };
};
