import { NextFunction, Request, Response } from "express";
import * as contactService from "../services/contactService";

export const getAllContacts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("testing");
  contactService
    .getAllContacts()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

export const getContact = (req: Request, res: Response, next: NextFunction) => {
  const { contactId } = req.params;

  contactService
    .getContact(+contactId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

export const createContact = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstname, lastname, number, email, address, user_id, is_fav } =
    req.body;

  const path = req.file?.path as string;

  console.log("testing!!!");
  contactService
    .createContact({
      firstname,
      lastname,
      number,
      email,
      address,
      user_id: JSON.parse(user_id),
      is_fav: JSON.parse(is_fav),
      photo: path,
    })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

export const updateContact = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { contactId } = req.params;
  const {
    firstname,
    lastname,
    number,
    email,
    address,
    photo,
    user_id,
    is_fav,
  } = req.body;

  contactService
    .updateContact({
      id: +contactId,
      firstname,
      lastname,
      number,
      email,
      address,
      photo,
      user_id,
      is_fav,
    })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

export const deleteContact = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { contactId } = req.params;

  contactService
    .deleteContact(+contactId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
