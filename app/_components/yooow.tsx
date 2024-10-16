import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import Hero from './Hero';
 
export default function Yooooow() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}