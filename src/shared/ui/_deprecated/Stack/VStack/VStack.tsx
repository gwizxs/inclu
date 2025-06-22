import { Flex, FlexProps } from '../Flex/Flex';

type VStaxkProps = Omit<FlexProps, 'direction'>;

export const VStack = (props: VStaxkProps) => {
  const { align = 'start' } = props;
  return <Flex {...props} direction="column" align={align} />;
};
