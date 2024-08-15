import {uk} from 'date-fns/locale';
import {format} from 'date-fns';

export function getTableDateTime(inputDate: string): string {
  const date = new Date(inputDate);
  return format(date, 'dd.MM.yyyy HH:mm', {locale: uk});
}
