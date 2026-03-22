import Header from './Header'
import {getTickerData} from '@/lib/sanity-queries'

export default async function HeaderWrapper() {
  const tickerData = await getTickerData()
  return <Header tickerData={tickerData ?? undefined} />
}
