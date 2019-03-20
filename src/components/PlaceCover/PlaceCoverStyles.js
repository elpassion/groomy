import styled from 'styled-components';
import { rem, transparentize } from 'polished';

import { negativeValue } from '../../helpers/functions';
import PawIcon from '../SvgAssets/PawIcon';
import { gap, colors, misc, fontWeight, fontSize, sizes } from 'styles/vars';
import { FlexValignCenter } from 'styles/common';

export const CoverWrapper = styled.div`
  position: relative;
  margin: 0 ${rem(negativeValue(gap.regular))};
  transition: opacity 0.2s ease-in;
`;

export const PlaceImage = styled.img.attrs({
  'data-object-fit': 'cover',
})`
  display: block;
  width: 100%;
  height: ${props =>
    props.isHero ? rem(sizes.heroHeight) : rem(sizes.coverHeight)};
  object-fit: cover;
  overflow: hidden;
`;

export const PlaceDetails = styled.div`
  width: calc(100% - ${rem(gap.xbig)});
  margin: 0 auto;
  padding: ${rem(gap.xsmall)};
  background: ${colors.white};
  border-radius: ${misc.regularBorderRadius};
  box-shadow: 0 ${rem(gap.tiny)} ${rem(gap.medium)} 0
    ${transparentize(0.7, colors.lightGray)};
  transform: translateY(-25%);
  transition: opacity 0.2s ease-in, transform 0.2s ease-in;
`;

export const PlaceName = styled.h2`
  margin: 0;
  overflow: hidden;
  color: ${colors.primaryBlack};
  font-weight: ${fontWeight.extraBold};
  font-size: ${rem(fontSize.large)};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const FlexWrapper = styled.div`
  display: flex;
  margin: 0 0 ${rem('8px')};
`;

export const LeftColumn = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  margin: 0 ${rem(gap.xsmall)} 0 0;
`;

export const RightColumn = styled.div`
  position: relative;
  display: flex;
  flex: 0 0 ${rem(sizes.ratingBadgeSize)};
  justify-content: center;
  margin: 0 0 0 auto;
`;

export const MetaFlexWrapper = styled(FlexWrapper)`
  margin: 0;
  color: ${colors.lightGray};
  font-size: ${fontSize.xxsmall};
`;

export const MetaLeftColumn = styled(LeftColumn)`
  ${FlexValignCenter};
`;

export const RatingBadgeWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: ${rem(sizes.ratingBadgeSize)};
  height: ${rem(sizes.ratingBadgeSize)};
  color: ${colors.white};
  font-weight: ${fontWeight.extraBold};
  font-size: ${rem(fontSize.xxlarge)};
  line-height: ${rem('78px')};
  background: ${colors.primaryVioletAccent};
  border-radius: ${misc.regularBorderRadius};
  pointer-events: none;
`;

export const PawIconBackground = styled(PawIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 80%;
  height: 80%;
  transform: translate(-50%, -50%);
`;
