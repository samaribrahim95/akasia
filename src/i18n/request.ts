import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';

const locales = ['en', 'ar']

export default getRequestConfig(async () => {
  // This typically corresponds to the `[locale]` segment
  const locale = (await cookies()).get("AKASIAAPP_LOCALE")?.value ?? 'en'
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});