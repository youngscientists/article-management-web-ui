import { Notification } from '.';

export const error = (message: string): Notification => ({ type: 'danger', message, icon: 'ni ni-bell-55' });