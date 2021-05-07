/**
 * External dependencies
 */
import { isEmpty } from 'lodash';

/**
 * WordPress dependencies
 */
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import GradientPicker from './control';
import useThemeSetting from '../use-theme-setting';

export default function GradientPanel( props ) {
	const gradients = useThemeSetting( 'color.gradients' );
	if ( isEmpty( gradients ) ) {
		return null;
	}
	return (
		<PanelBody title={ __( 'Gradient' ) }>
			<GradientPicker { ...props } />
		</PanelBody>
	);
}
