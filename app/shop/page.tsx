"use client";

import { FormEvent, useState } from 'react';

const maintainerEmail = 'contact@aantrika.com';
const countryOptions = [
  { value: '+93', label: '🇦🇫 Afghanistan' },
  { value: '+355', label: '🇦🇱 Albania' },
  { value: '+213', label: '🇩🇿 Algeria' },
  { value: '+1', label: '🇦🇸 American Samoa' },
  { value: '+376', label: '🇦🇩 Andorra' },
  { value: '+244', label: '🇦🇴 Angola' },
  { value: '+1264', label: '🇦🇮 Anguilla' },
  { value: '+1268', label: '🇦🇬 Antigua & Barbuda' },
  { value: '+54', label: '🇦🇷 Argentina' },
  { value: '+374', label: '🇦🇲 Armenia' },
  { value: '+297', label: '🇦🇼 Aruba' },
  { value: '+61', label: '🇦🇺 Australia' },
  { value: '+43', label: '🇦🇹 Austria' },
  { value: '+994', label: '🇦🇿 Azerbaijan' },
  { value: '+1242', label: '🇧🇸 Bahamas' },
  { value: '+973', label: '🇧🇭 Bahrain' },
  { value: '+880', label: '🇧🇩 Bangladesh' },
  { value: '+1246', label: '🇧🇧 Barbados' },
  { value: '+375', label: '🇧🇾 Belarus' },
  { value: '+32', label: '🇧🇪 Belgium' },
  { value: '+501', label: '🇧🇿 Belize' },
  { value: '+229', label: '🇧🇯 Benin' },
  { value: '+1441', label: '🇧🇲 Bermuda' },
  { value: '+975', label: '🇧🇹 Bhutan' },
  { value: '+591', label: '🇧🇴 Bolivia' },
  { value: '+387', label: '🇧🇦 Bosnia & Herzegovina' },
  { value: '+267', label: '🇧🇼 Botswana' },
  { value: '+55', label: '🇧🇷 Brazil' },
  { value: '+246', label: '🇧🇮 British Indian Ocean Territory' },
  { value: '+1284', label: '🇻🇬 British Virgin Islands' },
  { value: '+673', label: '🇧🇳 Brunei' },
  { value: '+359', label: '🇧🇬 Bulgaria' },
  { value: '+226', label: '🇧🇫 Burkina Faso' },
  { value: '+257', label: '🇧🇮 Burundi' },
  { value: '+855', label: '🇰🇭 Cambodia' },
  { value: '+237', label: '🇨🇲 Cameroon' },
  { value: '+1', label: '🇨🇦 Canada' },
  { value: '+238', label: '🇨🇻 Cape Verde' },
  { value: '+1345', label: '🇰🇾 Cayman Islands' },
  { value: '+236', label: '🇨🇫 Central African Republic' },
  { value: '+235', label: '🇹🇩 Chad' },
  { value: '+56', label: '🇨🇱 Chile' },
  { value: '+86', label: '🇨🇳 China' },
  { value: '+61', label: '🇨🇽 Christmas Island' },
  { value: '+61', label: '🇨🇨 Cocos Islands' },
  { value: '+57', label: '🇨🇴 Colombia' },
  { value: '+269', label: '🇰🇲 Comoros' },
  { value: '+242', label: '🇨🇬 Congo' },
  { value: '+243', label: '🇨🇩 Congo (DRC)' },
  { value: '+682', label: '🇨🇰 Cook Islands' },
  { value: '+506', label: '🇨🇷 Costa Rica' },
  { value: '+385', label: '🇭🇷 Croatia' },
  { value: '+53', label: '🇨🇺 Cuba' },
  { value: '+599', label: '🇨🇼 Curaçao' },
  { value: '+357', label: '🇨🇾 Cyprus' },
  { value: '+420', label: '🇨🇿 Czech Republic' },
  { value: '+45', label: '🇩🇰 Denmark' },
  { value: '+253', label: '🇩🇯 Djibouti' },
  { value: '+1767', label: '🇩🇲 Dominica' },
  { value: '+1', label: '🇩🇴 Dominican Republic' },
  { value: '+593', label: '🇪🇨 Ecuador' },
  { value: '+20', label: '🇪🇬 Egypt' },
  { value: '+503', label: '🇸🇻 El Salvador' },
  { value: '+240', label: '🇬🇶 Equatorial Guinea' },
  { value: '+291', label: '🇪🇷 Eritrea' },
  { value: '+372', label: '🇪🇪 Estonia' },
  { value: '+251', label: '🇪🇹 Ethiopia' },
  { value: '+500', label: '🇫🇰 Falkland Islands' },
  { value: '+298', label: '🇫🇴 Faroe Islands' },
  { value: '+679', label: '🇫🇯 Fiji' },
  { value: '+358', label: '🇫🇮 Finland' },
  { value: '+33', label: '🇫🇷 France' },
  { value: '+594', label: '🇬🇫 French Guiana' },
  { value: '+689', label: '🇵🇫 French Polynesia' },
  { value: '+241', label: '🇬🇦 Gabon' },
  { value: '+220', label: '🇬🇲 Gambia' },
  { value: '+995', label: '🇬🇪 Georgia' },
  { value: '+49', label: '🇩🇪 Germany' },
  { value: '+233', label: '🇬🇭 Ghana' },
  { value: '+350', label: '🇬🇮 Gibraltar' },
  { value: '+30', label: '🇬🇷 Greece' },
  { value: '+299', label: '🇬🇱 Greenland' },
  { value: '+1473', label: '🇬🇩 Grenada' },
  { value: '+590', label: '🇬🇵 Guadeloupe' },
  { value: '+1671', label: '🇬🇺 Guam' },
  { value: '+44', label: '🇬🇬 Guernsey' },
  { value: '+224', label: '🇬🇳 Guinea' },
  { value: '+245', label: '🇬🇼 Guinea-Bissau' },
  { value: '+592', label: '🇬🇾 Guyana' },
  { value: '+509', label: '🇭🇹 Haiti' },
  { value: '+504', label: '🇭🇳 Honduras' },
  { value: '+852', label: '🇭🇰 Hong Kong' },
  { value: '+36', label: '🇭🇺 Hungary' },
  { value: '+354', label: '🇮🇸 Iceland' },
  { value: '+91', label: '🇮🇳 India' },
  { value: '+62', label: '🇮🇩 Indonesia' },
  { value: '+98', label: '🇮🇷 Iran' },
  { value: '+964', label: '🇮🇶 Iraq' },
  { value: '+353', label: '🇮🇪 Ireland' },
  { value: '+44', label: '🇮🇲 Isle of Man' },
  { value: '+972', label: '🇮🇱 Israel' },
  { value: '+39', label: '🇮🇹 Italy' },
  { value: '+1876', label: '🇯🇲 Jamaica' },
  { value: '+81', label: '🇯🇵 Japan' },
  { value: '+44', label: '🇯🇪 Jersey' },
  { value: '+962', label: '🇯🇴 Jordan' },
  { value: '+7', label: '🇰🇿 Kazakhstan' },
  { value: '+254', label: '🇰🇪 Kenya' },
  { value: '+686', label: '🇰🇮 Kiribati' },
  { value: '+383', label: '🇽🇰 Kosovo' },
  { value: '+965', label: '🇰🇼 Kuwait' },
  { value: '+996', label: '🇰🇬 Kyrgyzstan' },
  { value: '+856', label: '🇱🇦 Laos' },
  { value: '+371', label: '🇱🇻 Latvia' },
  { value: '+961', label: '🇱🇧 Lebanon' },
  { value: '+266', label: '🇱🇸 Lesotho' },
  { value: '+231', label: '🇱🇷 Liberia' },
  { value: '+218', label: '🇱🇾 Libya' },
  { value: '+423', label: '🇱🇮 Liechtenstein' },
  { value: '+370', label: '🇱🇹 Lithuania' },
  { value: '+352', label: '🇱🇺 Luxembourg' },
  { value: '+853', label: '🇲🇴 Macau' },
  { value: '+389', label: '🇲🇰 North Macedonia' },
  { value: '+261', label: '🇲🇬 Madagascar' },
  { value: '+265', label: '🇲🇼 Malawi' },
  { value: '+60', label: '🇲🇾 Malaysia' },
  { value: '+960', label: '🇲🇻 Maldives' },
  { value: '+223', label: '🇲🇱 Mali' },
  { value: '+356', label: '🇲🇹 Malta' },
  { value: '+692', label: '🇲🇭 Marshall Islands' },
  { value: '+596', label: '🇲🇶 Martinique' },
  { value: '+222', label: '🇲🇷 Mauritania' },
  { value: '+230', label: '🇲🇺 Mauritius' },
  { value: '+262', label: '🇲🇾 Mayotte' },
  { value: '+52', label: '🇲🇽 Mexico' },
  { value: '+691', label: '🇫🇲 Micronesia' },
  { value: '+373', label: '🇲🇩 Moldova' },
  { value: '+377', label: '🇲🇨 Monaco' },
  { value: '+976', label: '🇲🇳 Mongolia' },
  { value: '+382', label: '🇲🇪 Montenegro' },
  { value: '+1664', label: '🇲🇸 Montserrat' },
  { value: '+212', label: '🇲🇦 Morocco' },
  { value: '+258', label: '🇲🇿 Mozambique' },
  { value: '+95', label: '🇲🇲 Myanmar' },
  { value: '+264', label: '🇳🇦 Namibia' },
  { value: '+674', label: '🇳🇷 Nauru' },
  { value: '+977', label: '🇳🇵 Nepal' },
  { value: '+31', label: '🇳🇱 Netherlands' },
  { value: '+687', label: '🇳🇨 New Caledonia' },
  { value: '+64', label: '🇳🇿 New Zealand' },
  { value: '+505', label: '🇳🇮 Nicaragua' },
  { value: '+227', label: '🇳🇪 Niger' },
  { value: '+234', label: '🇳🇬 Nigeria' },
  { value: '+683', label: '🇳🇺 Niue' },
  { value: '+672', label: '🇳🇫 Norfolk Island' },
  { value: '+850', label: '🇰🇵 North Korea' },
  { value: '+47', label: '🇳🇴 Norway' },
  { value: '+968', label: '🇴🇲 Oman' },
  { value: '+92', label: '🇵🇰 Pakistan' },
  { value: '+680', label: '🇵🇼 Palau' },
  { value: '+970', label: '🇵🇸 Palestine' },
  { value: '+507', label: '🇵🇦 Panama' },
  { value: '+675', label: '🇵🇬 Papua New Guinea' },
  { value: '+595', label: '🇵🇾 Paraguay' },
  { value: '+51', label: '🇵🇪 Peru' },
  { value: '+63', label: '🇵🇭 Philippines' },
  { value: '+64', label: '🇵🇳 Pitcairn' },
  { value: '+48', label: '🇵🇱 Poland' },
  { value: '+351', label: '🇵🇹 Portugal' },
  { value: '+1', label: '🇵🇷 Puerto Rico' },
  { value: '+974', label: '🇶🇦 Qatar' },
  { value: '+262', label: '🇷🇪 Réunion' },
  { value: '+40', label: '🇷🇴 Romania' },
  { value: '+7', label: '🇷🇺 Russia' },
  { value: '+250', label: '🇷🇼 Rwanda' },
  { value: '+590', label: '🇧🇱 Saint Barthélemy' },
  { value: '+290', label: '🇸🇭 Saint Helena' },
  { value: '+1869', label: '🇰🇳 Saint Kitts & Nevis' },
  { value: '+1758', label: '🇱🇨 Saint Lucia' },
  { value: '+590', label: '🇲🇫 Saint Martin' },
  { value: '+508', label: '🇵🇲 Saint Pierre & Miquelon' },
  { value: '+1784', label: '🇻🇨 Saint Vincent & Grenadines' },
  { value: '+685', label: '🇼🇸 Samoa' },
  { value: '+378', label: '🇸🇲 San Marino' },
  { value: '+239', label: '🇸🇹 São Tomé & Príncipe' },
  { value: '+966', label: '🇸🇦 Saudi Arabia' },
  { value: '+221', label: '🇸🇳 Senegal' },
  { value: '+381', label: '🇷🇸 Serbia' },
  { value: '+248', label: '🇸🇨 Seychelles' },
  { value: '+232', label: '🇸🇱 Sierra Leone' },
  { value: '+65', label: '🇸🇬 Singapore' },
  { value: '+1721', label: '🇸🇽 Sint Maarten' },
  { value: '+421', label: '🇸🇰 Slovakia' },
  { value: '+386', label: '🇸🇮 Slovenia' },
  { value: '+677', label: '🇸🇧 Solomon Islands' },
  { value: '+252', label: '🇸🇴 Somalia' },
  { value: '+27', label: '🇿🇦 South Africa' },
  { value: '+500', label: '🇬🇸 South Georgia & South Sandwich Islands' },
  { value: '+82', label: '🇰🇷 South Korea' },
  { value: '+211', label: '🇸🇸 South Sudan' },
  { value: '+34', label: '🇪🇸 Spain' },
  { value: '+94', label: '🇱🇰 Sri Lanka' },
  { value: '+249', label: '🇸🇩 Sudan' },
  { value: '+597', label: '🇸🇷 Suriname' },
  { value: '+268', label: '🇸🇿 Eswatini' },
  { value: '+46', label: '🇸🇪 Sweden' },
  { value: '+41', label: '🇨🇭 Switzerland' },
  { value: '+963', label: '🇸🇾 Syria' },
  { value: '+886', label: '🇹🇼 Taiwan' },
  { value: '+992', label: '🇹🇯 Tajikistan' },
  { value: '+255', label: '🇹🇿 Tanzania' },
  { value: '+66', label: '🇹🇭 Thailand' },
  { value: '+670', label: '🇹🇱 Timor-Leste' },
  { value: '+228', label: '🇹🇬 Togo' },
  { value: '+690', label: '🇹🇰 Tokelau' },
  { value: '+676', label: '🇹🇴 Tonga' },
  { value: '+1868', label: '🇹🇹 Trinidad & Tobago' },
  { value: '+216', label: '🇹🇳 Tunisia' },
  { value: '+90', label: '🇹🇷 Turkey' },
  { value: '+993', label: '🇹🇲 Turkmenistan' },
  { value: '+1649', label: '🇹🇨 Turks & Caicos Islands' },
  { value: '+688', label: '🇹🇻 Tuvalu' },
  { value: '+256', label: '🇺🇬 Uganda' },
  { value: '+380', label: '🇺🇦 Ukraine' },
  { value: '+971', label: '🇦🇪 United Arab Emirates' },
  { value: '+44', label: '🇬🇧 United Kingdom' },
  { value: '+1', label: '🇺🇸 United States' },
  { value: '+598', label: '🇺🇾 Uruguay' },
  { value: '+998', label: '🇺🇿 Uzbekistan' },
  { value: '+678', label: '🇻🇺 Vanuatu' },
  { value: '+379', label: '🇻🇦 Vatican City' },
  { value: '+58', label: '🇻🇪 Venezuela' },
  { value: '+84', label: '🇻🇳 Vietnam' },
  { value: '+681', label: '🇼🇫 Wallis & Futuna' },
  { value: '+967', label: '🇾🇪 Yemen' },
  { value: '+260', label: '🇿🇲 Zambia' },
  { value: '+263', label: '🇿🇼 Zimbabwe' },
];

export default function ShopPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [product, setProduct] = useState('Aantrika reusable pads');
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent('Aantrika shop request');
    const body = encodeURIComponent(
      `Name: ${name}\nMobile no.: ${countryCode} ${phone}\nProduct name: ${product}\nQuantity: ${quantity}\nReceiver address: ${address}\nNotes: ${notes}`
    );

    window.location.href = `mailto:${maintainerEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="bg-cotton min-h-screen px-6 py-10 text-soil sm:px-10 lg:px-14">
      <div className="mx-auto max-w-5xl rounded-[36px] border border-soil/10 bg-white/95 p-8 shadow-paper shadow-soil/10 sm:p-12">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-soil/60">Shop Aantrika</p>
          <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">Order your pads directly by email</h1>
          <p className="max-w-3xl text-base leading-8 text-soil/80">
            Fill in your details and a pre-composed email will open in your mailbox, addressed to our team at {maintainerEmail}.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="min-w-0 space-y-2">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-soil/70">Full name</span>
              <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-[24px] border border-soil/20 bg-sand/50 px-5 py-4 text-base text-ink outline-none transition focus:border-soil focus:ring-2 focus:ring-moss/20"
                placeholder="Your name"
              />
            </label>
            <label className="min-w-0 space-y-2">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-soil/70">Email address</span>
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-[24px] border border-soil/20 bg-sand/50 px-5 py-4 text-base text-ink outline-none transition focus:border-soil focus:ring-2 focus:ring-moss/20"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="min-w-0 space-y-2">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-soil/70">Phone</span>
              <div className="flex flex-col gap-3 sm:flex-row">
                <select
                  value={countryCode}
                  onChange={(event) => setCountryCode(event.target.value)}
                  className="h-14 rounded-[24px] border border-soil/20 bg-sand/50 px-4 text-sm font-medium text-ink outline-none transition focus:border-soil focus:ring-2 focus:ring-moss/20 sm:w-36"
                >
                  {countryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="w-full min-w-0 rounded-[24px] border border-soil/20 bg-sand/50 px-5 py-4 text-base text-ink outline-none transition focus:border-soil focus:ring-2 focus:ring-moss/20"
                  placeholder="12345 67890"
                />
              </div>
            </label>
            <label className="min-w-0 space-y-2">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-soil/70">Preferred quantity</span>
              <input
                required
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                className="w-full rounded-[24px] border border-soil/20 bg-sand/50 px-5 py-4 text-base text-ink outline-none transition focus:border-soil focus:ring-2 focus:ring-moss/20"
                placeholder="e.g. 1"
              />
            </label>
          </div>

          <label className="min-w-0 space-y-2">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-soil/70">Receiver address</span>
            <textarea
              required
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              className="w-full min-h-[120px] rounded-[24px] border border-soil/20 bg-sand/50 px-5 py-4 text-base text-ink outline-none transition focus:border-soil focus:ring-2 focus:ring-moss/20"
              placeholder="Street, city, state, postal code"
            />
          </label>

          <label className="min-w-0 space-y-2">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-soil/70">Product interest</span>
            <input
              value={product}
              onChange={(event) => setProduct(event.target.value)}
              className="w-full rounded-[24px] border border-soil/20 bg-sand/50 px-5 py-4 text-base text-ink outline-none transition focus:border-soil focus:ring-2 focus:ring-moss/20"
              placeholder="Aantrika reusable pads"
            />
          </label>

          <label className="min-w-0 space-y-2">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-soil/70">Additional notes</span>
            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              className="w-full min-h-[120px] rounded-[24px] border border-soil/20 bg-sand/50 px-5 py-4 text-base text-ink outline-none transition focus:border-soil focus:ring-2 focus:ring-moss/20"
              placeholder="Any special request or personalization"
            />
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-soil/70">
              Submitting will open your default email client with the request pre-filled to {maintainerEmail}. Send the email to complete the order inquiry.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-[26px] bg-soil px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-cotton shadow-paper shadow-soil/10 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-soft"
            >
              Send order request
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
