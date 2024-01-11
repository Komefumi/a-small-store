import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myPersonalTheme: CustomThemeConfig = {
	name: 'my-personal-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '255 255 255',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #0fce34
		'--color-primary-50': '219 248 225', // #dbf8e1
		'--color-primary-100': '207 245 214', // #cff5d6
		'--color-primary-200': '195 243 204', // #c3f3cc
		'--color-primary-300': '159 235 174', // #9febae
		'--color-primary-400': '87 221 113', // #57dd71
		'--color-primary-500': '15 206 52', // #0fce34
		'--color-primary-600': '14 185 47', // #0eb92f
		'--color-primary-700': '11 155 39', // #0b9b27
		'--color-primary-800': '9 124 31', // #097c1f
		'--color-primary-900': '7 101 25', // #076519
		// secondary | #b3b8a4
		'--color-secondary-50': '244 244 241', // #f4f4f1
		'--color-secondary-100': '240 241 237', // #f0f1ed
		'--color-secondary-200': '236 237 232', // #ecede8
		'--color-secondary-300': '225 227 219', // #e1e3db
		'--color-secondary-400': '202 205 191', // #cacdbf
		'--color-secondary-500': '179 184 164', // #b3b8a4
		'--color-secondary-600': '161 166 148', // #a1a694
		'--color-secondary-700': '134 138 123', // #868a7b
		'--color-secondary-800': '107 110 98', // #6b6e62
		'--color-secondary-900': '88 90 80', // #585a50
		// tertiary | #17a459
		'--color-tertiary-50': '220 241 230', // #dcf1e6
		'--color-tertiary-100': '209 237 222', // #d1edde
		'--color-tertiary-200': '197 232 214', // #c5e8d6
		'--color-tertiary-300': '162 219 189', // #a2dbbd
		'--color-tertiary-400': '93 191 139', // #5dbf8b
		'--color-tertiary-500': '23 164 89', // #17a459
		'--color-tertiary-600': '21 148 80', // #159450
		'--color-tertiary-700': '17 123 67', // #117b43
		'--color-tertiary-800': '14 98 53', // #0e6235
		'--color-tertiary-900': '11 80 44', // #0b502c
		// success | #b67aa3
		'--color-success-50': '244 235 241', // #f4ebf1
		'--color-success-100': '240 228 237', // #f0e4ed
		'--color-success-200': '237 222 232', // #eddee8
		'--color-success-300': '226 202 218', // #e2cada
		'--color-success-400': '204 162 191', // #cca2bf
		'--color-success-500': '182 122 163', // #b67aa3
		'--color-success-600': '164 110 147', // #a46e93
		'--color-success-700': '137 92 122', // #895c7a
		'--color-success-800': '109 73 98', // #6d4962
		'--color-success-900': '89 60 80', // #593c50
		// warning | #bf0394
		'--color-warning-50': '245 217 239', // #f5d9ef
		'--color-warning-100': '242 205 234', // #f2cdea
		'--color-warning-200': '239 192 228', // #efc0e4
		'--color-warning-300': '229 154 212', // #e59ad4
		'--color-warning-400': '210 79 180', // #d24fb4
		'--color-warning-500': '191 3 148', // #bf0394
		'--color-warning-600': '172 3 133', // #ac0385
		'--color-warning-700': '143 2 111', // #8f026f
		'--color-warning-800': '115 2 89', // #730259
		'--color-warning-900': '94 1 73', // #5e0149
		// error | #33c48c
		'--color-error-50': '224 246 238', // #e0f6ee
		'--color-error-100': '214 243 232', // #d6f3e8
		'--color-error-200': '204 240 226', // #ccf0e2
		'--color-error-300': '173 231 209', // #ade7d1
		'--color-error-400': '112 214 175', // #70d6af
		'--color-error-500': '51 196 140', // #33c48c
		'--color-error-600': '46 176 126', // #2eb07e
		'--color-error-700': '38 147 105', // #269369
		'--color-error-800': '31 118 84', // #1f7654
		'--color-error-900': '25 96 69', // #196045
		// surface | #3f1a2e
		'--color-surface-50': '226 221 224', // #e2dde0
		'--color-surface-100': '217 209 213', // #d9d1d5
		'--color-surface-200': '207 198 203', // #cfc6cb
		'--color-surface-300': '178 163 171', // #b2a3ab
		'--color-surface-400': '121 95 109', // #795f6d
		'--color-surface-500': '63 26 46', // #3f1a2e
		'--color-surface-600': '57 23 41', // #391729
		'--color-surface-700': '47 20 35', // #2f1423
		'--color-surface-800': '38 16 28', // #26101c
		'--color-surface-900': '31 13 23' // #1f0d17
	}
};
