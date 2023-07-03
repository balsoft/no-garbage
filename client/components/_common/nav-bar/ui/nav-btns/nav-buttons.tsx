import React, {FC, useEffect, useState} from 'react';
import {HStack} from "../../../flex-stack";
import {useTranslation} from "next-i18next";
import {useCustomTranslation} from "../../../../../hooks/use-custom-translation";
import colors from "../../../../../styles/globals/colors";
import {useAppDispatch} from "../../../../../store/store";
import {Profile} from "../../../profile";
import {useSelector} from "react-redux";
import {getLoginData} from "../../../login-form/model/login-form.selectors";
import {VerticalDropdownMenu} from "../../../dropdown-menu";
import {switchModalWindowVisibility} from "../../../modal-window/model/modal-window.helpers";
import {Button} from "../../../button";
import {useRouter} from "next/router";

export interface NavButtonsProps {
    userData?: any
    fontColor?: string
}

const NavButtons: FC<NavButtonsProps> = ({userData, fontColor}) => {

    const { t } = useTranslation("main");
    const {pathname} = useRouter();
    const [backgroundOnHoverColor, setBackgroundOnHoverColor] = useState(colors.moderation)
    const dispatch = useAppDispatch();
    const profileData = useSelector(getLoginData);
    const [language, setLanguage]: any = useCustomTranslation();


    useEffect(()=> {
        console.log(pathname)
        switch (pathname){
            case "/":
                setBackgroundOnHoverColor(colors.pastelGreen);
                break;
            case "/map":
                setBackgroundOnHoverColor(colors.pastelGray);
                break;
            case "/moderation":
                setBackgroundOnHoverColor(colors.moderation);
                break;

        }
    },[pathname])

    return (
        <HStack
            align={"center"}
            justify={"space-between"}
            width={"auto"}
        >
            {
                userData.email || profileData ? (
                    <Profile
                        fontColor={fontColor}
                    />
                    ) : (
                    <Button
                        buttonName={t("login")!}
                        onClick={()=> switchModalWindowVisibility({dispatch})}
                        width={"126px"}
                        borderRadius={"8px"}
                        color={colors.defaultTextColor}
                        backgroundColor={colors.white}
                    />
                )
            }
            <HStack
                margin={"0 0 0 25px"}
                top={"0"}
                width={"126px"}
                height={"50px"}
                position={"relative"}
            >
                <VerticalDropdownMenu
                    items={["en", "ge", "ru"]}
                    position={"absolute"}
                    buttonHeight={50}
                    selectedProperty={language}
                    setSelectedProperty={setLanguage}
                    backgroundColorOnHover={backgroundOnHoverColor}
                />
            </HStack>
        </HStack>
    );
};

export default NavButtons;