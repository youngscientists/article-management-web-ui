import { Notification } from '.';

export const error = (message: string): Notification => ({ type: 'error', message, icon: 'ni ni-bell-55' });
