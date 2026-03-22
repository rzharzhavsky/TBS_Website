import {tickerItem, tickerSettings} from './ticker'

/** Studio only exposes the news ticker. Gallery is managed at /admin/gallery. */
export const schemaTypes = [tickerItem, tickerSettings]
