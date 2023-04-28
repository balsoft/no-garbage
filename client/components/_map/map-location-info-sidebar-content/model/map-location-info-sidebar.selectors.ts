import {StateSchema} from "../../../../store/state-schema";

export const getLocationInfoSidebarVisibility = (state: StateSchema) => state.locationInfoSidebar.modalVisibility;
export const getLocationInfoSidebarContent = (state: StateSchema) => state.locationInfoSidebar.modalContent;
export const getLocationInfoSidebarSaveButtonState = (state: StateSchema) => state.locationInfoSidebar.saveButtonState;
export const getUserMarkerCoordinates = (state: StateSchema) => state.locationInfoSidebar.userMarkerCoordinates