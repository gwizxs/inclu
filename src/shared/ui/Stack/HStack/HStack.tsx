import { Flex, FlexProps } from '../Flex/Flex';

type HStaxkProps = Omit<FlexProps, 'direction'>

export const HStack = (props: HStaxkProps) => {
    return (
        <Flex {...props} direction="row" />
    );
};
