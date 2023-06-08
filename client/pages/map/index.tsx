import FiltersBlock from "../../components/_map/filters-block/filters-block";
import NavBar from "../../components/_common/nav-bar/nav-bar";
import {Mapbox} from "../../map/ui";
import colors from "../../styles/globals/colors";
import {Div} from "../../components/_common/custom-image/custom-div.styled";
import PageWrapper from "../../components/_common/page-wrapper/page-wrapper";
import {LoginModalWindow} from "../../components/_common/login-modal-window";
import React, {useEffect, useRef, useState} from "react";
import Head from "next/head";
import {LocationInfoSidebar} from "../../components/_common/location-info-sidebar";
import {useSelector} from "react-redux";
import {
    getLocationInfoSidebarVisibility
} from "../../components/_map/map-location-info-sidebar-content/model/map-location-info-sidebar.selectors";
import {useSwitchMapLocationInfoSidebar} from "./model/hooks/use-switch-map-location-info-sidebar";
import {MapLocationInfoSidebarContent} from "../../components/_map/map-location-info-sidebar-content";
import {useInitiateMapSessionId} from "./model/hooks/use-initiate-map-session-id";
import {Layout} from "../../components/_layout/layout";

const MapPage = () => {

    const [modalWindowHeight, setModalWindowHeight] = useState(0);
    const visibility = useSelector(getLocationInfoSidebarVisibility);
    const upperLevelMapCopy = useRef();

    const passedColors = {
        backgroundColor: colors.pastelGray,
        nameColor1: colors.lightBlack,
        nameColor2: colors.lightBlack,
        linkHoverFontColor: colors.pastelGray,
        linkHoverBackground: colors.backgroundMilk,
        profileFontColor: colors.backgroundMilk,
    }

    useSwitchMapLocationInfoSidebar();
    useInitiateMapSessionId()


    return (
        <Layout passedColors={passedColors}>
            <Div
                zIndex={2}
                height={"100%"}
                width={"100%"}
                position={"relative"}
            >
                <Mapbox
                    size={"full"}
                    upperLevelMapCopy={upperLevelMapCopy}
                />
                <FiltersBlock/>
                <LocationInfoSidebar
                    visibility={visibility}
                    modalWindowHeight={`${modalWindowHeight}px`}
                    setModalWindowHeight={setModalWindowHeight}
                    className={"sidebar-scroll-inner"}
                >
                    <MapLocationInfoSidebarContent
                        map={upperLevelMapCopy}
                    />
                </LocationInfoSidebar>
            </Div>
            <LoginModalWindow/>
        </Layout>
    );
};

export default MapPage;