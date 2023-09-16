import { Schema } from 'mongoose';

import { dbserver } from '../../libs/db.connect';

export class SettingsRaw {
  _id?: string;
  reject_call?: boolean;
  msg_call?: string;
  groups_ignore?: boolean;
  always_online?: boolean;
  read_messages?: boolean;
  read_status?: boolean;

  local_address?: string;
  manufacturer?: string;
  locale_language?: string;
  locale_country?: string;
  platform?: string;
  browser_name?: string;
  client_name?: string;
  os_version?: string;
}

const settingsSchema = new Schema<SettingsRaw>({
  _id: { type: String, _id: true },
  reject_call: { type: Boolean, required: true },
  msg_call: { type: String, required: true },
  groups_ignore: { type: Boolean, required: true },
  always_online: { type: Boolean, required: true },
  read_messages: { type: Boolean, required: true },
  read_status: { type: Boolean, required: true },
  local_address: { type: String },
  manufacturer: { type: String },
  locale_language: { type: String },
  locale_country: { type: String },
  platform: { type: String },
  browser_name: { type: String },
  client_name: { type: String },
  os_version: { type: String },
});

export const SettingsModel = dbserver?.model(SettingsRaw.name, settingsSchema, 'settings');
export type ISettingsModel = typeof SettingsModel;
