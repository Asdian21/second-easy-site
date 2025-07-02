import styled from "styled-components";

export const StyleContacts = styled.div`
	display: flex;
	flex-direction: column;
	margin: 100px auto 150px;
	align-items: center;
	gap: 60px;
	h2 {
		font: 500 36px "Oswald";
		text-transform: uppercase;
	}
	/* scroll-animation.css */
	.contact-animation {
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.6s ease, transform 0.6s ease;
	}

	.contact-show {
		opacity: 1;
		transform: translateY(0);
	}

	.contact-delay-0 {
		transition-delay: 0s;
	}
	.contact-delay-1 {
		transition-delay: 0.15s;
	}
	.contact-delay-2 {
		transition-delay: 0.3s;
	}
	.contact-delay-3 {
		transition-delay: 0.45s;
	}
`;

export const StyleSocial = styled.div`
	width: 1110px;
	height: 191px;
	display: flex;
	gap: 30px;
	text-align: center;

	.socials {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 255px;

		.subjectName {
			font: 500 24px "Oswald";
			color: #999;
		}
		.subjectInfo {
			font: 500 24px "Oswald";
		}
		.subjectInfo2 {
			font: 500 24px "Oswald";
		}
	}
`;
