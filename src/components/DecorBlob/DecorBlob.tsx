import React from "react";
import styled from "styled-components";

const BlobWrapper = styled.div`
	position:relative;
	width:100%;
	max-width:103rem;
	margin: auto;
	
	&:after {
		content:"";
		padding-top:100%;
		display:block;
	}

	> div {
		position: absolute;
		z-index:1;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		opacity:0.3;

		&:after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			border-radius:50%;
			background: radial-gradient(50% 50% at 50% 50%, #010F1C 0%, rgba(3, 24, 43, 0.892958) 22.4%, #042038 41.15%, rgba(13, 72, 123, 0.93) 71.88%, rgba(64, 128, 179, 0.6073) 93.75%, rgba(202, 229, 240, 0.2) 100%);
			mix-blend-mode: normal;
			box-shadow: 0px 0px 30px 20px rgba(138, 249, 255, 0.41), 0px 8px 20px rgba(0, 0, 0, 0.6), inset -7px 14px 20px 23px rgba(255, 250, 208, 0.5), inset 0px 40px 25px 26px #00DEEB;
		}

		&:not(:first-child) {
			animation: rotating 14s linear infinite;
		}

		&:nth-child(1) {
			z-index:2;
			opacity:1;

			&:after {
				animation: rotating-bounce 14s linear infinite;
			}

		}

		&:nth-child(2){
			&:after{
				transform: matrix(-0.91, 0.42, -0.42, -0.91, 0, 0) scale(0.9, 1.12);
			}
		}

		&:nth-child(3){
			animation-delay: 7s;
			
			&:after{
				transform: matrix(-0.48, 0.87, -0.87, -0.49, 0, 0) scale(0.9, 1.12);
			}
		}

		&:nth-child(4){
			animation: rotating-backwards 14s linear infinite;
			animation-delay: 3s;

			&:after{
				transform: matrix(0.74, 0.67, -0.67, 0.74, 0, 0) scale(0.9, 1.12);
			}
		}
	}

	@keyframes rotating {
	  	from { transform: rotate(0deg); }
	  	to { transform: rotate(360deg); }
	}

	@keyframes rotating-backwards {
	  	from { transform: rotate(0deg); }
	  	to { transform: rotate(-360deg); }
	}

	@keyframes rotating-bounce {
	  	0%  { transform: rotate(0deg) scale(1); }
	  	25% { transform: rotate(90deg) scale(0.95); }
	  	50% { transform: rotate(180deg) scale(1); }
	  	75% { transform: rotate(270deg) scale(0.95); }
	  	100%{ transform: rotate(360deg) scale(1); }
	}
`;

export const DecorBlob = () => {
    return (
    	<BlobWrapper>
    		<div></div>
    		<div></div>
    		<div></div>
    		<div></div>
    	</BlobWrapper>
    )
};
