import React, {FC} from 'react';
import VStack from "../../../../_common/flex-stack/v-stack/v-stack";
import CustomHr from "../../../../_common/custom-hr/custom-hr";
import colors from "../../../../../styles/globals/colors";
import CustomNumber from "../../../../_common/custom-number/custom-number";
import Text from "../../../../_common/text/text";
import {useTranslation} from "next-i18next";

export interface IGoalsItemInternal {
    number: string,
    descriptionText: string
    width?: string
    height?: string
}
const GoalsItemInternal: FC<IGoalsItemInternal> = ({
    number,
    descriptionText,
    width
}) => {
    const { t } = useTranslation();
    return (
        <VStack
            justify={"center"}
            align={"center"}
            width={width}
            textAlign={"center"}
        >
            <CustomNumber
                number={number}
                fontSize={"48px"}
                color={colors.myrtleGreen}
            />
                <CustomHr
                    width={"195px"}
                    height={"4px"}
                    backgroundColor={colors.pastelGreen}
                    margin={"15px 0 15px"}
                />
                <Text
                    tag={"span"}
                    text={t(descriptionText)}

                />
        </VStack>
    );
};

export default GoalsItemInternal;