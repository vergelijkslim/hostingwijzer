import { registerLinks, type AffiliateLink } from './affiliates';

// Real destination URLs — replace with tracked affiliate URLs once registered
// with Daisycon/TradeTracker/Awin. Current links are direct (untracked).
// TODO: Register at https://www.daisycon.com and https://www.tradetracker.com
//       to get tracked affiliate links with commission tracking.
const links: AffiliateLink[] = [
  {
    id: 'hosting-vergelijk',
    network: 'direct',
    merchant: 'Hostingvergelijker.nl',
    url: 'https://www.hostnet.nl/webhosting',
    niche: 'hosting',
    label: 'Vergelijk hosting pakketten',
    commissionType: 'cpa',
    commissionValue: '€20-€80 per aanmelding (na Daisycon registratie)',
  },
  {
    id: 'vps-vergelijk',
    network: 'direct',
    merchant: 'TransIP',
    url: 'https://www.transip.nl/vps/',
    niche: 'hosting',
    label: 'Bekijk VPS pakketten',
    commissionType: 'recurring',
    commissionValue: '€10-€50 per klant/maand (na TradeTracker registratie)',
  },
  {
    id: 'wordpress-hosting',
    network: 'direct',
    merchant: 'Antagonist',
    url: 'https://www.antagonist.nl/webhosting',
    niche: 'hosting',
    label: 'WordPress hosting bekijken',
    commissionType: 'cpa',
    commissionValue: '€15-€60 per aanmelding (na Daisycon registratie)',
  },
  {
    id: 'cloud-hosting',
    network: 'direct',
    merchant: 'DigitalOcean',
    url: 'https://www.digitalocean.com/',
    niche: 'hosting',
    label: 'Cloud hosting starten',
    commissionType: 'recurring',
    commissionValue: '$25-$200 per klant (via DigitalOcean referral)',
  },
  {
    id: 'domein-registreren',
    network: 'direct',
    merchant: 'TransIP',
    url: 'https://www.transip.nl/domeinnaam/',
    niche: 'hosting',
    label: 'Registreer je domein',
    commissionType: 'cpa',
    commissionValue: '€5-€15 per domein (na TradeTracker registratie)',
  },
  {
    id: 'transip',
    network: 'direct',
    merchant: 'TransIP',
    url: 'https://www.transip.nl/webhosting/',
    niche: 'hosting',
    label: 'TransIP hosting bekijken',
    commissionType: 'cpa',
    commissionValue: '€10-€40 per aanmelding (na TradeTracker registratie)',
  },
  {
    id: 'antagonist',
    network: 'direct',
    merchant: 'Antagonist',
    url: 'https://www.antagonist.nl/webhosting',
    niche: 'hosting',
    label: 'Antagonist hosting bekijken',
    commissionType: 'cpa',
    commissionValue: '€15-€60 per aanmelding (na Daisycon registratie)',
  },
  // Amazon PartnerNet (tag: vergelijk05-21)
  {
    id: 'amazon-yubikey',
    network: 'amazon',
    merchant: 'Amazon.nl',
    url: 'https://www.amazon.nl/dp/B08DHL1YDL', // YubiKey 5C NFC
    niche: 'hosting',
    label: 'YubiKey hardware beveiligingssleutel bij Amazon',
    commissionType: 'cps',
    commissionValue: '3-10% per verkoop',
  },
  {
    id: 'amazon-extern-ssd',
    network: 'amazon',
    merchant: 'Amazon.nl',
    url: 'https://www.amazon.nl/dp/B0BLJVFM5K', // Samsung T7 Shield 1TB externe SSD
    niche: 'hosting',
    label: 'Samsung T7 externe SSD voor backups bij Amazon',
    commissionType: 'cps',
    commissionValue: '3-10% per verkoop',
  },
];

registerLinks(links);

export default links;
