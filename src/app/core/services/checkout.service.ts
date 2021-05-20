import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
// import { checkoutUrl, countryUrl, stateUrl } from '../config/api';
import { BillingData } from '../models/BillingData';
import { NameValue } from '../models/NameValue';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private app: AppService) {}
  storeBillingData(billingData: BillingData) {
    return this.app.postApi('checkoutUrl', billingData).pipe(
      map((response) => {
        return response;
      }),
      retry(3),
      catchError(this.app.handleError)
    );
  }
  getStateList(): NameValue[] {
    return [
      {
        name: 'Andaman and Nicobar Islands',
        value: 'andaman and nicobar islands',
      },
      {
        name: 'Andhra Pradesh',
        value: 'andhra pradesh',
      },
      {
        name: 'Arunachal Pradesh',
        value: 'arunachal pradesh',
      },
      {
        name: 'Assam',
        value: 'assam',
      },
      {
        name: 'Bihar',
        value: 'bihar',
      },
      {
        name: 'Chandigarh',
        value: 'chandigarh',
      },
      {
        name: 'Chhattisgarh',
        value: 'chhattisgarh',
      },
      {
        name: 'Dadra and Nagar Haveli',
        value: 'dadra and nagar haveli',
      },
      {
        name: 'Daman and Diu',
        value: 'daman and diu',
      },
      {
        name: 'Delhi',
        value: 'delhi',
      },
      {
        name: 'Goa',
        value: 'goa',
      },
      {
        name: 'Gujarat',
        value: 'gujarat',
      },
      {
        name: 'Haryana',
        value: 'haryana',
      },
      {
        name: 'Himachal Pradesh',
        value: 'himachal pradesh',
      },
      {
        name: 'Jammu and Kashmir',
        value: 'jammu and kashmir',
      },
      {
        name: 'Jharkhand',
        value: 'jharkhand',
      },
      {
        name: 'Karnataka',
        value: 'karnataka',
      },
      {
        name: 'Kerala',
        value: 'kerala',
      },
      {
        name: 'Ladakh',
        value: 'ladakh',
      },
      {
        name: 'Lakshadweep',
        value: 'lakshadweep',
      },
      {
        name: 'Madhya Pradesh',
        value: 'madhya pradesh',
      },
      {
        name: 'Maharashtra',
        value: 'maharashtra',
      },
      {
        name: 'Manipur',
        value: 'manipur',
      },
      {
        name: 'Meghalaya',
        value: 'meghalaya',
      },
      {
        name: 'Mizoram',
        value: 'mizoram',
      },
      {
        name: 'Nagaland',
        value: 'nagaland',
      },
      {
        name: 'Odisha',
        value: 'odisha',
      },
      {
        name: 'Puducherry',
        value: 'puducherry',
      },
      {
        name: 'Punjab',
        value: 'punjab',
      },
      {
        name: 'Rajasthan',
        value: 'rajasthan',
      },
      {
        name: 'Sikkim',
        value: 'sikkim',
      },
      {
        name: 'Tamil Nadu',
        value: 'tamil nadu',
      },
      {
        name: 'Telangana',
        value: 'telangana',
      },
      {
        name: 'Tripura',
        value: 'tripura',
      },
      {
        name: 'Uttar Pradesh',
        value: 'uttar pradesh',
      },
      {
        name: 'Uttarakhand',
        value: 'uttarakhand',
      },
      {
        name: 'West Bengal',
        value: 'west bengal',
      },
    ];
  }
  getAllCountries(): NameValue[] {
    return [
      {
        name: 'Albania',
        value: 'albania',
      },
      {
        name: 'Åland Islands',
        value: 'aland Islands',
      },
      {
        name: 'Algeria',
        value: 'algeria',
      },
      {
        name: 'American Samoa',
        value: 'american Samoa',
      },
      {
        name: 'Andorra',
        value: 'andorra',
      },
      {
        name: 'Angola',
        value: 'angola',
      },
      {
        name: 'Anguilla',
        value: 'anguilla',
      },
      {
        name: 'Antarctica',
        value: 'antarctica',
      },
      {
        name: 'Antigua and Barbuda',
        value: 'antigua and barbuda',
      },
      {
        name: 'Argentina',
        value: 'argentina',
      },
      {
        name: 'Armenia',
        value: 'armenia',
      },
      {
        name: 'Aruba',
        value: 'aruba',
      },
      {
        name: 'Australia',
        value: 'australia',
      },
      {
        name: 'Austria',
        value: 'austria',
      },
      {
        name: 'Azerbaijan',
        value: 'azerbaijan',
      },
      {
        name: 'Bahamas (the)',
        value: 'bahamas',
      },
      {
        name: 'Bahrain',
        value: 'bahrain',
      },
      {
        name: 'Bangladesh',
        value: 'bangladesh',
      },
      {
        name: 'Barbados',
        value: 'barbados',
      },
      {
        name: 'Belarus',
        value: 'belarus',
      },
      {
        name: 'Belgium',
        value: 'belgium',
      },
      {
        name: 'Belize',
        value: 'belize',
      },
      {
        name: 'Benin',
        value: 'benin',
      },
      {
        name: 'Bermuda',
        value: 'bermuda',
      },
      {
        name: 'Bhutan',
        value: 'bhutan',
      },
      {
        name: 'Bolivia (Plurinational State of)',
        value: 'bolivia',
      },
      {
        name: 'Bonaire, Sint Eustatius and Saba',
        value: 'bonaire',
      },
      {
        name: 'Bosnia and Herzegovina',
        value: 'bosnia and herzegovina',
      },
      {
        name: 'Botswana',
        value: 'botswana',
      },
      {
        name: 'Bouvet Island',
        value: 'bouvet island',
      },
      {
        name: 'Brazil',
        value: 'brazil',
      },
      {
        name: 'British Indian Ocean Territory (the)',
        value: 'british indian ocean territory',
      },
      {
        name: 'Brunei Darussalam',
        value: 'brunei darussalam',
      },
      {
        name: 'Bulgaria',
        value: 'bulgaria',
      },
      {
        name: 'Burkina Faso',
        value: 'burkina faso',
      },
      {
        name: 'Burundi',
        value: 'burundi',
      },
      {
        name: 'Cabo Verde',
        value: 'cabo verde',
      },
      {
        name: 'Cambodia',
        value: 'cambodia',
      },
      {
        name: 'Cameroon',
        value: 'cameroon',
      },
      {
        name: 'Canada',
        value: 'cananda',
      },
      {
        name: 'Cayman Islands (the)',
        value: 'cayman islands',
      },
      {
        name: 'Central African Republic (the)',
        value: 'central african republic',
      },
      {
        name: 'Chad',
        value: 'chad',
      },
      {
        name: 'Chile',
        value: 'chile',
      },
      {
        name: 'China',
        value: 'china',
      },
      {
        name: 'Christmas Island',
        value: 'christmas island',
      },
      {
        name: 'Cocos (Keeling) Islands (the)',
        value: 'cocos islands',
      },
      {
        name: 'Colombia',
        value: 'colombia',
      },
      {
        name: 'Comoros (the)',
        value: 'comoros',
      },
      {
        name: 'Congo (the Democratic Republic of the)',
        value: 'the democratic republic of congo',
      },
      {
        name: 'Congo (the)',
        value: 'congo',
      },
      {
        name: 'Cook Islands (the)',
        value: 'cook islands',
      },
      {
        name: 'Costa Rica',
        value: 'costa rica',
      },
      {
        name: 'Croatia',
        value: 'croatia',
      },
      {
        name: 'Cuba',
        value: 'cuba',
      },
      {
        name: 'Curaçao',
        value: 'curacao',
      },
      {
        name: 'Cyprus',
        value: 'cyprus',
      },
      {
        name: 'Czechia',
        value: 'czechia',
      },
      {
        name: "Côte d'Ivoire",
        value: "cote d'ivoire",
      },
      {
        name: 'Denmark',
        value: 'denmark',
      },
      {
        name: 'Djibouti',
        value: 'djibouti',
      },
      {
        name: 'Dominica',
        value: 'dominica',
      },
      {
        name: 'Dominican Republic (the)',
        value: 'dominican republic',
      },
      {
        name: 'Ecuador',
        value: 'ecuador',
      },
      {
        name: 'Egypt',
        value: 'egypt',
      },
      {
        name: 'El Salvador',
        value: 'el salvador',
      },
      {
        name: 'Equatorial Guinea',
        value: 'equatorial guinea',
      },
      {
        name: 'Eritrea',
        value: 'eritrea',
      },
      {
        name: 'Estonia',
        value: 'estonia',
      },
      {
        name: 'Eswatini',
        value: 'eswatini',
      },
      {
        name: 'Ethiopia',
        value: 'ethiopia',
      },
      {
        name: 'Falkland Islands (the) [Malvinas]',
        value: 'falkland islands',
      },
      {
        name: 'Faroe Islands (the)',
        value: 'faroe islands',
      },
      {
        name: 'Fiji',
        value: 'fiji',
      },
      {
        name: 'Finland',
        value: 'finland',
      },
      {
        name: 'France',
        value: 'france',
      },
      {
        name: 'French Guiana',
        value: 'french guiana',
      },
      {
        name: 'French Polynesia',
        value: 'french polynesia',
      },
      {
        name: 'French Southern Territories (the)',
        value: 'french southern territories',
      },
      {
        name: 'Gabon',
        value: 'gabon',
      },
      {
        name: 'Gambia (the)',
        value: 'gambia',
      },
      {
        name: 'Georgia',
        value: 'georgia',
      },
      {
        name: 'Germany',
        value: 'germany',
      },
      {
        name: 'Ghana',
        value: 'ghana',
      },
      {
        name: 'Gibraltar',
        value: 'gibraltar',
      },
      {
        name: 'Greece',
        value: 'greece',
      },
      {
        name: 'Greenland',
        value: 'greenland',
      },
      {
        name: 'Grenada',
        value: 'grenada',
      },
      {
        name: 'Guadeloupe',
        value: 'guadeloupe',
      },
      {
        name: 'Guam',
        value: 'guam',
      },
      {
        name: 'Guatemala',
        value: 'guatemala',
      },
      {
        name: 'Guernsey',
        value: 'guernsey',
      },
      {
        name: 'Guinea',
        value: 'guinea',
      },
      {
        name: 'Guinea-Bissau',
        value: 'guinea-bissau',
      },
      {
        name: 'Guyana',
        value: 'guyana',
      },
      {
        name: 'Haiti',
        value: 'haiti',
      },
      {
        name: 'Heard Island and McDonald Islands',
        value: 'heard islands and mcdonald islands',
      },
      {
        name: 'Holy See (the)',
        value: 'holy see',
      },
      {
        name: 'Honduras',
        value: 'honduras',
      },
      {
        name: 'Hong Kong',
        value: 'hong kong',
      },
      {
        name: 'Hungary',
        value: 'hungary',
      },
      {
        name: 'Iceland',
        value: 'icelnad',
      },
      {
        name: 'India',
        value: 'india',
      },
      {
        name: 'Indonesia',
        value: 'indonesia',
      },
      {
        name: 'Iran (Islamic Republic of)',
        value: 'iran',
      },
      {
        name: 'Iraq',
        value: 'iraq',
      },
      {
        name: 'Ireland',
        value: 'ireland',
      },
      {
        name: 'Isle of Man',
        value: 'isle of man',
      },
      {
        name: 'Israel',
        value: 'israel',
      },
      {
        name: 'Italy',
        value: 'italy',
      },
      {
        name: 'Jamaica',
        value: 'jamaica',
      },
      {
        name: 'Japan',
        value: 'japan',
      },
      {
        name: 'Jersey',
        value: 'jersey',
      },
      {
        name: 'Jordan',
        value: 'jordan',
      },
      {
        name: 'Kazakhstan',
        value: 'kazakhstan',
      },
      {
        name: 'Kenya',
        value: 'kenya',
      },
      {
        name: 'Kiribati',
        value: 'kiribati',
      },
      {
        name: "Korea (the Democratic People's Republic of)",
        value: "the democratic people's republic of korea",
      },
      {
        name: 'Korea (the Republic of)',
        value: 'the republic of korea',
      },
      {
        name: 'Kuwait',
        value: 'kuwait',
      },
      {
        name: 'Kyrgyzstan',
        value: 'kyrgyzstan',
      },
      {
        name: "Lao People's Democratic Republic (the)",
        value: "lao people's democratic republic",
      },
      {
        name: 'Latvia',
        value: 'latvia',
      },
      {
        name: 'Lebanon',
        value: 'lebanon',
      },
      {
        name: 'Lesotho',
        value: 'lesotho',
      },
      {
        name: 'Liberia',
        value: 'liberia',
      },
      {
        name: 'Libya',
        value: 'libya',
      },
      {
        name: 'Liechtenstein',
        value: 'liechtenstein',
      },
      {
        name: 'Lithuania',
        value: 'lithuania',
      },
      {
        name: 'Luxembourg',
        value: 'luxembourg',
      },
      {
        name: 'Macao',
        value: 'macao',
      },
      {
        name: 'Madagascar',
        value: 'madagascar',
      },
      {
        name: 'Malawi',
        value: 'malawi',
      },
      {
        name: 'Malaysia',
        value: 'malaysia',
      },
      {
        name: 'Maldives',
        value: 'maldives',
      },
      {
        name: 'Mali',
        value: 'mali',
      },
      {
        name: 'Malta',
        value: 'malta',
      },
      {
        name: 'Marshall Islands (the)',
        value: 'marshall islands',
      },
      {
        name: 'Martinique',
        value: 'martinique',
      },
      {
        name: 'Mauritania',
        value: 'mauritania',
      },
      {
        name: 'Mauritius',
        value: 'mauritius',
      },
      {
        name: 'Mayotte',
        value: 'mayotte',
      },
      {
        name: 'Mexico',
        value: 'mexico',
      },
      {
        name: 'Micronesia (Federated States of)',
        value: 'micronesia',
      },
      {
        name: 'Moldova (the Republic of)',
        value: 'moldova',
      },
      {
        name: 'Monaco',
        value: 'monaco',
      },
      {
        name: 'Mongolia',
        value: 'mongolia',
      },
      {
        name: 'Montenegro',
        value: 'montenegro',
      },
      {
        name: 'Montserrat',
        value: 'montserrat',
      },
      {
        name: 'Morocco',
        value: 'morocco',
      },
      {
        name: 'Mozambique',
        value: 'mozambique',
      },
      {
        name: 'Myanmar',
        value: 'myanmar',
      },
      {
        name: 'Namibia',
        value: 'namibia',
      },
      {
        name: 'Nauru',
        value: 'nauru',
      },
      {
        name: 'Nepal',
        value: 'nepal',
      },
      {
        name: 'Netherlands (the)',
        value: 'Netherlands',
      },
      {
        name: 'New Caledonia',
        value: 'new caledoina',
      },
      {
        name: 'New Zealand',
        value: 'new zealand',
      },
      {
        name: 'Nicaragua',
        value: 'nicaragua',
      },
      {
        name: 'Niger (the)',
        value: 'niger',
      },
      {
        name: 'Nigeria',
        value: 'nigeria',
      },
      {
        name: 'Niue',
        value: 'niue',
      },
      {
        name: 'Norfolk Island',
        value: 'norfolk island',
      },
      {
        name: 'Northern Mariana Islands (the)',
        value: 'northern mariana islands',
      },
      {
        name: 'Norway',
        value: 'norway',
      },
      {
        name: 'Oman',
        value: 'oman',
      },
      {
        name: 'Pakistan',
        value: 'pakistan',
      },
      {
        name: 'Palau',
        value: 'palau',
      },
      {
        name: 'Palestine, State of',
        value: 'state of palestine',
      },
      {
        name: 'Panama',
        value: 'panama',
      },
      {
        name: 'Papua New Guinea',
        value: 'papua new guinea',
      },
      {
        name: 'Paraguay',
        value: 'paraguay',
      },
      {
        name: 'Peru',
        value: 'peru',
      },
      {
        name: 'Philippines (the)',
        value: 'philippines',
      },
      {
        name: 'Pitcairn',
        value: 'pitcairn',
      },
      {
        name: 'Poland',
        value: 'poland',
      },
      {
        name: 'Portugal',
        value: 'portugal',
      },
      {
        name: 'Puerto Rico',
        value: 'puerto rico',
      },
      {
        name: 'Qatar',
        value: 'qatar',
      },
      {
        name: 'Republic of North Macedonia',
        value: 'republic of north macedonia',
      },
      {
        name: 'Romania',
        value: 'romania',
      },
      {
        name: 'Russian Federation (the)',
        value: 'russian federation',
      },
      {
        name: 'Rwanda',
        value: 'rwanda',
      },
      {
        name: 'Réunion',
        value: 'reunion',
      },
      {
        name: 'Saint Barthélemy',
        value: 'saint barthelemy',
      },
      {
        name: 'Saint Helena, Ascension and Tristan da Cunha',
        value: 'saint helena',
      },
      {
        name: 'Saint Kitts and Nevis',
        value: 'saint kitts and nevis',
      },
      {
        name: 'Saint Lucia',
        value: 'saint lucia',
      },
      {
        name: 'Saint Martin (French part)',
        value: 'saint martin',
      },
      {
        name: 'Saint Pierre and Miquelon',
        value: 'saint pierre and miquelon',
      },
      {
        name: 'Saint Vincent and the Grenadines',
        value: 'saint vincent and grenadines',
      },
      {
        name: 'Samoa',
        value: 'samoa',
      },
      {
        name: 'San Marino',
        value: 'san marino',
      },
      {
        name: 'Sao Tome and Principe',
        value: 'sao tome and principe',
      },
      {
        name: 'Saudi Arabia',
        value: 'saudi arabia',
      },
      {
        name: 'Senegal',
        value: 'senegal',
      },
      {
        name: 'Serbia',
        value: 'serbia',
      },
      {
        name: 'Seychelles',
        value: 'seychelles',
      },
      {
        name: 'Sierra Leone',
        value: 'sierra leone',
      },
      {
        name: 'Singapore',
        value: 'singapore',
      },
      {
        name: 'Sint Maarten (Dutch part)',
        value: 'sint maarten',
      },
      {
        name: 'Slovakia',
        value: 'slovakia',
      },
      {
        name: 'Slovenia',
        value: 'slovenia',
      },
      {
        name: 'Solomon Islands',
        value: 'solomon islands',
      },
      {
        name: 'Somalia',
        value: 'somalia',
      },
      {
        name: 'South Africa',
        value: 'south africa',
      },
      {
        name: 'South Georgia and the South Sandwich Islands',
        value: 'south georgia and the south sandwich islands',
      },
      {
        name: 'South Sudan',
        value: 'south sudan',
      },
      {
        name: 'Spain',
        value: 'spain',
      },
      {
        name: 'Sri Lanka',
        value: 'sri lanka',
      },
      {
        name: 'Sudan (the)',
        value: 'sudan',
      },
      {
        name: 'Suriname',
        value: 'suriname',
      },
      {
        name: 'Svalbard and Jan Mayen',
        value: 'svalobard and jan mayen',
      },
      {
        name: 'Sweden',
        value: 'sweden',
      },
      {
        name: 'Switzerland',
        value: 'switzerland',
      },
      {
        name: 'Syrian Arab Republic',
        value: 'syrian arab republic',
      },
      {
        name: 'Taiwan (Province of China)',
        value: 'taiwan',
      },
      {
        name: 'Tajikistan',
        value: 'tajikistan',
      },
      {
        name: 'Tanzania, United Republic of',
        value: 'united republic of tanzania',
      },
      {
        name: 'Thailand',
        value: 'thailand',
      },
      {
        name: 'Timor-Leste',
        value: 'timor-leste',
      },
      {
        name: 'Togo',
        value: 'togo',
      },
      {
        name: 'Tokelau',
        value: 'tokelau',
      },
      {
        name: 'Tonga',
        value: 'tonga',
      },
      {
        name: 'Trinidad and Tobago',
        value: 'trinidad and tobago',
      },
      {
        name: 'Tunisia',
        value: 'tunisia',
      },
      {
        name: 'Turkey',
        value: 'turkey',
      },
      {
        name: 'Turkmenistan',
        value: 'turkmenistan',
      },
      {
        name: 'Turks and Caicos Islands (the)',
        value: 'turks and caicos islands',
      },
      {
        name: 'Tuvalu',
        value: 'tuvalu',
      },
      {
        name: 'Uganda',
        value: 'uganda',
      },
      {
        name: 'Ukraine',
        value: 'ukraine',
      },
      {
        name: 'United Arab Emirates (the)',
        value: 'united arab emirates',
      },
      {
        name: 'United Kingdom of Great Britain and Northern Ireland (the)',
        value: 'united kingdom of great britain and northern ireland',
      },
      {
        name: 'United States Minor Outlying Islands (the)',
        value: 'united states minor outlying islands',
      },
      {
        name: 'United States of America (the)',
        value: 'united states of america',
      },
      {
        name: 'Uruguay',
        value: 'uruguay',
      },
      {
        name: 'Uzbekistan',
        value: 'uzbekistan',
      },
      {
        name: 'Vanuatu',
        value: 'vanuatu',
      },
      {
        name: 'Venezuela (Bolivarian Republic of)',
        value: 'venezuela',
      },
      {
        name: 'Viet Nam',
        value: 'viet nam',
      },
      {
        name: 'Virgin Islands (British)',
        value: 'virgin islands british',
      },
      {
        name: 'Virgin Islands (U.S.)',
        value: 'virgin islands u.s.',
      },
      {
        name: 'Wallis and Futuna',
        value: 'wallis and futuna',
      },
      {
        name: 'Western Sahara',
        value: 'western sahara',
      },
      {
        name: 'Yemen',
        value: 'yemen',
      },
      {
        name: 'Zambia',
        value: 'zambia',
      },
      {
        name: 'Zimbabwe',
        value: 'zimbabwe',
      },
    ];
  }
}
