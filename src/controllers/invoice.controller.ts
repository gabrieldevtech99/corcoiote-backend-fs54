import type { Request, Response } from 'express';
import { findAllInvoices } from '../services/invoice.service.ts';
import type { Page } from '../types.ts';
import type { CreateInvoice } from '../schemas/invoice.schema.ts';

export function getAllInvoices(request: Request, response: Response): void {
  const page = request.query.page as unknown as Page;

  const invoices = findAllInvoices(page);

  response.status(200).json(invoices);
}

export function getInvoiceById(request: Request, response: Response): void {
  const id = request.body as CreateInvoice;

  const invoice = InvoiceService.insertInvoice(data);

  response.status(201).json(invoice);
}

export function updateInvoice (request: Request, response: Response) {
  const id = +request.params.id;
  const data = request.body as UpdateInvoice;

  const invoice = InvoiceService.modifyInvoice(id, data);

  response.status(200).json(invoice);
}

export function deleteInvoice(request: Request, response: Response) {
  const id = +request.params.id;

  InvoiceService.removeInvoice(id);

  response.status(204).send();
  
}