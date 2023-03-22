import React from 'react';
import Text from "../../text/text";
import {useRouter} from "next/router";
import HStack from "../../flex-stack/h-stack/h-stack";
import {IStyledNavbar} from "../nav-bar.styled";

const LogoBlock = ({ nameColor1, nameColor2 }: IStyledNavbar) => {
    const router = useRouter();
    return (
        <HStack
            justify={"start"}
            align={"center"}
            onClick={()=>{
                router?.push("/")
            }}
            cursor={"pointer"}
        >

            <Text
                tag={"h2"}
                text={"No"}
                size={"34px"}
                color={nameColor1}
            />
            <Text
                tag={"h2"}
                text={"garba.ge"}
                size={"34px"}
                color={nameColor2}
            />
        </HStack>

    );
};

export default LogoBlock;