const BORDER_RADIUS = '4px';
const BOX_BORDER = '1px solid #e6e6e6';

const Theme = {
	bg: {
		default: '#FFFFFF',
		reverse: '#16171A',
		wash: '#FAFAFA',
		divider: '#F6F7F8',
		border: '#EBECED',
		inactive: '#DFE7EF',
	},
	brand: {
		default: '#4400CC',
		alt: '#7B16FF',
		wash: '#E8E5FF',
		border: '#DDD9FF',
		dark: '#2A0080',
	},
	generic: {
		default: '#E6ECF7',
		alt: '#F6FBFC',
	},
	social: {
		facebook: {
			default: '#3B5998',
			alt: '#5A85DF',
		},
		twitter: {
			default: '#00ACED',
			alt: '#53D0FF',
		},
		google: {
			default: '#ea4335',
			alt: '#ea4335',
		},
		github: {
			default: '#16171A',
			alt: '#828C99',
		},
		ph: {
			default: '#D85537',
			alt: '#D85537',
		},
	},
	space: {
		default: '#0062D6',
		alt: '#1CD2F2',
		wash: '#E5F0FF',
		border: '#BDD8FF',
		dark: '#0F015E',
	},
	special: {
		default: '#E58306',
		alt: '#F1C742',
		dark: '#7D4A00',
		wash: '#FFF5E5',
		border: '#FFE6BF',
	},
	success: {
		default: '#00B88B',
		alt: '#00D5BD',
		dark: '#00663C',
		wash: '#D9FFF2',
		border: '#9FF5D9',
	},
	text: {
		default: '#24292E',
		secondary: '#384047',
		alt: '#67717A',
		placeholder: '#7C8894',
		reverse: '#FFFFFF',
	},
	warn: {
		default: '#E22F2F',
		alt: '#E2197A',
		dark: '#85000C',
		wash: '#FFEDF6',
		border: '#FFCCE5',
	},
	maxWidth: '100%',
	boxBorder: BOX_BORDER,
	borderRadius: BORDER_RADIUS,
	whiteBox: `border-radius:${BORDER_RADIUS};
            border:${BOX_BORDER};
            background-color:white;
	`,
	responsiveContainer: `
		@media (max-width: 1919px) {
			width: 1376px;
		}
		@media (max-width: 1440px) {
			width: 1280px;
		}
			@media (max-width: 1312px) {
			width: 912px;
		}
		@media (max-width: 944px) {
			width: calc(100% - 2rem);
		}
		@media (max-width: 767px) {
			width: calc(100% - 2rem);
		}
		width: 1728px;
		margin-left: auto;
		margin-right: auto;
	`,
};

export default Theme;
